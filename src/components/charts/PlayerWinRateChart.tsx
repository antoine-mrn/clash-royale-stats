"use client";

import { chartsColors } from "@/constants/colors";
import { PlayerBattleStats } from "@/types/player.interface";
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function PlayerWinRateChart({
    playerStats,
}: {
    playerStats: PlayerBattleStats;
}) {
    const { wins, losses } = playerStats;

    const pieData = [
        { name: "Wins", value: wins, color: chartsColors.primary },
        { name: "Loss", value: losses, color: chartsColors.secondary },
    ];

    const winRate = ((wins / (wins + losses)) * 100).toFixed(2);

    return (
        <ResponsiveContainer width="50%" height="100%">
            <PieChart>
                <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={90}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                >
                    {pieData.map((entry, index) => (
                        <Cell key={`cell-${entry.name}`} fill={entry.color} />
                    ))}
                </Pie>
                <Label
                    value={`${winRate}% win rate`}
                    offset={0}
                    position="center"
                    fontWeight={600}
                />
            </PieChart>
        </ResponsiveContainer>
    );
}
