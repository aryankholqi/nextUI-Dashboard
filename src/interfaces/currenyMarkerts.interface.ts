import { ReactNode } from "@tanstack/react-router";

interface currenyMarketsProps {
  id: string;
  name: string;
  amount: string;
  date: string;
  status: string;
  icon: ReactNode;
}

export type { currenyMarketsProps };
