/* eslint-disable @next/next/no-img-element */
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
interface DarkButtonProps {
  icon?: JSX.Element;
  text?: string;
  className?: string;
}

export function DarkButton({
  icon = <></>,
  text = "",
  className = "",
}: DarkButtonProps): JSX.Element {
  return (
    <div className={poppins.className}>
      <button
        className={` ${className} bg-gradient-to-b cursor-pointer from-transparent to-[#ffffff2e] shadow-lg rounded-full py-2 px-4 flex justify-center items-center text-white gap-3 w-fit transition-all border border-[#ffffff2e] z-10 font tracking-[0.3em] font-thin`}
      >
        {icon}
        {text}
      </button>
    </div>
  );
}
