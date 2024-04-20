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
      className={`${className} insetShadow bg-gradient-to-r from-white via-gray-300 to-[#4d4f5d] text-white bg-clip-text lg:text-[4.5rem] text-[2.8rem] sm:text-5xl md:text-6xl font-bold tracking-[-0.035em] leading-[0.9]`}
    >
      {children} {text}
    </h1>
  );
};
