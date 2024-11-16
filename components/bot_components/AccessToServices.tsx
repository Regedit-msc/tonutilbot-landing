import { DarkButton } from "@components/buttons/DarkButton";
import React, { FC } from "react";
import img from "@assets/access.png";
import rocket from "@assets/rocket.png";
import bg from "@assets/bg.svg";
import Image from "next/image";

// interface IProps {};

const AccessToServices: FC = (props) => {
  return (
    <div className="bg-purple flex-col sm:flex-row flex justify-center text-white sm:gap-8 px-8 pt-20 -translate-y-2">
      <Image
        src={bg}
        alt=""
        className="absolute translate-y-20 w-[20rem] h-fit"
      />
      <section className="flex flex-col gap-3 sm:max-w-[50vw] py-10 md:pl-[5vw] lg:pl-[8vw]">
        <h1 className="text-8xl font-bold text-transparent font-outline">
          02.
        </h1>
        <div className="flex flex-col xs:flex-row gap-2 xs:items-center">
          <DarkButton text="MARKETPLACE" noIcon />
          <span className="bg-white px-3 py-2 lg:py-3 lg:px-5 lg:text-lg rounded-full flex gap-2 border-[4px] border-blue/70 text-blue font-medium text-nowrap items-center text-sm sm:text-base w-fit">
            <Image src={rocket} alt="" className="w-5 h-5 lg:w-6 lg:h-6" /> Coming Soon!
          </span>
        </div>

        <strong className="leading-[3rem] sm:leading-[4rem] sm:text-6xl relative tracking-tighter text-5xl lg:text-8xl lg:w-full font-semibold flex">
          Access to <br /> services
        </strong>
        <p className="text-balance sm:text-lg md:text-xl font-light">
          Get access to a variety of services in the platform created by the
          community and pay directly from your wallet using TON tokens.
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

export default AccessToServices;
