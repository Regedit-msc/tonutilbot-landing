"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export function MyComponent() {
  return (
    <Parallax pages={1} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0} speed={2.5}>
        <p className="h-[50vh] bg-black text-white flex justify-center items-center">
          Parallax
        </p>
      </ParallaxLayer>
    </Parallax>
  );
}
