"use client";

import { Cell, Pie, PieChart } from "recharts";

const data01 = [
    {
        name: "Group A",
        value: 400,
    },
    {
        name: "Group B",
        value: 300,
    },
    {
        name: "Group C",
        value: 300,
    },
    {
        name: "Group D",
        value: 200,
    },
    {
        name: "Group E",
        value: 278,
    },
    {
        name: "Group F",
        value: 189,
    },
];

export default function WinRateCharts({ data }: any) {
    console.log("🚀 ~ WinRateCharts ~ data:", data);
    return (
        <div>
            <PieChart width={800} height={400}>
                <Pie
                    data={data}
                    cx={120}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {/* {data.map((entry, index) => (
                        <Cell
                            key={`cell-${entry.name}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))} */}
                </Pie>
            </PieChart>
        </div>
    );
}
