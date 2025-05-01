import React, { ReactNode, MouseEventHandler } from "react";

type ButtonVariant = "secondary" | "primary";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "secondary",
}) => {
  const baseClasses =
    "px-6 py-3 rounded-md border font-geist transition-all duration-300 hover:scale-105";
  const variants: Record<ButtonVariant, string> = {
    secondary: "bg-white text-[#222] border-[#222]",
    primary: "bg-[#FF7F24] text-white border-[#FF7F24]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
