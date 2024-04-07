/* eslint-disable @next/next/no-img-element */

import { Card } from "@components/card/card";
import { GradientText } from "@components/special_text/GradientText";
import GlowCoin from "@assets/GlowCoin.png";

export const BuySwapOrSell = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col justify-center items-center text-center gap-10 my-[20%] relative">
        <GradientText
          text="Buy, Swap or Sell Ton in a few clicks."
          className=" text-center mb-10 lg:text-[80px] md:text-6xl text-[40px]"
        />

        <div className="flex justify-center items-center gap-[5%] w-full max-lg:flex-wrap max-lg:gap-14 p-2">
          <Card imgIndex={0} text="Create buy or sell limit orders" />
          <Card imgIndex={1} text="Swap TON for other jettons and tokens" />
          <Card imgIndex={2} text="Create sell limit orders" />
        </div>
      </div>
    </div>
  );
};
