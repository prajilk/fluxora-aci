import gsap from "gsap";
import { useLenis } from "lenis/react";
import Image from "next/image";

const Sidebar = () => {
  const lenis = useLenis();
  function closeSidebar() {
    lenis?.start();
    gsap.to(".sidebar", {
      duration: 2,
      opacity: 0,
      x: "-100%",
      ease: "elastic.out(1,1.1)",
    });
    gsap.to(".menu_btn", {
      duration: 1.3,
      x: "0%",
      ease: "elastic.out(1,1.1)",
    });

    gsap.to(".menu_line_middle", {
      duration: 0.3,
      opacity: 1,
    });
    gsap.to(".menu_line_bottom", {
      duration: 0.3,
      y: 0,
      rotate: 0,
    });
    gsap.to(".menu_line_top", {
      duration: 0.3,
      y: 0,
      rotate: 0,
    });

    gsap.to(".close_btn", {
      duration: 0.3,
      x: "0%",
    });
    gsap.to(".close_btn_middle", {
      duration: 0.3,
      opacity: 1,
    });
    gsap.to(".close_btn_bottom", {
      duration: 0.3,
      y: 0,
      rotate: 0,
    });
    gsap.to(".close_btn_top", {
      duration: 0.3,
      y: 0,
      rotate: 0,
    });

    gsap.to(".nav_logo", {
      duration: 1.3,
      x: "0%",
      ease: "elastic.out(1,1.1)",
    });
    gsap.to(".hero_heading", {
      duration: 1.3,
      x: "0%",
      ease: "elastic.out(1,1.1)",
    });
  }

  return (
    <div
      className="sidebar fixed left-0 top-0 z-50 h-screen w-1/2 bg-[#151933] opacity-0 shadow-[10px_0_100px_-2px_#15193380]"
      style={{
        transform: "translateX(-100%)",
      }}
    >
      <button
        className="close_btn mx-auto block space-y-3 p-5 pt-14 text-4xl text-white"
        onClick={closeSidebar}
      >
        <div className="close_btn_top h-0.5 w-16 bg-[#f1e6d7]"></div>
        <div className="close_btn_middle h-0.5 w-16 translate-x-3 bg-[#f1e6d7]"></div>
        <div className="close_btn_bottom h-0.5 w-16 bg-[#f1e6d7]"></div>
      </button>
      <ul className="mt-[7vw] space-y-4 ps-[15%] font-helvetica text-[2vw] font-light uppercase text-white/75">
        <li
          onClick={() => {
            closeSidebar();
            lenis?.scrollTo("#about");
          }}
          className="cursor-pointer"
        >
          À PROPOS D&apos;ACI
        </li>
        <li
          onClick={() => {
            closeSidebar();
            lenis?.scrollTo("#expertise");
          }}
          className="cursor-pointer"
        >
          NOTRE EXPERTISE
        </li>
        <li
          onClick={() => {
            closeSidebar();
            lenis?.scrollTo("#services");
          }}
          className="cursor-pointer"
        >
          NOS SERVICES
        </li>
        <li
          onClick={() => {
            closeSidebar();
            lenis?.scrollTo("#commitments");
          }}
          className="cursor-pointer"
        >
          NOS ENGAGEMENTS
        </li>
        <li
          onClick={() => {
            closeSidebar();
            lenis?.scrollTo("#contact");
          }}
          className="cursor-pointer"
        >
          CONTACT
        </li>
      </ul>
      <div className="mx-auto w-[15vw]">
        <Image
          src="/images/logo_plane.png"
          alt="Logo plane"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
