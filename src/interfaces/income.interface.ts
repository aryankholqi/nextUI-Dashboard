interface incomeProps {
  price: number;
  Icon: React.ElementType;
  percentage: number;
  iconBgColor: {
    light: string;
    dark: string;
  };
  indicatorBgColor: {
    light: string;
    dark: string;
  };
}

export type { incomeProps };
