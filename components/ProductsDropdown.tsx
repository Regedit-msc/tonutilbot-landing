"use client";
import React, { FC, useRef, useState } from "react";
import tonderBot from "@assets/Navbar/ProductsTonderBot.svg";
import tonderApp from "@assets/Navbar/ProductsTonderApp.svg";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useOnClickOutside } from "@hooks/useOnClickOutside";
import Transition from "./transitions";

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
  useOnClickOutside(dropDownRef, () => setOpen(false), hover);

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
              <img src={tonderBot.src} alt="tonderBot" className="h-[40px]" />
              <div className="flex flex-col">
                <h1 className="font-medium text-sm md:text-[16px]">
                  TonderBot
                </h1>
                <p className="font-thin text-xs md:text-[14px] text-white/50">
                  The best utility bot on the TON Network
                </p>
              </div>
              <IoIosArrowForward className="absolute right-0" />
            </Link>
            <section className="flex gap-3 justify-start items-center">
              <img src={tonderApp.src} alt="tonderBot" className="h-[40px]" />
              <div className="flex flex-col">
                <h1 className="font-medium medium text-sm md:text-[16px]">
                  TonderApp
                </h1>
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
