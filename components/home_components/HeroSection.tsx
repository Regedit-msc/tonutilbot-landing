/* eslint-disable @next/next/no-img-element */
"use client";
import { DarkButton } from "@components/buttons/DarkButton";
import { GradientButton } from "@components/buttons/GradientButton";
import { GradientText } from "@components/special_text/GradientText";
import docs from "@/assets/docs.svg";
import mesh from "@assets/mesh.png";
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
      <div className="relative text-white px-3 sm:px-0 pt-20 sm:pt-0 lg:pt-20">
        <div className="flex flex-col justify-center items-center text-center gap-6 my-[4rem] sm:my-[8rem] md:my-[4rem] lg:my-0 relative">
          <div
            className={`${
              inView ? "opacity-100" : "opacity-0"
            } transition-all duration-1000 ease-in-out`}
          >
            <DarkButton text="TONDERBOT" className="sm:translate-y-3 text-sm" />
          </div>

          <GradientText
            text={
              <>
                The best utility <br className="flex sm:hidden" /> bot
                <br className="sm:flex hidden" /> on the TON{" "}
                <br className="sm:hidden" /> network.
              </>
            }
            className="insetShadow lg:text-8xl text-[3rem] sm:text-[4rem] font-semibold sm:px-3 tracking-tighter leading-[0.9]"
          />

          <p className="text-white font-normal text-sm lg:text-lg leading-[1.7]">
            Buy, Swap or Sell TON using our wallet
            <br className="flex sm:hidden" />
            along with web2 <br className="sm:flex hidden" /> payments and
            <br className="sm:hidden" /> developer API integration.{" "}
          </p>

          <section className="flex justify-center items-center gap-3">
            <GradientButton className="text-sm" text="Open In Telegram" />
            <GradientButton
              text="Read our Documentation"
              className="hidden sm:flex text-sm"
              gradient={false}
              isIcon={false}
              myIcon={docs}
              hover={false}
            />
          </section>
        </div>
      </div>
    </Transition>
  );
};
