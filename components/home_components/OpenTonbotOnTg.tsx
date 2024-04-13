/* eslint-disable @next/next/no-img-element */

import { DarkButton } from "@components/buttons/DarkButton";
import { GradientButton } from "@components/buttons/GradientButton";
import { GradientText } from "@components/special_text/GradientText";
import { FaTelegramPlane } from "react-icons/fa";
import Xmen from "@assets/xmen.png";

export const OpenTonbotOnTg = () => {
  return (
    <div className="text-white bg-gradient-to-r from-[#3DB3FC] via-[#5C80FA] to-[#936BF9] rounded-[2rem] py-14 px-5 mx-5 my-14 sm:px-0 mt-40 sm:mt-[20%] w-[27rem] sm:w-full overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center gap-10  relative">
        <img
          src={Xmen.src}
          alt="Xmen Image"
          className="absolute left-0 -z-0 opacity-40 max-md:bottom-[-45%]"
        />

        <DarkButton
          text="HOW TO GET STARTED"
          className="shadow-none tracking-widest"
        />

        <GradientText
          text={
            <>
              Open TonBot on <br /> telegram, create a wallet
              <br className="hidden sm:flex" /> and start trading.
            </>
          }
          className="lg:text-7xl z-10 lg:leading-[68px] leading-[0.75] text-3xl text-white"
        />

        <button
          className={`bg-white shadow-lg rounded-full py-4 px-6 flex justify-center items-center  gap-3  w-fit transition-all z-10 `}
        >
          <FaTelegramPlane className="text-[1.5rem]  text-indigo-600 " />
          <div className="font-black text-lg bg-gradient-to-tr from-blue-400 to-indigo-600 bg-clip-text text-transparent">
            Open In Telegram
          </div>
        </button>
      </div>
    </div>
  );
};
