/* eslint-disable @next/next/no-img-element */

import { DarkButton } from "@components/buttons/DarkButton";
import { GradientButton } from "@components/buttons/GradientButton";
import { GradientText } from "@components/special_text/GradientText";
import { FaTelegramPlane } from "react-icons/fa";
import Xmen from "@assets/xmen.png";

export const OpenTonbotOnTg = () => {
  return (
    <div className="text-white bg-gradient-to-r from-[#3DB3FC] via-[#5C80FA] to-[#936BF9] rounded-[2rem] py-14 mb-[10%] mt-[20%]">
      <div className="flex flex-col justify-center items-center text-center gap-10  relative">
        <img
          src={Xmen.src}
          alt="Xmen Image"
          className="absolute bottom-[-13%] left-0 -z-0 opacity-40 max-md:bottom-[-45%]"
        />

        <DarkButton text="HOW TO GET STARTED" className="tracking-widest" />

        <GradientText
          text={
            <>
              {" "}
              Open TonBot on <br /> telegram, create a wallet <br /> and start
              trading.
            </>
          }
          className="lg:text-7xl z-10 md:leading-[47.51px] md:text-[50.31px] max-md:leading-[29px] max-md:text-[31.56px] lg:leading-[68px]"
        />

        <button
          className={`bg-white shadow-lg rounded-full p-4 flex justify-center items-center  gap-3  w-fit transition-all z-10 `}
        >
          <FaTelegramPlane className="text-[1.5rem]  text-indigo-600 " />
          <div className=" font-medium">
            {" "}
            <span className=" text-sky-400 ">Open In</span>
            <span className=" text-sky-500 "> Telegram</span>
          </div>
        </button>
      </div>
    </div>
  );
};
