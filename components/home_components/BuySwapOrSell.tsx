/* eslint-disable @next/next/no-img-element */
"use client";
import { Card } from "@components/card/card";
import { GradientText } from "@components/special_text/GradientText";
// import GlowCoin from "@assets/GlowCoin.png";
import Transition from "@components/transitions";

export const BuySwapOrSell = () => {
  const cards = [
    { imgIndex: 0, text: "Create buy or sell limit orders" },
    { imgIndex: 1, text: "Swap TON for other jettons and tokens" },
    { imgIndex: 2, text: "Create sell limit orders" },
  ];

  return (
    <div className="text-white">
      <div className="flex flex-col justify-center items-center text-center gap-10 my-[20%] relative">
        <Transition>
          <GradientText
            text="Buy, Swap or Sell Ton in a few clicks."
            className="insetShadow w-4/5 sm:w-3/4 text-[2.8rem] tracking-tighter sm:text-5xl lg:w-full text-center mb-6 bg-gradient-to-tr from-white to-gray-600 bg-clip-text text-transparent leading-[0.9em] font-black"
          />
        </Transition>

        <div className="flex justify-center items-center max-lg:flex-wrap gap-10 lg:gap-14 px-6 sm:px-2">
         
          {cards.map((card, i) => (
            <Transition key={i}>
              <Card
                imgIndex={card.imgIndex}
                text={card.text}
                className="shadow-[#2f2f2f] tracking-tighter"
              />
            </Transition>
          ))}
        </div>
      </div>
    </div>
  );
};
