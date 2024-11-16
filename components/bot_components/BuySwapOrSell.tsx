/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientText } from "@components/special_text/GradientText";
import sell from "@assets/buy-swap-or-sell/sell.svg";
import sellglow from "@assets/buy-swap-or-sell/sellglow.svg";
import create from "@assets/buy-swap-or-sell/create.svg";
import createglow from "@assets/buy-swap-or-sell/createglow.svg";
import swap from "@assets/buy-swap-or-sell/swap.svg";
import swapglow from "@assets/buy-swap-or-sell/swapglow.svg";
import Transition from "@components/transitions";
import Image from "next/image";

export const BuySwapOrSell = () => {
  const cards = [
    [sell, sellglow],
    [create, createglow],
    [swap, swapglow],
  ];

  return (
    <div className="text-white">
      <div className="flex flex-col justify-center items-center text-center gap-4 mb-20 sm:mb-40 md:mt-16 mt-10 lg:mt-40 relative">
        <Transition>
          <GradientText>
            Buy, Swap or <br className="sm:hidden" /> Sell{" "}
            <br className="hidden sm:flex" /> TON in a{" "}
            <br className="sm:hidden" /> few clicks.
          </GradientText>
        </Transition>

        <p className="text-balance -mt-4 sm:-mt-10 sm:text-lg md:text-xl px-4 font-light">
          Import your wallet or create a new one and <br /> experience the ease
          of trading using TonderBot
        </p>

        <div className="flex justify-center items-center max-xl:flex-wrap py-10 gap-4 lg:mt-6 px-6">
          {cards.map((card, i) => (
            <Transition
              key={i}
              className="relative w-[20rem] md:w-[23rem] h-[20rem] md:h-[23rem]"
            >
              <Image
                src={card[0]}
                alt=""
                width={400}
                height={400}
                className="absolute duration-500 w-[20rem] md:w-[23rem] hover:opacity-0"
              />
              <Image
                src={card[1]}
                alt=""
                width={400}
                height={400}
                className="absolute opacity-0 duration-500 w-[20rem] md:w-[23rem] hover:opacity-100"
              />
            </Transition>
          ))}
        </div>
      </div>
    </div>
  );
};
