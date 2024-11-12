"use client";

import { useLenis } from "lenis/react";
import Image from "next/image";

const Footer = () => {
  const lenis = useLenis();
  return (
    <footer className="grid grid-cols-4 px-10 py-20 pt-10">
      <Image
        src={"/images/logo.png"}
        alt="Logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "25vw",
          height: "auto",
        }}
      />
      <ul className="gradient__dark space-y-5 justify-self-center font-light">
        <li className="w-fit cursor-pointer">Mentions Légales</li>
        <li className="w-fit cursor-pointer">Politique de Confidentialité</li>
      </ul>
      <ul className="gradient__dark space-y-5 justify-self-center font-light">
        <li
          onClick={() => lenis?.scrollTo("#about")}
          className="w-fit cursor-pointer"
        >
          À Propos d&apos;ACI
        </li>
        <li
          onClick={() => lenis?.scrollTo("#expertise")}
          className="w-fit cursor-pointer"
        >
          Notre expertise
        </li>
        <li
          onClick={() => lenis?.scrollTo("#commitments")}
          className="w-fit cursor-pointer"
        >
          Nos Engagements
        </li>
        <li
          onClick={() => lenis?.scrollTo("#services")}
          className="w-fit cursor-pointer"
        >
          Nos services
        </li>
      </ul>
      <span className="gradient__light self-end font-light">
        &copy; 2024 ACL .Tous droits réservés
      </span>
    </footer>
  );
};

export default Footer;
