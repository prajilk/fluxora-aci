"use client";

import { useLenis } from "lenis/react";
import Image from "next/image";

const ScrollToAbout = () => {
  const lenis = useLenis();
  return (
    <button
      onClick={() => lenis?.scrollTo("#about")}
      className="absolute bottom-0 right-0 m-[5vw] w-[11vw] animate-pulse cursor-pointer"
    >
      <Image
        src={"/icons/scroll.png"}
        alt="Scroll down"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </button>
  );
};

export default ScrollToAbout;
