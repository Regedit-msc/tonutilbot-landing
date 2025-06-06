/* eslint-disable @next/next/no-img-element */
"use client";
import HoverGradient from "@assets/HoverGradient.png";
import coin from "@assets/Coin.png";
import GlowCoin from "@assets/GlowCoin.png";

import GlowMoney from "@assets/GlowMoney.png";
import Money from "@assets/money.png";

import GlowPaper from "@assets/GlowPaper.png";
import Paper from "@assets/Paper.png";
import { useState } from "react";

interface CardProps {
  imgIndex: number;
  title: string;
  content: string;
  className?: string;
}

const hover = [GlowCoin, GlowMoney, GlowPaper];
const normal = [coin, Money, Paper];
const iconDescriptions = ["Coin icon", "Money icon", "Paper icon"];

export const Card: React.FC<CardProps> = ({
  imgIndex,
  title,
  content,
  className,
}) => {
  const [hoverPic, setHoverPic] = useState(false);
  return (
    <div
      className={`${className} flex flex-col items-center justify-between px-4 w-[325px] h-[320px] box-border inset-0 bg-gradient-to-b from-[#ffffff03] to-[#ffffff09] rounded-[1.5rem] border border-[#ffffff20] relative cursor-pointer transition-all duration-500 ease-in-out 
      ${hoverPic && "sm:-translate-y-4"}`}
      onMouseOver={() => {
        setHoverPic(true);
      }}
      onMouseOut={() => {
        setHoverPic(false);
      }}
    >
      <img
        src={HoverGradient.src}
        className={`absolute top-0 left-auto opacity-0 transition-all duration-500 ease-in-out ${
          hoverPic && "opacity-100"
        }`}
        alt="Card hover gradient background effect"
      />
      {/* */}
      <div
        className={`w-full h-full flex justify-center items-center hover:opacity-100 transition-all duration-500 ease-in-out`}
      >
        <img
          src={normal[imgIndex].src}
          className={`absolute w-[100px] transition-all duration-1000 ease-in-out -translate-y-2   ${
            hoverPic ? "opacity-0" : "opacity-100"
          }
           ${imgIndex === 0 && "scale-100"}
           ${imgIndex === 1 && "scale-125"}
           ${imgIndex === 2 && "scale-150"}`}
          alt={iconDescriptions[imgIndex]}
        />
        <img
          src={hover[imgIndex].src}
          className={`w-[100px] transition-all duration-1000 ease-in-out opacity-0 -translate-y-2 ${
            hoverPic && "opacity-100"
          }
         ${imgIndex === 0 && "scale-100"}
           ${imgIndex === 1 && "scale-125"}
           ${imgIndex === 2 && "scale-150"}`}
          alt={`Glowing ${iconDescriptions[imgIndex]}`}
        />
      </div>
      <div className="bg-white inline-block text-transparent bg-clip-text text-3xl font-semibold  -translate-y-8 leading-[1.2] w-[90%] text-start">
        <h2 className="pr-20">{title}</h2>
        <p className="text-base mt-2 font-normal">{content}</p>
      </div>
    </div>
  );
};
