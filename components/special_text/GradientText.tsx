/* eslint-disable @next/next/no-img-element */

interface GradientTextProps {
  text?: string | React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  text = "Buy, Swap or Sell <br /> Ton in a few clicks.",
  className = "",
}) => {
  return (
    <h1
      className={`${className} bg-gradient-to-r from-gray-300 via-white to-[#a9baeb] inline-block text-gray-300 bg-clip-text font-bold `}
    >
      {text}
    </h1>
  );
};
