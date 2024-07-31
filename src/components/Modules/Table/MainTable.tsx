import { useCallback, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Select,
  SelectItem,
} from "@nextui-org/react";
import SearchIcon from "../../../assets/icons/fill/Search";
import ChevronDownIcon from "../../../assets/icons/fill/ChevronDown";
import PlusIcon from "../../../assets/icons/fill/Plus";
import { Controller, useForm } from "react-hook-form";
import { mainTableProps } from "../../../interfaces/mainTable.interface";
import { useTranslation } from "react-i18next";

const rowsOfPage = [
  { key: 5, label: "5" },
  { key: 10, label: "10" },
  { key: 15, label: "15" },
];

export default function MainTable({
  columns,
  initialVisibleColumns,
  data,
  renderCell,
}: mainTableProps) {
  const { t, i18n } = useTranslation();

  const { control, watch, resetField } = useForm({
    defaultValues: {
      search: "",
      page: 1,
      rowsPerPage: 5,
      visibleColumns: new Set(initialVisibleColumns),
    },
  });

  const searchText = watch("search");
  const page = watch("page");
  const rowsPerPage = watch("rowsPerPage");
  const visibleColumns = watch("visibleColumns");

  const headerColumns = useMemo(() => {
    // @ts-expect-error Becuase visibleColumns is a Set of array.
    if (visibleColumns === "all") return columns;

    return columns.filter((column: { name: string; uid: string }) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns, columns]);

  const filteredItems = useMemo(() => {
    let filteredUsers = [...data];

    if (searchText.trim()) {
      filteredUsers = filteredUsers.filter((currency) =>
        currency.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    return filteredUsers;
  }, [searchText, data]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const onClear = useCallback(() => {
    resetField("search");
  }, [resetField]);

  const topContent = useMemo(
    () => (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap sm:flex-nowrap justify-between gap-3 items-end">
          <Controller
            name="search"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                isClearable
                className="w-full sm:max-w-[30%]"
                placeholder={t("searchByName")}
                startContent={<SearchIcon />}
                value={value}
                onClear={onClear}
                onValueChange={(value) => {
                  onChange(value);
                  resetField("page");
                }}
              />
            )}
          />
          <div className="grid grid-cols-2 3xs:grid-cols-3 gap-3">
            <Controller
              name="rowsPerPage"
              defaultValue={5}
              control={control}
              render={({ field: { onChange } }) => (
                <Select
                  items={rowsOfPage}
                  label={t("rows")}
                  dir={`${i18n.language === "fa" ? "rtl" : null}`}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onSelectionChange={(value: any) => {
                    onChange(value.currentKey);
                    resetField("page");
                  }}
                  classNames={{
                    trigger: ["min-h-10 h-10"],
                    label: ["text-black dark:text-white"],
                    selectorIcon: ["scale-125"],
                  }}
                >
                  {(item) => (
                    <SelectItem key={item.key}>{item.label}</SelectItem>
                  )}
                </Select>
              )}
            />
            <Controller
              name="visibleColumns"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Dropdown>
                  <DropdownTrigger>
                    <Button endContent={<ChevronDownIcon />} variant="flat">
                      {t("columns")}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    disallowEmptySelection
                    aria-label="Table Columns"
                    closeOnSelect={false}
                    selectedKeys={value}
                    selectionMode="multiple"
                    onSelectionChange={(value) => onChange(value)}
                  >
                    {columns.map((column: { name: string; uid: string }) => (
                      <DropdownItem key={column.uid} className="capitalize">
                        {column.name}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              )}
            />
            <Button color="primary" endContent={<PlusIcon />}>
              {t("addNew")}
            </Button>
          </div>
        </div>
      </div>
    ),
    [control, t, onClear, resetField, columns]
  );

  const bottomContent = useMemo(
    () => (
      <div
        className="py-2 px-5 flex xs:flex-col justify-center items-center gap-4"
        dir="ltr"
      >
        <Controller
          name="page"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Pagination
              isCompact
              showControls
              showShadow
              classNames={{ cursor: "bg-primaryGreen text-black" }}
              page={value}
              total={pages}
              onChange={onChange}
              size="lg"
            />
          )}
        />
      </div>
    ),
    [control, pages]
  );

  return (
    <Table
      aria-label="Table"
      isHeaderSticky
      bottomContent={bottomContent}
      classNames={{
        wrapper: "h-full rounded-4xl p-8 bg-white dark:bg-black",
      }}
      topContent={topContent}
    >
      <TableHeader columns={headerColumns}>
        {(column: { name: string; uid: string }) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No Records found"} items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
