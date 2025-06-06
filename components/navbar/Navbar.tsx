/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientButton } from "@components/buttons/GradientButton";
import logo from "@assets/logo-new.png";
import menu from "@assets/menu.png";
import close from "@assets/Navbar/close.svg";
import tonderLabs from "@assets/TonderLabs.png";
import down from "@assets/Navbar/arrowdown.svg";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ProductsDropdown from "@components/ProductsDropdown";
import MobileNav from "./MobileNav";
import { DesktopScrolledNav } from "./DesktopScrolledNav";

export const Navbar = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    var scrollY = window.scrollY;
    var newScroll;

    window.addEventListener("scroll", function () {
      newScroll = window.scrollY;

      if (newScroll > 100) {
        if (scrollY > newScroll) {
          document
            .querySelector(".nav")
            ?.classList.remove("-translate-y-[450px]");
        } else {
          document.querySelector(".nav")?.classList.add("-translate-y-[450px]");
        }
      }
      scrollY = newScroll;
    });

    return () => {
      window.removeEventListener("scroll", newScroll!);
    };
  }, []);

  return (
    <>
      <DesktopScrolledNav />
      <div className="w-full flex justify-center items-center relative">
        <nav
          className={`nav backdrop-blur-md top-0 flex flex-col sm:flex-row justify-between items-center fixed sm:static w-[90%] py-3 md:py-7 sm:px-10 lg:px-20 lg:max-w-[70rem] z-[999]  sm:backdrop:blur-none transition-all duration-500 ease-in-out border-ashyBorder border-b sm:border-none ${
            !menuOpen && "border-transparent"
          }`}
        >
          <div className="flex justify-between items-center w-full">
            <Link href={"/"}>
              <div className="flex items-center pl-6 sm:pl-0 sm:py-8 py-4">
                <img
                  src={logo.src}
                  alt="Logo"
                  className="mr-2
                 h-10"
                />
                <img
                  src={tonderLabs.src}
                  alt="TonderLabs logo"
                  className="h-5"
                />
              </div>
            </Link>

            <img
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              src={menu.src}
              className={`fixed right-0 w-7 sm:hidden mr-8 transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
              alt="menu"
            />
            <img
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              src={close.src}
              className={`fixed right-0 sm:hidden mr-9 transition-all duration-300 ease-in-out w-5 ${
                !menuOpen ? "opacity-0" : "opacity-100"
              }`}
              alt="close"
            />
          </div>

          <MobileNav open={menuOpen} setOpen={setMenuOpen} />

          <section className="sm:flex text-white gap-8 justify-center items-center hidden text-xs sm:text-sm lg:text-base">
            <div className="relative">
              <p
                onClick={() => {
                  setProductsOpen(!productsOpen);
                }}
                className="cursor-pointer flex text-white justify-center items-center gap-2"
              >
                Products <img src={down.src} alt="open" className="w-2" />
              </p>
              <ProductsDropdown open={productsOpen} setOpen={setProductsOpen} />
            </div>

            <Link href="/blog">
              <p>Blog</p>
            </Link>

            <Link href="https://docs.tonderlabs.com">
              <p>About</p>
            </Link>

            <Link href="https://t.me/tonderbot_news">
              <GradientButton
                myPadding={true}
                className="text-sm py-3 px-6 text-nowrap"
                text="Contact Us"
                isIcon={false}
              />
            </Link>
          </section>
        </nav>
      </div>
    </>
  );
};
