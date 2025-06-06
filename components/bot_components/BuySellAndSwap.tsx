import { DarkButton } from "@components/buttons/DarkButton";
import React, { FC } from "react";
import img from "@assets/buysellswap.png";
import rocket from "@assets/rocket.png";
import bg from "@assets/bg.svg";
import Image from "next/image";

// interface IProps {};

const BuySellAndSwap: FC = (props) => {
  return (
    <div className="bg-blue flex-col sm:flex-row flex justify-center text-white sm:gap-10 px-8 pt-20 -translate-y-1 min-h-screen overflow-x-hidden">
      <Image
        src={bg}
        alt=""
        className="absolute translate-y-20 w-[20rem] h-fit"
      />
      <section className="flex flex-col gap-3 sm:max-w-[50vw] py-10 md:pl-[5vw] lg:pl-[8vw]">
        <h1 className="text-8xl font-bold text-transparent font-outline">
          01.
        </h1>
        <div className="flex flex-col xs:flex-row gap-2 xs:items-center">
          <DarkButton text="TRADING" noIcon />
          <span className="bg-white px-3 py-[6px] lg:py-2 lg:px-5 lg:text-lg rounded-full flex gap-2 border-[4px] lg:border-[6px] border-blue/70 text-blue font-medium text-nowrap items-center text-sm sm:text-base w-fit">
            <Image src={rocket} alt="" className="w-5 h-5 lg:w-6 lg:h-6" />{" "}
            Coming Soon!
          </span>
        </div>

        <strong className="leading-[3rem] sm:leading-[4rem] sm:text-6xl relative tracking-tighter text-5xl lg:text-8xl lg:w-full font-semibold flex">
          Buy, sell & <br /> swap
        </strong>
        <p className="text-balance sm:text-lg md:text-xl lg:text-2xl font-light">
          Buy, sell and swap TON and other Jettons using our telegram mini-app
        </p>
      </section>
      <div className="flex justify-center items-end w-full sm:w-1/2 lg:pr-[10vw] md:pr-[5vw]">
        <Image
          src={img}
          alt="transactions"
          width={1000}
          height={1000}
          className="w-[50vw] max-w-[25rem] h-fit sm:w-[30vw] z-10"
        />
      </div>
    </div>
  );
};

export default BuySellAndSwap;
