import React from "react";

interface ButtonProps {
    label: string;
    clickHandler: (value) => void;
}

export const Button: React.FC<ButtonProps> = ({ clickHandler, label }) => {
    return <button onClick={clickHandler}>{label}</button>;
};