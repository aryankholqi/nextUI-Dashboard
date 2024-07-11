import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

export default function TinyBarChart() {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 2500,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 3500,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 1500,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 3000,
            pv: 4800,
            amt: 2181,
        },

    ];
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart data={data} barSize={30}>
                    <Bar dataKey="uv" radius={[50, 50, 50, 50]}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 2 ? "#000" : "#00FF6B"} {...entry} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div >
    )
}
