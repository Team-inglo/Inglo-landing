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
      className={`w-[450px] h-[70px] flex justify-center items-center ${bgColor} hover:bg-button_gradient rounded-[40px] ${textColor} hover:text-light_green text-[20px] font-extrabold ${marginTop} transition-colors duration-600`}
    >
      {label}
    </button>
  );
};

export default Button;
