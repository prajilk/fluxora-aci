const Commitments = () => {
  return (
    <div id="commitments" className="relative min-h-screen p-[max(10vw,100px)]">
      <h1 className="text-[3vw] text-[#222B65]">Nos Engagements</h1>
      <span className="absolute right-0 w-[100vh] origin-top-right -translate-x-[13vw] -rotate-90 text-[5em] font-light uppercase leading-none opacity-5">
        Nos <br /> Engagements
      </span>
      <div className="relative before:absolute before:h-full before:w-[1px] before:bg-black/10">
        <div className="gradient__line absolute top-1/2 h-[1px] w-[25%] -translate-y-1/2"></div>
        <div
          className="relative mx-auto mt-20 w-1/2 border-2 px-10 py-32 shadow-2xl shadow-black/10"
          style={{
            borderImage:
              "linear-gradient(to bottom right, transparent 50%, rgba(34,43,101,0.3) 100%) 1",
          }}
        >
          <ul className="flex flex-col items-center space-y-10 text-[1.5vw] uppercase">
            <li className="gradient__dark w-fit">Intégrité</li>
            <li className="gradient__light w-fit">Confiance</li>
            <li className="gradient__dark w-fit">Engagement</li>
            <li className="gradient__light w-fit">Collaboration</li>
            <li className="gradient__dark w-fit">Responsabilité</li>
            <li className="gradient__light w-fit">Discrétion</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Commitments;
