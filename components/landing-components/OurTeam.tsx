/* eslint-disable @next/next/no-img-element */
"use client";
import { GradientText } from "@components/special_text/GradientText";
import Transition from "@components/transitions";
import React, { FC, useState } from "react";

import Ayomide from "@assets/landing-page/developers/Ayomide.png";
import Bayo from "@assets/landing-page/developers/Bayo.png";
import Divine from "@assets/landing-page/developers/Divine.png";
import Kinyichukwu from "@assets/landing-page/developers/Kinyichukwu.png";
import Mayowa from "@assets/landing-page/developers/Mayowa.png";
import MuizSanni from "@assets/landing-page/developers/Muiz Sanni.png";
import Somto from "@assets/landing-page/developers/Somto.png";
import { StaticImageData } from "next/image";

import vector1 from "@assets/landing-page/OurTeam/vector1.svg";
import vector2 from "@assets/landing-page/OurTeam/Vector2.svg";
import ShareIcon from "@assets/landing-page/OurTeam/ShareIcon.svg";

interface Developer {
  image: StaticImageData;
  name: string;
  role: string;
}

const developers = [
  {
    image: Ayomide,
    name: "Ayomide",
    role: "C.E.O",
  },
  {
    image: Somto,
    name: "Somto",
    role: "C.T.O",
  },
  {
    image: MuizSanni,
    name: "Muiz Sanni",
    role: "Art Director",
  },
  {
    image: Divine,
    name: "Divine",
    role: "Developer",
  },
  {
    image: Kinyichukwu,
    name: "Kinyichukwu",
    role: "Developer",
  },
  {
    image: Bayo,
    name: "Bayo",
    role: "Developer",
  },

  {
    image: Mayowa,
    name: "Mayowa",
    role: "Developer",
  },
];

interface IProps {}

const OurTeam: FC<IProps> = () => {
  const [activeDev, setActiveDev] = useState([false, -1]);
  const [activeDev2, setActiveDev2] = useState([false, -1]);
  return (
    <Transition>
      <div className=" text-white px-3 sm:px-0 pt-20 sm:pt-8 lg:pt-20 relative">
        <img
          src={vector1.src}
          alt=""
          className="absolute md:top-0 md:right-[-62.5%] sm:right-[-68%] right-[-197.5%] top-0  max-w-[69.44331rem] "
        />
        <img
          src={vector2.src}
          alt=""
          className="absolute  md:bottom-[-24%] sm:bottom-[7%] bottom-[16%]  md:left-[-50.5%] sm:left-[-40.5%] left-[-100%]  max-w-[69.44331rem]   "
          style={{
            maxWidth: "",
          }}
        />
        <div className="flex flex-col justify-center items-center text-center gap-6 relative w-full">
          {/* <img src={mesh.src} alt="Mesh Image" className="absolute w-1/2" /> */}

          <div
            className={`${
              "inView" ? "opacity-100" : "opacity-0"
            } transition-all duration-1000 ease-in-out`}
          >
            <button
              className={`border border-[#333] bg-gradient-to-b from-[#282828] to-[#444] sm:translate-y-3 text-sm shadow-lg rounded-full py-[0.375rem] px-3 flex justify-center 
           items-center text-white gap-3 w-fit transition-all z-10 tracking-[0.3em] sm:tracking-[0.3em]  font-extralight`}
            >
              MEET THE MINDS
            </button>
          </div>

          <GradientText
            text={<>Our Team</>}
            className="insetShadow lg:text-8xl text-[2.6rem] sm:text-5xl md:text-6xl font-semibold sm:px-3 tracking-tighter leading-[0.9]"
          />

          <div className="flex flex-col md:gap-[2.69rem] gap-[1.06rem] max-sm:flex-row-reverse md:mt-[6rem]">
            <div className="flex sm:justify-center md:gap-[4.62rem] gap-[2.69rem]  max-sm:flex-col">
              {developers?.slice(0, 3).map((developer, index) => {
                return (
                  <div
                    className="flex flex-col gap-[1.71rem] items-center justify-center cursor-pointer min-w-[9.8rem]"
                    key={index}
                  >
                    <div className="relative sm:w-[7.71919rem] sm:h-[7.71919rem] w-[5.10269rem] h-[5.10269rem] rounded-full">
                      <img
                        src={developer.image.src}
                        alt=""
                        className={`sm:w-[7.71919rem] sm:h-[7.71919rem] w-[5.10269rem] h-[5.10269rem] rounded-full ${
                          activeDev[0] && index === activeDev[1]
                            ? "blur-sm"
                            : ""
                        }`}
                        style={{
                          transition: "opacity 0.3s ease-in-out",
                        }}
                      />

                      <div
                        className="sm:w-[7.71919rem] sm:h-[7.71919rem] w-[5.10269rem] h-[5.10269rem] rounded-full absolute top-0 left-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out"
                        onMouseEnter={(e) => {
                          setActiveDev([true, index]);
                        }}
                        onMouseLeave={(e) => {
                          setActiveDev([false, index]);
                        }}
                      >
                        <img
                          src={ShareIcon.src}
                          alt=""
                          className="w-[1.5rem] h-[1.5rem] cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="">
                      <GradientText
                        text={<>{developer.name}</>}
                        className=" text-center font-poppins sm:text-[1.87rem] text-[1.23669rem] font-semibold tracking-tighter leading-[0.9] font-Poppins"
                      />

                      <p className="sm:text-[1.32331rem] text-[0.75rem] font-light font-inter">
                        {developer.role}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex md:gap-[4.62rem] gap-[2.69rem] sm:justify-center flex-wrap max-sm:flex-col">
              {developers
                ?.slice(3, developers.length)
                .map((developer, index) => (
                  <div
                    
                    className={`flex flex-col gap-[1.71rem] items-center justify-center cursor-pointer  ${
                      developers.length - 4 === index &&
                      "max-sm:hidden min-w-[9.8rem]"
                    }`}
                    key={index}
                  >
                    <div className="relative sm:w-[7.71919rem] sm:h-[7.71919rem] w-[5.10269rem] h-[5.10269rem] rounded-full">
                      <img
                        src={developer.image.src}
                        alt=""
                        className={`sm:w-[7.71919rem] sm:h-[7.71919rem] w-[5.10269rem] h-[5.10269rem] rounded-full ${
                          activeDev2[0] && index === activeDev2[1]
                            ? "blur-sm"
                            : ""
                        }`}
                        style={{
                          transition: "opacity 0.3s ease-in-out",
                        }}
                      />

                      <div
                        className="sm:w-[7.71919rem] sm:h-[7.71919rem] w-[5.10269rem] h-[5.10269rem] rounded-full absolute top-0 left-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out"
                        onMouseEnter={(e) => {
                          setActiveDev2([true, index]);
                        }}
                        onMouseLeave={(e) => {
                          setActiveDev2([false, index]);
                        }}
                      >
                        <img
                          src={ShareIcon.src}
                          alt=""
                          className="w-[1.5rem] h-[1.5rem] cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="">
                      <GradientText
                        text={<>{developer.name}</>}
                        className=" text-center font-poppins sm:text-[1.87rem] text-[1.23669rem] font-semibold tracking-tighter leading-[0.9] font-Poppins"
                      />

                      <p className="sm:text-[1.32331rem] text-[0.75rem] font-light font-inter">
                        {developer.role}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/**for mobile */}
          <div className="flex justify-center md:mt-[3.9rem] mt-[1.6rem] sm:hidden">
            <div className="flex flex-col gap-[1.71rem] items-center justify-center cursor-pointer ">
              <div className="relative sm:w-[7.71919rem] sm:h-[7.71919rem] w-[5.10269rem] h-[5.10269rem] rounded-full ">
                <img
                  src={developers[developers.length - 1].image.src}
                  alt=""
                  className={`sm:w-[7.71919rem] sm:h-[7.71919rem] w-[5.10269rem] h-[5.10269rem] rounded-full ${
                    activeDev2[0] && 3 === activeDev2[1] ? "blur-sm" : ""
                  }`}
                  style={{
                    transition: "opacity 0.3s ease-in-out",
                  }}
                />

                <div
                  className="sm:w-[7.71919rem] sm:h-[7.71919rem] w-[5.10269rem] h-[5.10269rem] rounded-full absolute top-0 left-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out"
                  onMouseEnter={(e) => {
                    setActiveDev2([true, 3]);
                  }}
                  onMouseLeave={(e) => {
                    setActiveDev2([false, 3]);
                  }}
                >
                  <img
                    src={ShareIcon.src}
                    alt=""
                    className="w-[1.5rem] h-[1.5rem] cursor-pointer"
                  />
                </div>
              </div>

              <div className="">
                <GradientText
                  text={<>{developers[developers.length - 1].name}</>}
                  className=" text-center font-poppins sm:text-[1.87rem] text-[1.23669rem] font-semibold tracking-tighter leading-[0.9] font-Poppins"
                />

                <p className="sm:text-[1.32331rem] text-[0.75rem] font-light font-inter">
                  {developers[developers.length - 1].role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default OurTeam;
