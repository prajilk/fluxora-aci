"use client";

import { useEffect, useRef, useState } from "react";
import ChevronDown from "../icons/chevron-down";
import gsap from "gsap";

const ObjectDropdown = () => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dropdown = gsap.to(dropdownRef.current, {
    duration: 0.5,
    ease: "power4.inOut",
    opacity: open ? 1 : 0,
    height: open ? "auto" : 0,
  });

  useEffect(() => {
    console.log("calling...");

    if (open) {
      dropdown.play();
    } else {
      dropdown.reverse();
    }
  }, [open]);

  function handleValue(value: string) {
    setValue(value);
    setOpen(false);
  }

  return (
    <div
      className={`relative w-full cursor-pointer border-b border-[#505EB9]/30 p-2 text-[1.5vw]`}
    >
      <div
        className="flex items-center justify-between"
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        tabIndex={0}
      >
        <span className={`${!value && "text-[#4E494380]"}`}>
          {value ? value : "Objet*"}
        </span>
        <ChevronDown open={open} />
      </div>
      <div
        ref={dropdownRef}
        className="absolute left-0 top-full mt-0.5 h-0 w-full overflow-hidden bg-[#e3d4c0] shadow-lg"
      >
        <ul>
          <li
            className="px-2 py-3 text-black/45 hover:bg-[#828EE0]/15 hover:text-[#1B2358CC]"
            onClick={() => handleValue("Demande de devis")}
          >
            Demande de devis
          </li>
          <li
            className="px-2 py-3 text-black/45 hover:bg-[#828EE0]/15 hover:text-[#1B2358CC]"
            onClick={() => handleValue("Renseignements Généraux")}
          >
            Renseignements Généraux
          </li>
          <li
            className="px-2 py-3 text-black/45 hover:bg-[#828EE0]/15 hover:text-[#1B2358CC]"
            onClick={() => handleValue("Support technique")}
          >
            Support technique
          </li>
          <li
            className="px-2 py-3 text-black/45 hover:bg-[#828EE0]/15 hover:text-[#1B2358CC]"
            onClick={() => handleValue("Autre")}
          >
            Autre
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ObjectDropdown;
