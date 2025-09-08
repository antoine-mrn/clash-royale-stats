"use client";

import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";

const colors = {
    primary: "#45AEEE", // bleu clair
    secondary: "#E8488A", // rose/rouge
    accent: "#FFF232", // jaune
    info: "#64a6bd", // bleu canard
};

const data = [
    { name: "Wins", value: 13305, color: colors.primary },
    { name: "Loss", value: 9496, color: colors.secondary },
];

const winRate = ((13305 / (13305 + 9496)) * 100).toFixed(2);

export default function Example() {
    return (
        <ResponsiveContainer width="50%" height="100%">
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${entry.name}`} fill={entry.color} />
                    ))}
                </Pie>
                <Label
                    value={`${winRate}% win rate`}
                    offset={0}
                    position="center"
                    fontWeight={600}
                    fontSize={12}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}
