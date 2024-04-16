/* eslint-disable @next/next/no-img-element */
import { Poppins } from "next/font/google";
import bot from "@/assets/tonderbot-logo.svg";

const poppins = Poppins({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
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
      className={`border border-[#333] bg-gradient-to-b from-transparent to-white/10 ${className} shadow-lg rounded-full py-2 px-3 flex justify-center items-center text-white gap-3 w-fit transition-all z-10 tracking-[0.4em] sm:tracking-[0.3em] text-[0.8rem] font-light`}
    >
      {myIcon && <img src={myIcon.src} alt={myIcon} className="w-[25px]" />}
      {isIcon && <img src={bot.src} alt="plane" width={"25px"} />}
      {text}
    </button>
  );
}
