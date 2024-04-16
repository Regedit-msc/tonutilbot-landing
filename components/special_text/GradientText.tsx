/* eslint-disable @next/next/no-img-element */

interface GradientTextProps {
  children?: any;
  text?: string | React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  text,
  children,
  className = "",
}) => {
  return (
    <h1
      className={`${className} bg-gradient-to-r from-gray-300 via-white to-[#37383f] text-gray-300 font-bold pb-2 bg-clip-text`}
    >
      {children} {text}
    </h1>
  );
};
