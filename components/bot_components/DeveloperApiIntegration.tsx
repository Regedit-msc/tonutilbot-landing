/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientButton } from "@components/buttons/GradientButton";
import docs from "@/assets/docs.svg";
import { GradientText } from "@components/special_text/GradientText";
import DeveloperApi from "@assets/DeveloperAPI.png";
import DeveloperApiLarge from "@assets/DeveloperAPILarge.png";
import Link from "next/link";

export const DeveloperApiIntegration = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center lg:gap-[10%] items-center text-white relative mt-28 sm:mt-[12rem] mb-28">
      <div className="flex flex-col justify-center lg:items-start items-center text-center gap-5 sm:gap-3 lg:gap-2 relative">
        <p className="text-transparent bg-gradient-to-r from from-blue-500 to-purple-500 bg-clip-text text-lg font-semibold lg:text-start lg:w-fit mb-5">
          FLEXIBLE DEVELOPMENT
        </p>
        <GradientText className="lg:w-full text-center sm:mb-5 lg:text-[3.6rem] md:text-6xl text-[3rem] tracking-tighter leading-[0.9] pb-2 lg:text-start">
          Developer <br className="hidden lg:flex" /> API{" "}
          <br className="flex lg:hidden" />
          integration
        </GradientText>
        <p className="leading-[1.8] text-white z-10 sm:text-lg font-light text-base text-start">
          Developers can easily integrate our <br /> API’s into their various
          infrastructures.
        </p>
        <Link href="https://docs.tonderlabs.com">
          <GradientButton
            text="Read our Documentation"
            className="text-base mt-3 sm:mt-6"
            isIcon={false}
            myIcon={docs}
          />{" "}
        </Link>
      </div>
      <img
        src={DeveloperApi.src}
        alt="DeveloperApi"
        className="sm:py-12 py-6 w-[320px] sm:w-[550px] lg:hidden"
      />
      <img
        src={DeveloperApiLarge.src}
        alt="DeveloperApi"
        className="hidden lg:flex lg:w-[550px]"
      />
    </div>
  );
};
