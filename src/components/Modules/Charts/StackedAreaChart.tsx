import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function StackedAreaChart() {
  const data = [
    {
      name: "Jun",
      uv: 1000,
      pv: 1100,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 1400,
      pv: 1800,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 3000,
      pv: -600,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2500,
      pv: 1600,
      amt: 2000,
    },
  ];
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <AreaChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#00FF6B"
          fill="#CCFFCD"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#000"
          fill="#fff"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
