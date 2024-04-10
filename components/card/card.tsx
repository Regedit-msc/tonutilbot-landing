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
}

const hover = [GlowCoin, GlowMoney, GlowPaper];
const normal = [coin, Money, Paper];

export const Card: React.FC<CardProps> = ({ imgIndex, text }) => {
  const [hoverPic, setHoverPic] = useState(false);
  return (
    <div
      className="flex flex-col items-center justify-between px-8 py-12 max-w-[395px] min-w-[285px] w-full h-[371px] box-border inset-0 bg-[#ffffff13] rounded-3xl border border-[#ffffff20] relative cursor-pointer"
      onMouseOver={() => {
        setHoverPic(true);
      }}
      onMouseOut={() => {
        setHoverPic(false);
      }}
    >
      {hoverPic && (
        <img
          src={HoverGradient.src}
          className="absolute top-0 left-auto"
          alt="HoverGradient Image"
        />
      )}
      <img
        src={hoverPic ? hover[imgIndex].src : normal[imgIndex].src}
        className="w-[140px]"
        alt="HoverGradient Image"
      />

      <h1 className="bg-gradient-to-r from-gray-300 via-white to-[#a9baeb] inline-block text-transparent bg-clip-text lg: md:text-3xl text-[22.35px] font-bold">
        {text}
      </h1>
    </div>
  );
};
