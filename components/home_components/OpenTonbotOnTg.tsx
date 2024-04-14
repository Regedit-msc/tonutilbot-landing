/* eslint-disable @next/next/no-img-element */

import TelegramPlanePurple from "@assets/TelegramPlanePurple.svg";

import { GradientText } from "@components/special_text/GradientText";
import Xmen from "@assets/xmen.png";

export const OpenTonbotOnTg = () => {
  return (
    <div className="text-white bg-gradient-to-r from-[#3DB3FC] via-[#5C80FA] to-[#936BF9] rounded-[2rem] my-14 sm:px-0 mt-40 sm:mt-[20%] w-full h-[297px] sm:w-full overflow-hidden mx-[4%]">
      <div className="flex flex-col justify-center items-center text-center gap-4 relative w-full h-full">
        <img
          src={Xmen.src}
          alt="Xmen Image"
          className="absolute -left-[70%] top-[30%] -z-0 opacity-40 max-md:bottom-[-45%]"
        />

        <button
          className="bg-gradient-to-b from-transparent
          to-white/20 shadow-none tracking-[0.4em] rounded-full py-[0.2rem] px-[0.9rem] flex justify-center text-[0.6rem] items-center text-white gap-2 w-fit transition-all z-10"
        >
          HOW TO GET STARTED
        </button>

        <GradientText
          text={
            <>
              Open TonBot on <br /> telegram, create a <br /> wallet and start
              <br className="hidden sm:flex" /> trading.
            </>
          }
          className="lg:text-7xl z-10 lg:leading-[68px] leading-[0.95] text-[1.95rem] text-white font-bold tracking-tight"
        />

        <button
          className={`bg-white shadow-lg rounded-full py-3 px-5 flex justify-center items-center gap-2 w-fit transition-all z-10 `}
        >
          <img src={TelegramPlanePurple.src} alt="tg" />
          <div className="font-semibold text-sm bg-gradient-to-tr from-blue-400 to-indigo-600 bg-clip-text text-transparent">
            Open In Telegram
          </div>
        </button>
      </div>
    </div>
  );
};
