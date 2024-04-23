import React, { FC } from "react";
import beta from "@assets/landing-page/beta.svg";
import Link from "next/link";
import comingSoon from "@assets/Navbar/comingSoon.svg";
import { GradientButton } from "@components/buttons/GradientButton";

interface MobileNavProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileNav: FC<MobileNavProps> = ({ open, setOpen }: MobileNavProps) => {
  return (
    <section
      className={`sm:hidden text-white font-semibold text-3xl w-full flex justify-center items-center transition-all duration-300 ease-in-out ${
        open ? "opacity-100 h-[350px]" : "opacity-0 h-0"
      }`}
    >
      <span className="absolute top-20 w-[90%] border-t border-ashyBorder" />
      <ul
        onClick={() => {
          setOpen(false);
        }}
        className="flex flex-col gap-4 py-10"
      >
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/bot"} className="relative">
            TonderBot
            <img
              src={beta.src}
              alt="beta"
              className="absolute top-2 left-[160px] w-10"
            />
          </Link>
        </li>
        <li className="flex justify-center items-center gap-3">
          <h1 className="blur-[5px] flex gap-2">TonderApp</h1>
          <img src={comingSoon.src} alt="" />
        </li>
        <li>
          <Link href="https://docs.tonderlabs.com">
            <p>About</p>
          </Link>
        </li>

        <li className="w-fit mt-2">
          <Link href="https://t.me/tonderbot_news">
            <GradientButton
              myPadding={true}
              className="text-lg py-3 px-10 sm:py-3 font-normal w-fit"
              text="Contact Us"
              isIcon={false}
            />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default MobileNav;
