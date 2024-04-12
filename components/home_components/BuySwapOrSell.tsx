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
            className=" text-center mb-10 lg:text-[80px] md:text-6xl text-[40px]"
          />
        </Transition>

        <div className="flex justify-center items-center gap-[5%] w-full max-lg:flex-wrap max-lg:gap-14 p-2">
          {cards.map((card) => (
            <Transition>
              <Card imgIndex={card.imgIndex} text={card.text} />
            </Transition>
          ))}
        </div>
      </div>
    </div>
  );
};
