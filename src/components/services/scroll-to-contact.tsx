"use client";

import { useLenis } from "lenis/react";
import DownArrow from "../icons/down-arrow";

const ScrollToContact = () => {
  const lenis = useLenis();
  return (
    <button
      onClick={() => lenis?.scrollTo("#contact")}
      className="ms-auto mt-10 flex animate-pulse items-center gap-3 rounded-lg border-b border-t border-[#505EB9B2] p-2 font-helvetica"
    >
      <span className="uppercase text-[#293373]">Nous contacter</span>
      <DownArrow />
    </button>
  );
};

export default ScrollToContact;
