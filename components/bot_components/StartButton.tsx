import React, { FC } from "react";
import telegram from "@assets/openInTelegramPlane.svg";
import Image from "next/image";

interface IProps {}

const StartButton: FC<IProps> = (props) => {
  return (
    <div className="relative flex justify-center items-center w-full">
      <button className="shadow-lg w-full max-w-[30rem] rounded-full flex justify-center items-center text-white gap-2 transition-all bg-gradient-to-r from-[#3DB3FC] to-[#936BF9] via-[#5C80FA] p-4">
        <Image src={telegram} alt="telegram" width={20} height={20} />
        Start
        <div
          className={`w-[10rem] flex z-10 absolute scale-150 top-0 transition-all duration-1000 ease-in-out h-[3rem] translate-y-8 bg-gradient-to-r from-[#3DB3FC] via-[#5C80FA] to-[#936BF9] blur-2xl rounded-full opacity-50`}
        />
      </button>
    </div>
  );
};

export default StartButton;
