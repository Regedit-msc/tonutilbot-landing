import React, { FC } from "react";
import miniapp from "@assets/grid-section/miniapp.svg";
import tonderbot from "@assets/grid-section/tonderbot.svg";
import accessibility from "@assets/accessibility.svg";
import marketplace from "@assets/grid-section/marketplace.svg";
import plug from "@assets/grid-section/plug.svg";
import bg from "@assets/grid-section/bg.svg";
import referral from "@assets/grid-section/referral.svg";
import api from "@assets/grid-section/api.svg";
import { GradientText } from "@components/special_text/GradientText";
import Image from "next/image";
import { ThirdPartyWeb2Payments } from "./ThirdPartyWeb2Payments";
import BotCommands from "./BotCommands";
import StartButton from "./StartButton";
import { DarkButton } from "@components/buttons/DarkButton";

// interface IProps {};

const GridSection: FC = () => {
  return (
    <div className="flex flex-col sm:grid grid-rows-3 sm:grid-cols-5 w-full gap-3 py-20 sm:pt-32 md:px-[5vw] lg:px-[8vw] lg:pt-60 relative px-6">
      <Image
        src={bg}
        alt=""
        className="absolute h-[130vh] sm:h-[70vh] w-fit left-0 z-10 lg:top-[10%] lg:h-[100vh]"
      />

      {/* Sections, Row 1 */}
      <div className="sm:grid-cols-3 col-span-3 bg-white/5 border-ashyBorder/50 rounded-3xl sm:rounded-[2rem] flex flex-col items-center gap-3 pt-6 z-20 overflow-hidden relative min-h-[22rem] xl:min-h-[24rem] group">
        <GradientText variant="grid-section">
          Telegram Mini <br />
          app
        </GradientText>
        <Image
          src={miniapp}
          alt="transactions"
          width={300}
          height={300}
          className="absolute px-3 sm:px-0 bottom-0 opacity-50 group-hover:opacity-100 translate-y-[45%] group-hover:translate-y-0 duration-300"
        />
      </div>
      <div className="col-span-2 bg-white/5 border-ashyBorder/50 rounded-3xl sm:rounded-[2rem] flex flex-col items-center gap-3 overflow-hidden">
        <ThirdPartyWeb2Payments />
      </div>

      {/* Row 2 */}
      <div className="col-span-2 bg-white/5 border-ashyBorder/50 rounded-3xl sm:rounded-[2rem] flex flex-col items-center gap-3 relative overflow-hidden pt-8 pb-10 text-white z-20 group">
        <div className="flex flex-col h-full justify-center items-center text-center px-4">
          <Image src={tonderbot} alt="" className="w-16" />
          <Image
            src={marketplace}
            alt=""
            className="w-full top-0 h-full absolute object-cover bottom-0 group-hover:scale-[1.5] opacity-90 group-hover:opacity-70 duration-500 group-hover:-translate-y-16 ease-in-out"
          />
          <GradientText variant="grid-section">Marketplace</GradientText>
          <p className="text-sm font-light xs:px-[10vw] sm:px-0 pt-2 text-balance">
            Get access to a variety of services in the platform created by the
            community and pay directly from your wallet using TON tokens.{" "}
          </p>
        </div>
      </div>
      <div className="sm:grid-cols-3 col-span-3 bg-white/5 z-20 border-ashyBorder/50 rounded-3xl sm:rounded-[2rem] flex flex-col items-center p-6 overflow-hidden relative group">
        <GradientText variant="grid-section">Telegram bot</GradientText>
        <BotCommands />
        <StartButton />
      </div>

      {/* Row 3 */}
      <div className="col-span-3 h-fit min-h-[20rem] xl:min-h-[22rem] bg-white/5 border-ashyBorder/50 rounded-3xl sm:rounded-[2rem] flex flex-col items-center gap-3 relative overflow-hidden pt-8 pb-10 text-white z-20 group">
        <div className="flex flex-col h-full items-center text-center px-4">
          <Image
            src={api}
            alt=""
            className="w-full top-0 h-full absolute object-cover bottom-0 group-hover:scale-[1.5] opacity-70 group-hover:opacity-50 duration-[700ms] group-hover:-translate-y-20 ease-in-out"
          />
          <DarkButton text="ACCESSIBILITY" customIcon={accessibility} />
          <GradientText variant="grid-section">
            Developer API <br /> Integration
          </GradientText>
          <Image
            src={plug}
            alt=""
            className="w-60 sm:w-80 lg:w-[22rem] absolute bottom-0 mb-6 sm:mb-0"
          />
        </div>
      </div>
      <div className="col-span-2 h-fit min-h-[20rem] xl:min-h-[22rem] bg-white/5 border-ashyBorder/50 rounded-3xl sm:rounded-[2rem] flex flex-col items-center gap-3 relative overflow-hidden pt-8 pb-10 text-white group z-20">
        <div className="flex flex-col h-full items-center text-center px-4">
          <Image
            src={referral}
            alt=""
            className="w-[80%] absolute bottom-0 opacity-70 group-hover:opacity-100 translate-y-[30%] group-hover:translate-y-0 duration-300 max-w-[20rem]"
          />
          <GradientText variant="grid-section">
            Referral and <br /> Airdrop
          </GradientText>
          <p className="text-sm font-light pt-2 text-balance">
            Win lots of cool stuff in our referral program <br />
            and airdrop campaign
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
