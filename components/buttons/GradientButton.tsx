/* eslint-disable @next/next/no-img-element */
"use client";
import HoverGradient from "@assets/HoverGradient.png";
import openInTelegramPlane from "@assets/openInTelegramPlane.svg";
import { useState } from "react";

interface GradientButtonProps {
  text?: string;
  className?: string;
  isIcon?: boolean;
  hover?: boolean;
  gradient?: boolean;
  myIcon?: any;
  myPadding?: boolean;
}

export function GradientButton({
  gradient = true,
  hover = true,
  isIcon = true,
  text = "",
  className = "",
  myIcon,
  myPadding = false,
}: GradientButtonProps): JSX.Element {
  const [hoverPic, setHoverPic] = useState(false);

  return (
    <div className="relative flex justify-center items-center">
      <button
        className={`${className} shadow-lg rounded-full flex justify-center items-center text-white gap-2 w-fit transition-all
      ${
        gradient
          ? "bg-gradient-to-r from-[#3DB3FC] to-[#936BF9] via-[#5C80FA]"
          : "border"
      }
      ${!hover && "hover:shadow-2xl"}
      ${!myPadding && "py-4 px-6"}
      `}
        onMouseOver={() => {
          setHoverPic(true);
        }}
        onMouseOut={() => {
          setHoverPic(false);
        }}
      >
        {myIcon && <img src={myIcon.src} alt={myIcon} className="w-[25px]" />}
        {isIcon && <img src={openInTelegramPlane.src} alt="tg" />} {text}
      </button>
      {hover && (
        <div
          className={`w-[10rem] absolute scale-150 top-0 opacity-0 transition-all duration-1000 ease-in-out h-[3rem] translate-y-8 bg-gradient-to-r from-[#3DB3FC] via-[#5C80FA] to-[#936BF9] blur-2xl rounded-full -z-10 ${
            hoverPic && "opacity-100"
          }`}
        />
      )}
    </div>
  );
}
