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
    <button
      className={`${className} shadow-lg rounded-full flex justify-center items-center text-white gap-2 w-fit transition-all z-10
      ${
        gradient
          ? "bg-gradient-to-r from-blue-400 to-purple-600 via-indigo-500"
          : "border"
      }
      ${!hover && "hover:shadow-2xl"}
      ${!myPadding && "py-4 px-6"}
      `}
    >
      {hover && (
        <img
          src={HoverGradient.src}
          className={`scale-150 sm:scale-[2] absolute left-auto opacity-0 transition-all duration-1000 ease-in-out w-[16rem] translate-y-8 ${
            hoverPic && "opacity-100"
          }`}
          alt="HoverGradient Image"
          onMouseOver={() => {
            setHoverPic(true);
          }}
          onMouseOut={() => {
            setHoverPic(false);
          }}
        />
      )}
      {myIcon && <img src={myIcon.src} alt={myIcon} className="w-[25px]" />}
      {isIcon && <img src={openInTelegramPlane.src} alt="tg" />} {text}
    </button>
  );
}
