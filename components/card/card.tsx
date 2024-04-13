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
  text: string;
  className?: string;
}

const hover = [GlowCoin, GlowMoney, GlowPaper];
const normal = [coin, Money, Paper];

export const Card: React.FC<CardProps> = ({ imgIndex, text, className }) => {
  const [hoverPic, setHoverPic] = useState(false);
  return (
    <div
      className={`${className} flex flex-col items-center justify-between px-10 sm:px-8 max-w-[395px] min-w-[285px] w-full h-[371px] box-border inset-0 bg-gradient-to-t from-[#ffffff10] to-[#111] rounded-[2.8rem] border border-[#ffffff20] relative cursor-pointer`}
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
        alt="HoverGradient Image"
      />
      {/* */}
      <div
        className={`w-full h-full flex justify-center items-center hover:opacity-100 transition-all duration-500 ease-in-out`}
      >
        <img
          src={normal[imgIndex].src}
          className={`absolute w-[140px] transition-all duration-500 ease-in-out ${
            hoverPic ? "opacity-0" : "opacity-100"
          }`}
          alt="HoverGradient Image"
        />
        <img
          src={hover[imgIndex].src}
          className={`w-[140px] transition-all duration-500 ease-in-out opacity-0 ${
            hoverPic && "opacity-100"
          }`}
          alt="HoverGradient Image"
        />
      </div>
      <h1 className="bg-white inline-block text-transparent bg-clip-text lg: sm:text-3xl text-[1.7rem] font-bold -translate-y-12 leading-none">
        {text}
      </h1>
    </div>
  );
};
