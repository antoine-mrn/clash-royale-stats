"use client";

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

const colors = {
    primary: "#45AEEE", // bleu clair
    secondary: "#E8488A", // rose/rouge
    accent: "#FFF232", // jaune
    info: "#64a6bd", // bleu canard
};

export default function PlayerWinLossChart({
    playerStats,
}: {
    playerStats: PlayerBattleStats;
}) {
    const barData = [
        {
            name: "Total Battles",
            value: playerStats.battleCount,
            color: colors.info,
        },
        { name: "Wins", value: playerStats.wins, color: colors.primary },
        { name: "Losses", value: playerStats.losses, color: colors.secondary },
        {
            name: "3 Crown Wins",
            value: playerStats.threeCrownWins,
            color: colors.accent,
        },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={barData}
                margin={{ left: 10, right: 10, bottom: 35 }}
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
