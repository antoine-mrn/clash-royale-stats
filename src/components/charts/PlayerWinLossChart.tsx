"use client";

import { chartsColors } from "@/constants/colors";
import { PlayerBattleStats } from "@/types/player.interface";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";

export default function PlayerWinLossChart({
    playerStats,
}: {
    playerStats: PlayerBattleStats;
}) {
    const barData = [
        {
            name: "Total Battles",
            value: playerStats.battleCount,
            color: chartsColors.info,
        },
        { name: "Wins", value: playerStats.wins, color: chartsColors.primary },
        {
            name: "Losses",
            value: playerStats.losses,
            color: chartsColors.secondary,
        },
        {
            name: "3 Crown Wins",
            value: playerStats.threeCrownWins,
            color: chartsColors.accent,
        },
    ];

    return (
        <ResponsiveContainer
            width="100%"
            height="100%"
            aria-label={`Chart showing a total of ${playerStats.battleCount} battles, with ${playerStats.wins} wins, ${playerStats.losses} losses, and ${playerStats.threeCrownWins} three-crown wins`}
        >
            <BarChart
                data={barData}
                margin={{ top: 16, right: 10, bottom: 35, left: 10 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="name"
                    tick={{ fontSize: 12 }}
                    angle={-30}
                    textAnchor="end"
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value">
                    {barData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
}
