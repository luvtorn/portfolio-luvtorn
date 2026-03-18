import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-primary text-black hover:bg-[#ddbd1d]",
    secondary: "bg-secondary text-white",
    outline: "border border-secondary text-white hover:bg-secondary hover:text-white",
  };

  return (
    <button
      className={`px-5 py-2 rounded-lg transition-all ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;