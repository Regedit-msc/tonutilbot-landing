/* eslint-disable @next/next/no-img-element */

import { DarkButton } from "@components/buttons/DarkButton";
import { GradientButton } from "@components/buttons/GradientButton";
import { GradientText } from "@components/special_text/GradientText";
import { FaTelegramPlane } from "react-icons/fa";
import mesh from "@assets/mesh.png";
import light from "@assets/light.svg";

export const HeroSection = () => {
  return (
    <div className="text-white ">
      <div className="flex flex-col justify-center items-center text-center md:gap-10 gap-6 my-[9rem] md:my-[8rem] relative">
        <img
          src={mesh.src}
          className="absolute bottom-auto left-auto -z-0 animate-pulse"
        />

        <img
          src={light.src}
          className="absolute bottom-auto left-auto -z-0 animate-pulse"
        />

        <DarkButton
          icon={<FaTelegramPlane className="text-[1.5rem]" />}
          text="EXPLORE"
        />

        <GradientText
          text={
            <>
              The best utility bot <br /> on the TON network.
            </>
          }
          className="lg:text-[116px] md:text-[80px] text-[44px] lg:leading-[105px] md:leading-[74.93px] sm:leading-10"
        />

        <p className="text-white sm:text-2xl font-medium lg:leading-[33px] text-xs">
          Buy, Swap or Sell TON using our wallet along with web2 <br /> payments
          and developer API integration.{" "}
        </p>

        <GradientButton
          icon={<FaTelegramPlane className="text-[1.5rem]" />}
          text="Open In Telegram"
        />
      </div>
    </div>
  );
};
