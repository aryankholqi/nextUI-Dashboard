import { useTheme } from "next-themes";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function StackedAreaChart() {
  const { theme } = useTheme()
  const isLightMode = theme === "light"
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

  const areaPvStroke = isLightMode ? "#000" : "#FFF"

  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00FF6B" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#00FF6B" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#000" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <Tooltip contentStyle={{
          backgroundColor: isLightMode ? "white" : "black"
        }} />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#00FF6B"
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke={areaPvStroke}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
