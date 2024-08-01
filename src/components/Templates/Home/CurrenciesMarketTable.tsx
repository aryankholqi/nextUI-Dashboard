import { Key, useCallback } from "react";
import { currenciesMarketTableInfo } from "../../../mock/currencieMarketInfo";
import MainTable from "../../Modules/Table/MainTable";
import { currenyMarketsProps } from "../../../interfaces/currenyMarkerts.interface";
import formatPrice from "../../../utils/formatPrice";
import convertTimestampsToDate from "../../../utils/convertTimestampsToDate";
import {
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import VerticalDotsIcon from "../../../assets/icons/fill/VerticalDots";
import { useTranslation } from "react-i18next";
import getDirectionByLanguage from "../../../utils/getDirectionByLanguage";

const columns = [
  { name: "ID", uid: "id" },
  { name: "Name", uid: "name" },
  { name: "Amount", uid: "amount" },
  { name: "Date", uid: "date" },
  { name: "Status", uid: "status" },
  { name: "Actions", uid: "actions" },
];

const initialVisibleColumns = ["name", "amount", "date", "status", "actions"];

const statusColorMap: {
  paid: "success";
  overdue: "danger";
  pending: "warning";
  [key: string]: "success" | "danger" | "warning";
} = {
  paid: "success",
  overdue: "danger",
  pending: "warning",
};

export default function CurrenciesMarketTable() {
  const { t, i18n } = useTranslation();

  const renderCell = useCallback(
    (item: currenyMarketsProps, columnKey: Key) => {
      const cellValue = item[columnKey as keyof currenyMarketsProps];

      switch (columnKey) {
        case "name":
          return (
            <div className="flex items-center gap-4">
              <item.icon />
              <p>{item.name}</p>
            </div>
          );
        case "amount":
          return <p>{formatPrice(item.amount)}</p>;
        case "date":
          return <p>{convertTimestampsToDate(item.date)}</p>;
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[item.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <VerticalDotsIcon />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu dir={getDirectionByLanguage(i18n.language)}>
                  <DropdownItem>{t("view")}</DropdownItem>
                  <DropdownItem>{t("edit")}</DropdownItem>
                  <DropdownItem>{t("delete")}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );
  return (
    <MainTable
      columns={columns}
      initialVisibleColumns={initialVisibleColumns}
      data={currenciesMarketTableInfo()}
      renderCell={renderCell}
    />
  );
}
