/* eslint-disable @next/next/no-img-element */
"use client";
import { DarkButton } from "@components/buttons/DarkButton";
import { GradientButton } from "@components/buttons/GradientButton";
import { GradientText } from "@components/special_text/GradientText";
import { FaTelegramPlane } from "react-icons/fa";
import mesh from "@assets/mesh.png";
import light from "@assets/light.svg";
import Transition from "@components/transitions";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setInView(true);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <Transition>
      <div className="text-white px-3 sm:px-0">
        <div className="flex flex-col justify-center items-center text-center md:gap-10 gap-6 my-[6rem] md:my-[8rem] relative">
          <img
            src={mesh.src}
            alt="Mesh Image"
            className="absolute bottom-auto left-auto -z-0 animate-pulse scale-125"
          />

          <img
            src={light.src}
            alt="Light Image"
            className="absolute bottom-auto left-auto -z-0 animate-pulse scale-[2]"
          />

          <div
            className={`${
              inView ? "opacity-100" : "opacity-0"
            } transition-all duration-1000 ease-in-out`}
          >
            <DarkButton text="EXPLORE" />
          </div>

          <GradientText
            text={
              <>
                The best utility bot on
                <br className="hidden lg:flex" /> the TON network.
              </>
            }
            className="insetShadow lg:text-8xl lg:leading-[105px] md:leading-[74.93px] sm:leading-11 text-5xl sm:text-6xl font-black sm:px-3 tracking-tighter"
          />

          <p className="text-white font-medium lg:leading-[33px] text-sm sm:text-xl w-[85%] sm:w-2/3">
            Buy, Swap or Sell TON using our wallet
            <br className="flex sm:hidden" />
            along with web2 payments and developer API integration.{" "}
          </p>

          <GradientButton
            className="text-sm"
            icon={<FaTelegramPlane className="text-[1.3rem]" />}
            text="Open In Telegram"
          />
        </div>
      </div>
    </Transition>
  );
};
