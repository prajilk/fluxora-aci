"use client";

import { useLenis } from "lenis/react";
import Image from "next/image";

const Footer = () => {
  const lenis = useLenis();
  return (
    <footer className="grid text-[max(3vw,1.2rem)] lg:text-base lg:grid-cols-4 gap-10 lg:gap-0 px-10 py-20 pt-10">
      <Image
        src={"/images/logo.png"}
        alt="Logo"
        width={0}
        height={0}
        sizes="100vw"
        className="order-3 lg:order-none lg:w-[25vw] w-[50vw] lg:mx-0 mx-auto"
        style={{
          height: "auto",
        }}
      />
      <ul className="order-2 lg:order-none space-y-5 justify-self-center font-light">
        <li className="gradient__dark opacity-80 w-fit cursor-pointer lg:mx-0 mx-auto">Mentions Légales</li>
        <li className="gradient__dark opacity-80 w-fit cursor-pointer lg:mx-0 mx-auto">Politique de Confidentialité</li>
      </ul>
      <ul className="space-y-5 justify-self-center font-light">
        <li
          onClick={() => lenis?.scrollTo("#about")}
          className="w-fit gradient__dark opacity-80 cursor-pointer lg:mx-0 mx-auto"
        >
          À Propos d&apos;ACI
        </li>
        <li
          onClick={() => lenis?.scrollTo("#expertise")}
          className="w-fit gradient__dark opacity-80 cursor-pointer lg:mx-0 mx-auto"
        >
          Notre expertise
        </li>
        <li
          onClick={() => lenis?.scrollTo("#commitments")}
          className="w-fit gradient__dark opacity-80 cursor-pointer lg:mx-0 mx-auto"
        >
          Nos Engagements
        </li>
        <li
          onClick={() => lenis?.scrollTo("#services")}
          className="w-fit gradient__dark opacity-80 cursor-pointer lg:mx-0 mx-auto"
        >
          Nos services
        </li>
      </ul>
      <span className="gradient__light opacity-80 block lg:mx-0 mx-auto self-end font-light order-4 lg:order-none">
        &copy; 2024 ACL .Tous droits réservés
      </span>
    </footer>
  );
};

export default Footer;
