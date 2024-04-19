/* eslint-disable @next/next/no-img-element */
import { Poppins } from "next/font/google";
import bot from "@/assets/tonderbot-logo.svg";

interface DarkButtonProps {
  isIcon?: boolean;
  myIcon?: any;
  text?: string;
  className?: string;
}

export default function LandingDarkButton({
  isIcon = true,
  myIcon,
  text = "",
  className = "",
}: DarkButtonProps): JSX.Element {
  return (
    <button
      className={`${className} bg-white/[0.06] shadow-lg rounded-full py-2 px-3 flex justify-center items-center text-white gap-3 w-fit transition-all z-10 text-[0.8rem] font-extralight text-sm lg:text-base`}
    >
      {myIcon && <img src={myIcon.src} alt={myIcon} className="w-[25px]" />}
      {isIcon && <img src={bot.src} alt="plane" width={"25px"} />}
      {text}
    </button>
  );
}
