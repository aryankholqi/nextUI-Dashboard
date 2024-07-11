import { Key } from "react";

interface mainTableProps {
  columns: { name: string; uid: string }[];
  initialVisibleColumns: string[];
  data: {
    id: string;
    name: string;
    amount: string;
    date: string;
    status: string;
    icon: React.ElementType;
  }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderCell: (item: any, columnKey: Key) => React.ReactNode;
}

export type { mainTableProps };
