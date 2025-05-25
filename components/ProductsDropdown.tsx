"use client";
import React, { FC, useRef, useState } from "react";
import Image from "next/image";
import tonderBot from "@assets/Navbar/ProductsTonderBot.svg";
import beta from "@assets/landing-page/beta.svg";
import tonderApp from "@assets/Navbar/ProductsTonderApp.svg";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useOnClickOutside } from "@hooks/useOnClickOutside";
import Transition from "./transitions";
import comingSoon from "@assets/Navbar/comingSoon.svg";

interface ProductsProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

const ProductsDropdown: FC<ProductsProps> = ({
  open,
  setOpen,
}: ProductsProps) => {
  const [hover, setHover] = useState(false);
  const dropDownRef = useRef(null);
  useOnClickOutside(dropDownRef, () => setOpen(false));

  return (
    <>
      {open && (
        <Transition duration={0.3}>
          <div
            onMouseOver={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            ref={dropDownRef}
            className={`bg-ashyNav absolute translate-y-24 -right-5 w-[340px] md:w-[368px] rounded-2xl shadow-xl shadow-black/50 z-10 border border-ashyBorder flex flex-col gap-6 md:gap-8 py-4 px-3 justify-between items-start
   `}
          >
            <Link
              onClick={() => {
                setOpen(false);
              }}
              href={"/bot"}
              className="flex gap-3 justify-start items-center relative w-full"
            >
              <Image
                src={tonderBot}
                alt="TonderBot product icon"
                className="h-[40px] w-auto"
              />
              <div className="flex flex-col">
                <h1 className="font-medium text-sm md:text-[16px] relative">
                  TonderBot
                  <Image
                    src={beta}
                    alt="Beta version badge"
                    className="absolute top-0 left-[84px] w-auto h-auto"
                  />
                </h1>
                <p className="font-thin text-xs md:text-[14px] text-white/50">
                  The best utility bot on the TON Network
                </p>
              </div>
              <IoIosArrowForward className="absolute right-0" />
            </Link>
            <section className="flex gap-3 justify-start items-center">
              <Image
                src={tonderApp}
                alt="TonderApp product icon"
                className="h-[40px] w-auto"
              />
              <div className="flex flex-col">
                <h1 className="font-medium medium text-sm md:text-[16px] blur-[3px] flex gap-2">
                  TonderApp
                </h1>
                <Image
                  src={comingSoon}
                  alt="Coming soon badge"
                  className="w-20 absolute left-40"
                />
                <p className="font-thin text-xs md:text-[14px] text-white/50">
                  The next big thing we&apos;re working on!
                </p>
              </div>
            </section>
          </div>
        </Transition>
      )}
    </>
  );
};

export default ProductsDropdown;
