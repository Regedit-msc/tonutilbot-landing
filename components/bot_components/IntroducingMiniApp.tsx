import { GradientText } from "@components/special_text/GradientText";
import React, { FC } from "react";
import bg from "@assets/bg.svg";
import { GradientButton } from "@components/buttons/GradientButton";
import Link from "next/link";
import { DarkButton } from "@components/buttons/DarkButton";

const IntroducingMiniApp: FC = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center pt-20 pb-44 px-[10%] lg:gap-[10%] relative bg-gradient-to-b from-ashy via-via via-[30%] to-blue">
      <div className="flex flex-col justify-center items-center text-center gap-2 text-white w-full ">
        <DarkButton
          text="NEW USERS"
          className="max-auto sm:translate-y-3 text-sm"
        />
        <GradientText
          className="lg:text-[5.5rem]"
          text={
            <>
              Introducing our
              <br />
              Telegram Mini App
            </>
          }
        />
        <p
          className="text-white sm:text-lg text-sm font-light 
          leading-[1.6] w-full flex lg:justify-start justify-center items-center text-balance max-w-[60rem] -mt-3 sm:-mt-8 lg:-mt-10"
        >
          Beginner traders can use the telegram app to make trades more easily
          and also access services on the marketplace, scroll <br /> to see what
          we have for new users
        </p>
      </div>
      <img
        src={bg.src}
        alt=""
        className="absolute left-[15vw] w-[16rem] translate-y-24 xl:left-[18vw]"
      />
      <img
        src={bg.src}
        alt=""
        className="absolute right-[15vw] w-[16rem] translate-y-24 xl:right-[18vw] hidden sm:flex"
      />
    </section>
  );
};

export default IntroducingMiniApp;
