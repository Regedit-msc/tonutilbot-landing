/* eslint-disable @next/next/no-img-element */
import { GradientButton } from "@components/buttons/GradientButton";
import React, { FC } from "react";
import zigzag from "@assets/landing-page/Zigzag.png";
import zigzag2 from "@assets/landing-page/Zigzag2.png";
import Link from "next/link";

interface IProps {}

const Hero: FC<IProps> = () => {
  return (
    <>
      <section className="w-full text-white flex flex-col justify-center items-center pb-24 md:pb-32 z-10">
        <div className="flex flex-col justify-center items-center text-center lg:text-8xl text-[2.8rem] sm:text-[4rem] font-bold sm:px-3 tracking-tighter leading-[0.9] pt-40 md:pt-0 lg:pt-8">
          Building Web3 <br />{" "}
          <div className="flex gap-3 justify-center">
            <p className="text-transparent bg-gradient-to-r from from-blue-500 to-purple-500 bg-clip-text">
              Solutions
            </p>{" "}
            for the
          </div>
          TON Network
        </div>
        <p className="text-center py-6 sm:py-8 text-sm lg:text-xl z-10">
          We&apos;re a Web3 company dedicated to{" "}
          <br className="flex sm:hidden" /> developing the{" "}
          <br className="hidden sm:flex" /> best utility software on{" "}
          <br className="flex sm:hidden" /> the TON network
        </p>

        <Link href="https://t.me/tonderbot_news">
          <GradientButton
            myPadding={true}
            className="text-sm px-6 py-2 sm:px-10 sm:py-3"
            text="Contact Us"
            isIcon={false}
          />
        </Link>
      </section>
      <img
        src={zigzag.src}
        alt=""
        className="zig-float top-[21rem] lg:top-[30rem] h-24 md:h-28 lg:h-32 min-[1200px]:h-40 absolute left-[6%] md:left-[18%] lg:left-[10%] min-[1200px]:left-[15%] z-0"
      />
      <img
        src={zigzag2.src}
        alt=""
        className="zig-float-2 top-[16.5rem] sm:top-[18rem] lg:top-[24rem] h-14 md:h-20 lg:h-24 min-[1200px]:h-32 absolute right-[10%] md:right-[15%] lg:right-[10%] z-20"
      />
    </>
  );
};

export default Hero;
