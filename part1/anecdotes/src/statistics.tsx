import React from "react";

interface StatisticsProps {
    label: string;
    stats: number;
}

export const StatisticLine: React.FC<StatisticsProps> = ({ label, stats }) => {
    return <tr><td>{label}</td><td>{stats}</td></tr>;
};