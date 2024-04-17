/* eslint-disable @next/next/no-img-element */

import TelegramPlanePurple from "@assets/TelegramPlanePurple.svg";

import { GradientText } from "@components/special_text/GradientText";
import Xmen from "@assets/xmen.png";
import Link from "next/link";

export const OpenTonbotOnTg = () => {
  return (
    <div className="text-white bg-gradient-to-r from-[#3DB3FC] via-[#5C80FA] to-[#936BF9] rounded-[2rem] my-14 sm:px-0 mt-40 sm:mt-[20%] w-full h-[297px] md:h-[370px] sm:w-full overflow-hidden mx-[4%]">
      <div className="flex flex-col justify-center items-center text-center gap-4 relative w-full h-full">
        <img
          src={Xmen.src}
          alt="Xmen Image"
          className="absolute md:left-0 sm:-left-[20%] -left-[70%] top-[30%] -z-0 opacity-40 max-md:bottom-[-45%]"
        />

        <button
          className="bg-gradient-to-b from-transparent
          to-white/20 shadow-none tracking-[0.4em] rounded-full py-[0.2rem] px-[0.9rem] flex justify-center text-[0.6rem] sm:text-sm items-center text-white gap-2 w-fit transition-all z-10"
        >
          HOW TO GET STARTED
        </button>

        <GradientText
          text={
            <>
              Open TonBot on <br /> telegram, create a{" "}
              <br className="flex sm:hidden" /> wallet{" "}
              <br className="sm:flex hidden" /> and start
              <br className="flex sm:hidden" /> trading.
            </>
          }
          className="lg:text-[3.25rem] z-10 leading-[0.95] text-[1.95rem] sm:text-[2.25rem] md:text-[2.75rem] text-white font-bold tracking-tight"
        />
        <Link href={"/"}>
          <button
            className={`bg-white shadow-lg rounded-full py-3 px-5 flex justify-center items-center gap-2 w-fit transition-all z-10 `}
          >
            <img src={TelegramPlanePurple.src} alt="tg" />

            <div className="font-semibold text-[0.85rem] sm:text-sm bg-gradient-to-tr from-blue-400 to-indigo-600 bg-clip-text text-transparent">
              Open In Telegram
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};
