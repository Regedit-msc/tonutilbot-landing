/* eslint-disable @next/next/no-img-element */
import { Poppins } from "next/font/google";
import bot from "@/assets/tonderbot-logo.svg";

interface DarkButtonProps {
  isIcon?: boolean;
  myIcon?: any;
  text?: string;
  className?: string;
}

export function DarkButton({
  isIcon = true,
  myIcon,
  text = "",
  className = "",
}: DarkButtonProps): JSX.Element {
  return (
    <button
      className={` bg-gradient-to-b h-fit from-transparent to-white/10 ${className} 
          shadow-white text-xs sm:text-sm py-2 px-3 flex justify-center items-center text-white gap-3 w-fit 
        transition-all z-10 tracking-[0.4em] sm:tracking-[0.3em] text-[0.8rem] font-light 
        rounded-xl shadow-inner`}
    >
      {myIcon && <img src={myIcon.src} alt={myIcon} className="w-[25px]" />}
      {isIcon && <img src={bot.src} alt="plane" width={"25px"} />}
      {text}
    </button>
  );
}
