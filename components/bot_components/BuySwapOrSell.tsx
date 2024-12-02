"use client";
import { useState, useEffect, useRef } from "react";
import { GradientText } from "@components/special_text/GradientText";
import sell from "@assets/buy-swap-or-sell/sell.svg";
import sellglow from "@assets/buy-swap-or-sell/sellglow.svg";
import create from "@assets/buy-swap-or-sell/create.svg";
import createglow from "@assets/buy-swap-or-sell/createglow.svg";
import swap from "@assets/buy-swap-or-sell/swap.svg";
import swapglow from "@assets/buy-swap-or-sell/swapglow.svg";
import Transition from "@components/transitions";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const BuySwapOrSell = () => {
  const [inView, setInView] = useState<boolean[]>([false, false, false]);

  const cardRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];

  const cards = [
    [sell, sellglow],
    [create, createglow],
    [swap, swapglow],
  ];

  // IntersectionObserver callback
  const handleIntersection: IntersectionObserverCallback = (
    entries,
    observer
  ) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setInView((prevState) => {
          const updatedState = [...prevState];
          updatedState[index] = true;
          return updatedState;
        });
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    cardRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [inView]);

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
          {cards.map((card: (string | StaticImport)[], i: number) => (
            <div
              key={i} // Add a key to avoid warnings in React
              ref={cardRefs[i]} // Assign the corresponding ref to each card
            >
              <Transition className="relative w-[20rem] md:w-[23rem] h-[20rem] md:h-[23rem]">
                <Image
                  src={card[0]}
                  alt="sell"
                  width={400}
                  height={400}
                  className={`absolute duration-1000 w-[20rem] md:w-[23rem] ${
                    inView[i] ? "opacity-0" : "opacity-100"
                  }`}
                />
                <Image
                  src={card[1]}
                  alt="sellglow"
                  width={400}
                  height={400}
                  className={`absolute duration-1000 w-[20rem] md:w-[23rem] ${
                    inView[i] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Transition>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
