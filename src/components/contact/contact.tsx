import Link from "next/link";
import Facebook from "../icons/facebook";
import House from "../icons/house";
import Instagram from "../icons/instagram";
import Linkedin from "../icons/linkedin";
import Mail from "../icons/mail";
import Phone from "../icons/phone";
import ObjectDropdown from "./object-dropdown";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="relative min-h-screen bg-cover bg-[right_top] bg-no-repeat py-20 before:absolute before:inset-0 before:bg-[#f1e6d7] before:opacity-90"
        style={{ backgroundImage: "url(/images/bg.jpg)" }}
      >
        <form
          className="relative z-10 mx-auto w-[90%] lg:w-1/2 space-y-7 border px-5 lg:px-20 py-10 shadow-md"
          style={{
            borderImage:
              "linear-gradient(to top right, transparent 50%, rgba(0, 0, 0, 0.3) 100%) 1",
          }}
        >
          <h1 className="text-[7vw] lg:text-[2.5vw] font-semibold text-center lg:text-left text-[#222B65]">Contact</h1>
          <div className="space-y-5 font-helvetica font-light text-black">
            <input
              type="text"
              placeholder="Nom complet*"
              className="w-full border-b border-[#505EB9]/30 bg-transparent p-2 text-lg lg:text-[1.5vw] outline-none placeholder:text-[#4E494380]"
            />
            <input
              type="text"
              placeholder="Entreprise (optionnel)"
              className="w-full border-b border-[#505EB9]/30 bg-transparent p-2 text-lg lg:text-[1.5vw] outline-none placeholder:text-[#4E494380]"
            />
            <input
              type="text"
              placeholder="Email*"
              className="w-full border-b border-[#505EB9]/30 bg-transparent p-2 text-lg lg:text-[1.5vw] outline-none placeholder:text-[#4E494380]"
            />
            <ObjectDropdown />
            <textarea
              placeholder="Message*"
              rows={5}
              className="w-full resize-none rounded-lg border-x border-b border-[#505EB9]/30 bg-transparent p-2 text-lg lg:text-[1.5vw] outline-none placeholder:text-[#4E494380]"
            ></textarea>
            <button className="w-full bg-[#222B65]/90 py-5 font-medium uppercase text-white hover:bg-[#4551a0]/90">
              Envoyer
            </button>
          </div>
        </form>
      </div>
      <div>
        <div
          className="mx-auto my-20 grid w-[90%] lg:[borderImage:linear-gradient(to_top,transparent_50%,rgba(0,0,0,0.3)_100%)_1] lg:w-1/2 grid-cols-2 gap-3 lg:gap-0 lg:grid-cols-3 lg:border"
        >
          <div className="flex [borderImage:linear-gradient(to_top,transparent_50%,rgba(80,94,185,0.7)_100%)_1] lg:border-none border h-64 flex-col justify-between p-4 shadow-lg shadow-black/5">
            <div className="flex flex-col gap-4">
              <Phone />
              <span className="gradient__dark text-xl font-light">
                Téléphone :
              </span>
            </div>
            <span className="text-xl font-light text-[#505EB9]/70">
              +33 1 40 21 11 10
            </span>
          </div>
          <div
            className="lg:h-96 border p-4 shadow-lg shadow-black/5"
            style={{
              borderImage:
                "linear-gradient(to top, transparent 50%, rgba(80,94,185,0.7) 100%) 1",
            }}
          >
            <House />
            <span className="gradient__dark mb-7 mt-4 block text-xl font-light">
              Adresse :
            </span>
            <span className="text-xl font-light text-[#505EB9]/70">
              75 Avenue Parmentier 75011 Paris, France
            </span>
          </div>
          <div className="flex [borderImage:linear-gradient(to_top,transparent_50%,rgba(80,94,185,0.7)_100%)_1] lg:border-none border col-span-2 lg:col-span-1 h-52 lg:h-64 flex-col justify-between p-4 shadow-lg shadow-black/5">
            <div className="flex flex-col gap-4">
              <Mail />
              <span className="gradient__dark text-xl font-light">
                E-mail :
              </span>
            </div>
            <span className="text-,d font-light text-[#505EB9]/70">
              events@acivoyage.com
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-7 py-10">
          <Link
            href="https://www.facebook.com/events.acivoyage"
            target="_blank"
          >
            <Instagram />
          </Link>
          <Link
            href="https://www.linkedin.com/company/events-acivoyage/"
            target="_blank"
          >
            <Linkedin />
          </Link>
          <Link
            href="https://www.instagram.com/events.acivoyage/"
            target="_blank"
          >
            <Facebook />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
