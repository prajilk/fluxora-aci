const commitments = [
  "Intégrité",
  "Confiance",
  "Engagement",
  "Collaboration",
  "Responsabilité",
  "Discrétion",
];

const Commitments = () => {
  return (
    <div
      id="commitments"
      className="relative min-h-screen p-7 lg:p-[max(10vw,100px)]"
    >
      <h1 className="text-center text-[7vw] tracking-widest text-[#222B65] lg:text-left lg:text-[3vw] lg:tracking-wider">
        Nos Engagements
      </h1>
      <span className="absolute right-0 hidden w-[100vh] origin-top-right -translate-x-[13vw] -rotate-90 text-[5em] font-light uppercase leading-none opacity-5 lg:block">
        Nos <br /> Engagements
      </span>
      <div className="relative before:absolute before:hidden before:h-full before:w-[1px] before:bg-black/10 lg:before:block">
        <div className="gradient__line absolute top-1/2 hidden h-[1px] w-[25%] -translate-y-1/2 lg:block"></div>
        <div
          className="relative mx-auto mt-10 w-full border-2 px-10 py-24 shadow shadow-black/10 lg:mt-20 lg:w-1/2 lg:py-32 lg:shadow-2xl"
          style={{
            borderImage:
              "linear-gradient(to bottom right, transparent 50%, rgba(34,43,101,0.3) 100%) 1",
          }}
        >
          <ul className="flex flex-col items-center space-y-7 text-[5vw] uppercase lg:space-y-10 lg:text-[1.5vw]">
            {commitments.map((commitment, i) => (
              <li
                className={`${i % 2 === 0 ? "gradient__dark" : "gradient__light"} w-fit`}
                key={commitment}
              >
                {commitment}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span className="mt-10 block text-[10vw] font-light uppercase leading-none opacity-5 lg:hidden">
        Nos <br /> Engagements
      </span>
    </div>
  );
};

export default Commitments;
