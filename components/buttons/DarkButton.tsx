/* eslint-disable @next/next/no-img-element */
import { Poppins } from "next/font/google";
import plane from "@/assets/plane.svg";

const poppins = Poppins({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
interface DarkButtonProps {
  text?: string;
  className?: string;
}

export function DarkButton({
  text = "",
  className = "",
}: DarkButtonProps): JSX.Element {
  return (
    <button
      className={`border border-[#333] bg-gradient-to-b from-[#050505] to-[#444] ${className} shadow-lg rounded-full py-[0.375rem] px-3 flex justify-center items-center text-white gap-3 w-fit transition-all z-10 font tracking-[0.3em] font-normal text-xs`}
    >
      <img src={plane.src} alt="plane" width={"10rem"} />
      {text}
    </button>
  );
}
