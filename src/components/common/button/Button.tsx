import React from "react";

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  label: string;
  marginTop?: string;
}

const Button: React.FC<ButtonProps> = ({
  bgColor = "bg-primary",
  textColor = "text-white_900",
  label,
  marginTop = "mt-[24px]",
}) => {
  return (
    <button
      className={`w-[450px] h-[70px] flex justify-center items-center ${bgColor} rounded-[40px] ${textColor} text-[20px] font-extrabold ${marginTop}`}
    >
      {label}
    </button>
  );
};

export default Button;
