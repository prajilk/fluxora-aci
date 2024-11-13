"use client";

import ObjectDropdown from "./object-dropdown";

const Form = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative z-10 mx-auto w-[90%] space-y-7 border px-5 py-10 shadow-md lg:w-1/2 lg:px-20"
      style={{
        borderImage:
          "linear-gradient(to top right, transparent 50%, rgba(0, 0, 0, 0.3) 100%) 1",
      }}
    >
      <h1 className="text-center text-[7vw] font-semibold text-[#222B65] lg:text-left lg:text-[2.5vw]">
        Contact
      </h1>
      <div className="space-y-5 font-helvetica font-light text-black">
        <input
          type="text"
          placeholder="Nom complet*"
          className="w-full border-b border-[#505EB9]/30 bg-transparent p-2 text-lg outline-none placeholder:text-[#4E494380] lg:text-[1.5vw]"
        />
        <input
          type="text"
          placeholder="Entreprise (optionnel)"
          className="w-full border-b border-[#505EB9]/30 bg-transparent p-2 text-lg outline-none placeholder:text-[#4E494380] lg:text-[1.5vw]"
        />
        <input
          type="text"
          placeholder="Email*"
          className="w-full border-b border-[#505EB9]/30 bg-transparent p-2 text-lg outline-none placeholder:text-[#4E494380] lg:text-[1.5vw]"
        />
        <ObjectDropdown />
        <textarea
          placeholder="Message*"
          rows={5}
          className="w-full resize-none rounded-lg border-x border-b border-[#505EB9]/30 bg-transparent p-2 text-lg outline-none placeholder:text-[#4E494380] lg:text-[1.5vw]"
        ></textarea>
        <button className="w-full bg-[#222B65]/90 py-5 font-medium uppercase text-white hover:bg-[#4551a0]/90">
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default Form;
