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
      className={`${className} flex flex-col items-center justify-between px-4 w-[295px] h-[277px] box-border inset-0 bg-gradient-to-t from-[#ffffff10] to-[#111] rounded-[2rem] border border-[#ffffff20] relative cursor-pointer transition-all duration-500 ease-in-out
      ${hoverPic && "sm:-translate-y-5 lg:-translate-y-10"}`}
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
          className={`absolute w-[100px] transition-all duration-1000 ease-in-out -translate-y-2   ${
            hoverPic ? "opacity-0" : "opacity-100"
          }
           ${imgIndex === 0 && "scale-100"}
           ${imgIndex === 1 && "scale-125"}
           ${imgIndex === 2 && "scale-150"}`}
          alt="HoverGradient Image"
        />
        <img
          src={hover[imgIndex].src}
          className={`w-[100px] transition-all duration-1000 ease-in-out opacity-0 -translate-y-2 ${
            hoverPic && "opacity-100"
          }
         ${imgIndex === 0 && "scale-100"}
           ${imgIndex === 1 && "scale-125"}
           ${imgIndex === 2 && "scale-150"}`}
          alt="HoverGradient Image"
        />
      </div>
      <h1 className="bg-white inline-block text-transparent bg-clip-text text-[1.45rem] font-bold -translate-y-8 leading-[1.2] w-[90%]">
        {text}
      </h1>
    </div>
  );
};
