import { GradientText } from "@components/special_text/GradientText";
import React, { FC } from "react";
import TonderbotMarketplace from "@assets/TonderbotMarketplace.png";
import { GradientButton } from "@components/buttons/GradientButton";
import Link from "next/link";

const TonderBotMarketplace: FC = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center py-24 px-[10%] lg:gap-[10%]">
      <div className="flex flex-col justify-center items-dont text-center lg:text-start text-white w-full">
        <GradientText
          text={
            <>
              The <br /> TonderBot <br />
              Marketplace
            </>
          }
        />
        <p
          className="text-white sm:text-lg text-sm font-light 
         mt-6 leading-[1.8] w-full flex lg:justify-start justify-center items-center"
        >
          Get access to a variety of services in <br className="flex" />
          the platform created by the <br className="flex sm:hidden" />
          community and pay directly <br className="hidden sm:flex lg:hidden" />{" "}
          from your <br className="flex sm:hidden" />
          wallet using TON tokens.
        </p>
        <Link href={"/"} className="w-fit">
          <GradientButton
            className="text-sm hidden lg:flex mt-4 lg:mt-8"
            text="Open In Telegram"
          />
        </Link>
      </div>
      <img
        src={TonderbotMarketplace.src}
        alt=""
        className="py-6 w-[320px] sm:w-[550px] lg:w-[580px]"
      />
    </section>
  );
};

export default TonderBotMarketplace;
