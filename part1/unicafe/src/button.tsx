import React from "react";

interface ButtonProps {
    label: string;
    clickHandler: (value) => void;
    value: number;
}

export const Button: React.FC<ButtonProps> = ({ label, clickHandler, value }) => {
    return <button onClick={() => { clickHandler(value + 1)}}>{label}</button>;
};