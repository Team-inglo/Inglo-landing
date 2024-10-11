"use client";

import { useRouter } from "next/navigation";
import React from "react";

type ButtonProps = {
  bgColor?: string;
  textColor?: string;
  label: string;
  marginTop?: string;
  link?: string;
};

const Button: React.FC<ButtonProps> = ({
  bgColor = "bg-primary",
  textColor = "text-white_900",
  label,
  marginTop = "mt-[24px]",
  link = "/",
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <button
      className={`w-[450px] h-[70px] flex justify-center items-center ${bgColor} hover:bg-button_gradient rounded-[40px] ${textColor} hover:text-light_green text-[20px] font-extrabold ${marginTop} transition-colors duration-600`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
