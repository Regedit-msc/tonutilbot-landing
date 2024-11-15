import React, { FC } from "react";

// interface IProps {};

const BotCommands: FC = (props) => {
  const commands = [
    "Buy Jetton 🟢",
    "Sell Jetton 🔴",
    "Pin 📌",
    "View Orders 📦",
    "Refresh 🔄",
    "Settings ⚙️",
  ];

  return (
    <div className="w-full relative flex justify-center pt-2 overflow-hidden">
      <div className="grid grid-cols-2 text-white gap-2 w-full max-w-[420px] translate-y-1/3 group-hover:translate-y-0 duration-300">
        {commands.map((command, index) => (
          <div
            key={index}
            className="rounded-xl xs:rounded-2xl px-4 text-xs xs:text-sm flex justify-center items-center h-10 xs:h-[3.25rem] bg-white/5"
          >
            {command}
          </div>
        ))}
      </div>

      <span className="absolute bg-gradient-to-t from-[#202125] via-[#202125]/80 w-full h-10 -bottom-3 xs:bottom-0 flex md:h-12"></span>
    </div>
  );
};

export default BotCommands;
