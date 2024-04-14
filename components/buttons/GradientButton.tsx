/* eslint-disable @next/next/no-img-element */
"use client";
import HoverGradient from "@assets/HoverGradient.png";
import { useState } from "react";

interface GradientButtonProps {
  icon?: JSX.Element;
  text?: string;
  className?: string;
}

export function GradientButton({
  icon = <></>,
  text = "",
  className = "",
}: GradientButtonProps): JSX.Element {
  const [hoverPic, setHoverPic] = useState(false);

  return (
    <button
      className={`bg-gradient-to-r from-blue-400 to-purple-600 via-indigo-500 shadow-lg rounded-full py-3 px-4 flex justify-center items-center text-white gap-2 w-fit transition-all z-10 ${className} `}
    >
      <img
        src={HoverGradient.src}
        className={`scale-125 blur-2xl absolute left-auto opacity-0 transition-all duration-1000 ease-in-out w-[16rem] ${
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
      {icon}
      {text}
    </button>
  );
}
