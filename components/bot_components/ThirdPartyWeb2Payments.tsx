/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientText } from "@components/special_text/GradientText";
import AutoplaySlider from "@components/AutoplaySlider";
import Card from "@assets/Card.svg";

export const ThirdPartyWeb2Payments = () => {
  return (
    <div className="text-white pt-8">
      <div className="flex flex-col justify-center items-center text-center relative">
        <img src={Card.src} alt="" className="w-[90px] sm:w-[110px] my-3" />
        <GradientText
          text={
            <span className="text-[3rem] sm:text-[3.5rem] lg:text-[5.5rem] tracking-tighter insetShadow z-30">
              Third Party <br className="md:hidden" /> Web2
              <br />
            </span>
          }
          className="text-center lg:leading-[0.8] lg:text-[6rem] text-6xl text-[40px] lg:pb-6 pt-2"
        />
        <p className="lg:text-[5rem] text-[2.8rem] sm:text-5xl md:text-6xl font-bold sm:px-3 tracking-tighter leading-[0.9] text-transparent bg-gradient-to-r from from-blue-500 to-purple-500 bg-clip-text pb-2">
          Payments
        </p>

        <p
          className="text-white sm:text-lg text-sm font-light 
         mt-6 leading-[1.8]"
        >
          Web 2 transactions such as making <br className="sm:hidden" />
          payments and <br className="hidden sm:flex" /> purchasing airtime or{" "}
          <br className="flex sm:hidden" />
          data subscriptions can be made <br className="hidden sm:flex" /> using{" "}
          <br className="flex sm:hidden" /> TON token on TonBot.
        </p>
      </div>
      <AutoplaySlider />
    </div>
  );
};
