"use client";

import { useLenis } from "lenis/react";
import Image from "next/image";
import DownArrow from "../icons/down-arrow";

const ScrollToAbout = () => {
  const lenis = useLenis();
  return (
    <>
    <button
      onClick={() => lenis?.scrollTo("#about")}
      className="absolute hidden lg:block bottom-0 right-0 m-[5vw] w-[11vw] animate-pulse cursor-pointer"
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
    <button
      onClick={() => lenis?.scrollTo("#about")}
      className="absolute lg:hidden bottom-0 left-1/2 -translate-x-1/2 mb-16 w-[30vw] animate-pulse cursor-pointer"
    >
      <DownArrow />
    </button>
    </>
  );
};

export default ScrollToAbout;
