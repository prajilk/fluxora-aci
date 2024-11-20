import gsap from "gsap";
import { useLenis } from "lenis/react";
import Image from "next/image";

const links = [
  { name: "À Propos d'ACI Voyage", href: "#about" },
  { name: "Notre expertise", href: "#expertise" },
  { name: "Nos engagements", href: "#commitments" },
  { name: "Nos services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

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
      marginRight: "auto",
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

    gsap.to(".hero__plane_logo", {
      duration: 2,
      x: "-150%",
      opacity: 0,
      ease: "elastic.out(1,1.1)",
    })
  }

  return (
    <div
      className="sidebar fixed left-0 top-0 z-50 h-screen w-screen bg-[#151933] opacity-0 shadow-[10px_0_100px_-2px_#15193380] lg:w-1/2"
      style={{
        transform: "translateX(-100%)",
      }}
    >
      <div className="relative h-full flex flex-col">
        <button
          className="close_btn mx-auto block space-y-3 p-5 pt-7 text-4xl text-white lg:pt-14"
          onClick={closeSidebar}
        >
          <div className="close_btn_top h-0.5 w-16 bg-[#f1e6d7]"></div>
          <div className="close_btn_middle h-0.5 w-16 translate-x-3 bg-[#f1e6d7]"></div>
          <div className="close_btn_bottom h-0.5 w-16 bg-[#f1e6d7]"></div>
        </button>
        <ul className="mt-[14vw] space-y-6 px-10 font-helvetica text-[7vw] font-light uppercase text-white/30 lg:mt-[7vw] lg:space-y-4 lg:ps-[15%] lg:text-[2vw] lg:text-white/75">
          {links.map((link, i) => (
            <li
              onClick={() => {
                closeSidebar();
                lenis?.scrollTo(link.href);
              }}
              key={i}
              className="cursor-pointer w-fit hover:text-[#EBE2D6] border-b border-white/10 uppercase lg:border-none"
            >
              {link.name}
            </li>
          ))}
        </ul>
        <div className="mx-auto mb-40 mt-auto w-[50vw] lg:hidden">
          <Image
            src="/images/logo_lite.png"
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
    </div>
  );
};

export default Sidebar;
