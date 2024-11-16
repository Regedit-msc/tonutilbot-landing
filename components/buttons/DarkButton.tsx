/* eslint-disable @next/next/no-img-element */
import { Poppins } from "next/font/google";
import bot from "@/assets/tonderbot-logo.svg";
import Image, { StaticImageData } from "next/image";

interface DarkButtonProps {
  isIcon?: boolean;
  myIcon?: any;
  noIcon?: boolean;
  customIcon?: StaticImageData;
  text?: string;
  className?: string;
}

export function DarkButton({
  isIcon = true,
  myIcon,
  noIcon,
  customIcon,
  text = "",
  className = "",
}: DarkButtonProps): JSX.Element {
  return (
    <button
      className={` bg-gradient-to-b h-fit from-transparent to-white/10 min-w-fit z-10 backdrop-blur-[2px] ${className} 
          shadow-white/20 text-xs sm:text-sm py-2 px-5 lg:py-3 lg:px-7 lg:text-lg flex justify-center items-center text-white gap-3 w-fit 
        transition-all z-10 tracking-[0.4em] sm:tracking-[0.3em] text-[0.8rem] font-light 
        rounded-xl lg:rounded-2xl shadow-inner-lg`}
    >
      {customIcon && !noIcon && (
        <Image
          src={customIcon}
          alt=""
          width={25}
          height={25}
          className="lg:w-[35px]"
        />
      )}
      {!customIcon && !noIcon && myIcon && (
        <img src={myIcon.src} alt={myIcon} className="w-[25px] lg:w-[35px]" />
      )}
      {!customIcon && !noIcon && isIcon && (
        <img src={bot.src} alt="plane" className="w-[25px] lg:w-[35px]" />
      )}
      {text}
    </button>
  );
}
