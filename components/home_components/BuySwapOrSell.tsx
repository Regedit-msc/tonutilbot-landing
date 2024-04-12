/* eslint-disable @next/next/no-img-element */

import { Card } from "@components/card/card";
import { GradientText } from "@components/special_text/GradientText";
import GlowCoin from "@assets/GlowCoin.png";
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
            className="w-4/5 sm:w-3/4 text-6xl sm:text-5xl lg:w-full text-center mb-10 lg:text-[80px] text-[40px] bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent leading-[0.75em] font-black"
          />
        </Transition>

        <div className="flex justify-center items-center gap-[5%] max-lg:flex-wrap max-lg:gap-14 py-2 px-6 sm:px-2">
          {cards.map((card, i) => (
            <Transition key={i}>
              <Card imgIndex={card.imgIndex} text={card.text} />
            </Transition>
          ))}
        </div>
      </div>
    </div>
  );
};
