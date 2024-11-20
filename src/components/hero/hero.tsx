import Image from "next/image";
import ScrollToAbout from "./scroll-to-about";

const Hero = () => {
  return (
    <div
      className="relative h-[40rem] min-h-screen bg-cover bg-[right_top] bg-no-repeat before:absolute before:inset-0 before:bg-[#f1e6d7] before:opacity-90"
      style={{ backgroundImage: "url(/images/bg.jpg)" }}
    >
      <div className="relative size-full">
        <div className="hero_heading hidden lg:block absolute bottom-0 z-50 ms-[max(10vw,100px)] w-fit">
          <h1 className="relative text-[2.1vw] capitalize italic text-[#4551a0] after:absolute after:-bottom-5 after:left-0 after:h-[1px] after:w-full after:bg-[radial-gradient(circle,#222B6580,#CA181D00)]">
            Le Sur mesure depuis <span className="text-[#640c03]">1998</span>
          </h1>
          <div className="hero__plane_logo opacity-0 hidden w-[15vw] lg:block" style={{transform: "translateX(-150%)"}}>
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
        <div className="lg:hidden flex items-center h-full">
          <h1 className="italic text-[10vw] text-center leading-tight relative after:absolute after:-bottom-5 after:h-[1px] capitalize after:w-full after:left-0 after:bg-[radial-gradient(circle,#222B6530,#CA181D00)]">
            <span className="gradient__dark">Le Sur mesure depuis </span>
            <span className="text-[#640c03]">1998</span>
          </h1>
        </div>
        <ScrollToAbout />
      </div>
    </div>
  );
};

export default Hero;
