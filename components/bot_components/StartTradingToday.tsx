import { GradientText } from "@components/special_text/GradientText";
import React, { FC } from "react";
import bg from "@assets/grid.svg";
import lightning from "@assets/lightning.svg";
import planet from "@assets/planet.svg";
import openInTg from "@assets/open-in-tg.svg";
import { DarkButton } from "@components/buttons/DarkButton";
import Image from "next/image";
import Link from "next/link";

const StartTradingToday: FC = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center py-20 xs:py-32 lg:py-48 px-[10%] lg:gap-[10%] relative overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center gap-2 text-white w-full ">
        <DarkButton
          text="GET STARTED"
          customIcon={lightning}
          className="sm:translate-y-3 text-sm"
        />
        <GradientText
          className="lg:text-[5.5rem]"
          text="Start Trading Today!"
        />
        <div
          className="text-white sm:text-lg text-sm font-light 
          leading-[1.6] w-full flex justify-center lg:text-2xl items-center text-balance max-w-[60rem] -mt-3 sm:-mt-8 lg:-mt-10"
        >
          Open TonderBot on telegram, create a wallet <br />
          and start trading.
        </div>
        <Link href="https://t.me/tonderlabs_tonderbot" className="z-10">
          <Image
            src={openInTg}
            alt="Open TonderBot in Telegram button"
            className="w-[16rem] sm:w-[18rem] lg:w-[22rem] h-fit -translate-y-2"
          />
        </Link>

        <Image
          src={planet}
          alt="Decorative planet background element"
          className="absolute h-fit w-screen -bottom-[20vw] sm:-bottom-[27vw] lg:-bottom-[30vw] max-w-[90rem]"
        />
      </div>

      <Image
        src={bg}
        alt=""
        className="absolute w-[70vw] lg:max-w-[35rem] max-w-[20rem] md:max-w-[25rem] -translate-y-10"
      />
    </section>
  );
};

export default StartTradingToday;
