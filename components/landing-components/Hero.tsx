import { GradientText } from "@components/special_text/GradientText";
import React, { FC } from "react";

interface IProps {}

const Hero: FC<IProps> = () => {
  return (
    <section className="w-full">
      <GradientText className="flex flex-col justify-center items-center text-center text-5xl sm:text-[3.5rem] lg:text-[4rem] text-white font-bold py-48">
        Building Web3 <br />
        <p className="text-transparent bg-gradient-to-r from from-blue-500 to-indigo-600 bg-clip-text">
          Solutions
        </p>{" "}
        for the <br /> TON Network
      </GradientText>
    </section>
  );
};

export default Hero;
