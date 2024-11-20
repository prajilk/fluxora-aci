"use client";

import Image from "next/image";
import Sidebar from "./sidebar";
import gsap from "gsap";
import { useLenis } from "lenis/react";

const Nav = () => {
  const lenis = useLenis();
  function openSidebar() {
    lenis?.stop();
    gsap.to(".sidebar", {
      duration: 1.3,
      x: "0%",
      opacity: 1,
      ease: "elastic.out(1,1.1)",
    });
    gsap.to(".menu_btn", {
      duration: 1.3,
      x: "200%",
      ease: "elastic.out(1,1.1)",
    });

    gsap.to(".menu_line_middle", {
      duration: 0.3,
      opacity: 0,
    });
    gsap.to(".menu_line_bottom", {
      duration: 0.3,
      y: "-14px",
      rotate: -45,
    });
    gsap.to(".menu_line_top", {
      duration: 0.3,
      y: "14px",
      rotate: 45,
    });

    gsap.to(".close_btn", {
      duration: 0.3,
      marginRight: "0"
    });
    gsap.to(".close_btn_middle", {
      duration: 0.3,
      opacity: 0,
    });
    gsap.to(".close_btn_bottom", {
      duration: 0.5,
      y: "-14px",
      rotate: -45,
    });
    gsap.to(".close_btn_top", {
      duration: 0.5,
      y: "14px",
      rotate: 45,
    });

    gsap.to(".nav_logo", {
      duration: 1.3,
      x: "25%",
      ease: "elastic.out(1,1.1)",
    });
    gsap.to(".hero_heading", {
      duration: 1.3,
      x: "80%",
      ease: "elastic.out(1,1.1)",
    });

    gsap.to(".hero__plane_logo", {
      duration: 1.3,
      x: "-50%",
      opacity: 1,
      ease: "elastic.out(1,1.1)",
    })
  }

  return (
    <>
      <nav className="absolute z-40 w-screen p-5 overflow-hidden">
        <button
          className="menu_btn group lg:absolute z-50 space-y-3 p-2 lg:p-5"
          onClick={() => openSidebar()}
        >
          <div className="menu_line_top h-0.5 w-16 bg-[#222B65]"></div>
          <div className="menu_line_middle h-0.5 w-16 translate-x-3 bg-[#222B65] transition-transform duration-500 group-hover:translate-x-0"></div>
          <div className="menu_line_bottom h-0.5 w-16 bg-[#222B65]"></div>
        </button>

        <div className="nav_logo pt-7 lg:pt-14 flex justify-center">
          <Image
            src={"/images/logo.png"}
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-3/4 lg:w-[35vw]"
            style={{
              height: "100%",
            }}
          />
        </div>
      </nav>
      <Sidebar />
    </>
  );
};

export default Nav;
