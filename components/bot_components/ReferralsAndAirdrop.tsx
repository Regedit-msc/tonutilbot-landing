import { DarkButton } from "@components/buttons/DarkButton";
import React, { FC } from "react";
import img from "@assets/referrals.svg";
import rocket from "@assets/rocket.png";
import bg from "@assets/shine.svg";
import comm from "@assets/comm.svg";
import Image from "next/image";

// interface IProps {};

const ReferralsAndAirdrop: FC = (props) => {
  return (
    <div className="flex-col sm:flex-row flex justify-center text-white sm:gap-10 px-8 pt-20">
      <section className="flex flex-col gap-3 sm:max-w-[50vw] pt-10 md:pl-[5vw] lg:pl-[8vw] z-10">
        <div className="flex gap-2 items-center">
          <DarkButton text="COMMUNITY" />
          <span className="bg-white px-3 py-2 rounded-full flex gap-2 border-[4px] border-purple/70 text-purple font-medium text-nowrap items-center text-sm sm:text-base">
            <Image src={rocket} alt="" className="w-5 h-5" /> Coming Soon!
          </span>
        </div>

        <strong className="leading-[3rem] sm:leading-[4rem] sm:text-6xl relative tracking-tighter text-5xl lg:text-7xl xl:text-8xl lg:w-full font-semibold flex">
          Referrals & <br /> Airdrop <br /> Campaign
        </strong>
        <p className="text-balance lg:text-2xl sm:text-lg md:text-xl mt-4">
          We&apos;re giving back to the community by using a referral system to
          reward users and an airdrop campaign to encourage more adoption of the
          Bot.
        </p>
      </section>

      <div className="flex relative justify-center items-end w-full sm:w-1/2 lg:pr-[10vw] md:pr-[5vw] sm:-translate-y-[5vw] lg:translate-y-0">
        <Image
          src={bg}
          alt=""
          className="absolute w-full h-fit translate-y-10 sm:scale-150 -translate-x-[5vw]"
        />
        <Image
          src={img}
          alt="transactions"
          width={1000}
          height={1000}
          className="w-[60vw] sm:scale-[1.25] max-w-[25rem] h-fit sm:w-[30vw] z-10"
        />
      </div>
    </div>
  );
};

export default ReferralsAndAirdrop;
