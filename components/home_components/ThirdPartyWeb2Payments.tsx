/* eslint-disable @next/next/no-img-element */

import { GradientText } from "@components/special_text/GradientText";
import IntegrationsImage from "@assets/integrations_image.png";

export const ThirdPartyWeb2Payments = () => {
  return (
    <div className="text-white ">
      <div className="flex flex-col justify-center items-center text-center gap-10  my-28 max-md:my-52 relative">
        <GradientText
          text="Third Party Web2 payments"
          className="text-center mb-10 lg:text-[80px] md:text-6xl text-[40px]"
        />

        <p className="text-white sm:text-2xl font-medium lg:leading-[33px] text-xs">
          Web 2 transactions such as making payments and purchasing airtime or
          data subscriptions can be made using TON token on TonBot.
        </p>

        <img src={IntegrationsImage.src} alt="" className="md:mt-20 " />
      </div>
    </div>
  );
};
