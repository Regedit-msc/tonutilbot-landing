/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientText } from "@components/special_text/GradientText";
import AutoplaySlider from "@components/AutoplaySlider";

export const ThirdPartyWeb2Payments = () => {
  return (
    <div className="text-white pt-8">
      <div className="flex flex-col justify-center items-center text-center relative">
        <GradientText
          text={
            <span className="text-[3rem] sm:text-[3.5rem] lg:text-[4rem] tracking-tighter insetShadow z-30">
              Third Party <br className="md:hidden" /> Web2
              <br className="flex sm:hidden" /> payments
            </span>
          }
          className="text-center lg:leading-[0.5] lg:text-[6rem] text-6xl text-[40px] lg:pb-6"
        />

        <p
          className="text-white sm:text-lg text-sm font-normal 
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
