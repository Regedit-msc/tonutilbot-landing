import React, { FC } from "react";
import dots from "@assets/landing-page/our-process-dots.svg";
import AllProcessCards from "./AllProcessCards";

const OurProcess: FC = () => (
  <div className="flex md:flex-row flex-col justify-center items-center w-full text-white my-16">
    <section className="relative w-full flex md:w-2/5 flex-col text-[2.6rem] leading-[0.9] font-semibold pl-12">
      <img src={dots.src} alt="" className="absolute -top-6 left-4 h-20" /> Our
      <br />
      Process
      <span className="text-sm font-light py-6 w-full">
        Here’s a little breakdown of how we <br className="hidden md:flex" />{" "}
        build <br className="flex md:hidden" />
        innovative solutions for all our target users
      </span>
    </section>
    <section className="relative flex justify-end items-center w-full md:w-3/5 my-10">
      <AllProcessCards />
      <div className="absolute w-[80%] md:w-[95%] rounded-l-2xl bg-gradient-to-r from-blue-700 to-purple-500 h-[200px]" />
    </section>
  </div>
);

export default OurProcess;
