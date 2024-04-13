/* eslint-disable @next/next/no-img-element */

import { DarkButton } from "@components/buttons/DarkButton";
import { GradientButton } from "@components/buttons/GradientButton";
import { GradientText } from "@components/special_text/GradientText";
import { FaTelegramPlane } from "react-icons/fa";
import mesh from "@assets/mesh.png";
import light from "@assets/light.svg";
import Transition from "@components/transitions";

export const HeroSection = () => {
  return (
    <Transition>
      <div className="text-white px-3 sm:px-0">
        <div className="flex flex-col justify-center items-center text-center md:gap-10 gap-6 my-[6rem] md:my-[8rem] relative">
          <img
            src={mesh.src}
            alt="Mesh Image"
            className="absolute bottom-auto left-auto -z-0 animate-pulse"
          />

          <img
            src={light.src}
            alt="Light Image"
            className="absolute bottom-auto left-auto -z-0 animate-pulse"
          />

          <DarkButton
            icon={<FaTelegramPlane className="text-[1.5rem]" />}
            text="EXPLORE"
          />

          <GradientText
            text={
              <>
                The best utility bot <br className="flex sm:hidden lg:hidden" />{" "}
                on
                <br className="hidden lg:flex" /> the TON network.
              </>
            }
            className="lg:text-8xl lg:leading-[105px] md:leading-[74.93px] sm:leading-11 text-5xl sm:text-6xl font-black sm:px-3"
          />

          <p className="text-white font-medium lg:leading-[33px] text-base sm:text-xl sm:w-2/3">
            Buy, Swap or Sell TON using our <br className="flex sm:hidden" />
            wallet along with web2 payments and developer API integration.{" "}
          </p>

          <GradientButton icon={<FaTelegramPlane />} text="Open In Telegram" />
        </div>
      </div>
    </Transition>
  );
};
