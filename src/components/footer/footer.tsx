"use client";

import { useLenis } from "lenis/react";
import Image from "next/image";

const links = [
  { name: "À Propos d'ACI Voyage", href: "#about" },
  { name: "Notre expertise", href: "#expertise" },
  { name: "Nos Engagements", href: "#commitments" },
  { name: "Nos services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const lenis = useLenis();
  return (
    <footer className="grid gap-10 px-10 py-20 pt-10 text-[max(3vw,1.2rem)] lg:grid-cols-4 lg:gap-0 lg:text-base">
      <Image
        src={"/images/logo.png"}
        alt="Logo"
        width={0}
        height={0}
        sizes="100vw"
        className="order-3 mx-auto w-[50vw] lg:order-none lg:mx-0 lg:w-[25vw]"
        style={{
          height: "auto",
        }}
      />
      <ul className="order-2 space-y-5 justify-self-center font-light lg:order-none">
        <li className="gradient__dark mx-auto w-fit cursor-pointer opacity-80 lg:mx-0">
          Mentions Légales
        </li>
        <li className="gradient__dark mx-auto w-fit cursor-pointer opacity-80 lg:mx-0">
          Politique de Confidentialité
        </li>
      </ul>
      <ul className="space-y-5 justify-self-center font-light">
        {links.map((link) => (
          <li
            key={link.name}
            onClick={() => lenis?.scrollTo(link.href)}
            className="gradient__dark mx-auto w-fit cursor-pointer opacity-80 lg:mx-0"
          >
            {link.name}
          </li>
        ))}
      </ul>
      <span className="gradient__light order-4 mx-auto block self-end font-light opacity-80 lg:order-none lg:mx-0">
        &copy; 2024 ACL .Tous droits réservés
      </span>
    </footer>
  );
};

export default Footer;
