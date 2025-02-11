import React from "react";

type ButtonProps = {
  handleSiderBar: () => void;
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ handleSiderBar, children, className}: ButtonProps) => {
  return (
    <button
      onClick={handleSiderBar}
      className={`bg-teal-600 text-white p-2 rounded-lg cursor-pointer hover:bg-teal-700 transition-colors ${className}`}
    >
     {children}
    </button>
  );
};
