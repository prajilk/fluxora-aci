import ScrollToAbout from "./scroll-to-about";

const Hero = () => {
  return (
    <div
      className="relative h-[40rem] min-h-screen bg-cover bg-[right_top] bg-no-repeat before:absolute before:inset-0 before:bg-[#f1e6d7] before:opacity-90"
      style={{ backgroundImage: "url(/images/bg.jpg)" }}
    >
      <div className="relative h-full w-full">
        <div className="absolute bottom-1/4 z-50 ms-[max(10vw,100px)] w-fit">
          <h1 className="hero_heading relative text-[3.3vw] capitalize italic text-[#4551a0] after:absolute after:-bottom-5 after:left-0 after:h-[1px] after:w-full after:bg-[radial-gradient(circle,#222B6580,#CA181D00)]">
            Le Sur mesure depuis <span className="text-[#640c03]">1998</span>
          </h1>
        </div>
        <ScrollToAbout />
      </div>
    </div>
  );
};

export default Hero;
