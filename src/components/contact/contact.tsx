import Facebook from "../icons/facebook";
import House from "../icons/house";
import Instagram from "../icons/instagram";
import Linkedin from "../icons/linkedin";
import Mail from "../icons/mail";
import Phone from "../icons/phone";
import Form from "./form";
import Social from "./social";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="relative min-h-screen bg-cover bg-[right_top] bg-no-repeat py-20 before:absolute before:inset-0 before:bg-[#f1e6d7] before:opacity-90"
        style={{ backgroundImage: "url(/images/bg.jpg)" }}
      >
        <Form />
      </div>
      <div>
        <div className="mx-auto my-20 grid w-[90%] grid-cols-2 gap-3 lg:w-1/2 lg:grid-cols-3 lg:gap-0 lg:border lg:[borderImage:linear-gradient(to_top,transparent_50%,rgba(0,0,0,0.3)_100%)_1]">
          <div className="flex h-64 flex-col justify-between border p-4 shadow-lg shadow-black/5 [borderImage:linear-gradient(to_top,transparent_50%,rgba(80,94,185,0.7)_100%)_1] lg:border-none">
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
            className="border p-4 shadow-lg shadow-black/5 lg:h-96"
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
          <div className="col-span-2 flex h-52 flex-col justify-between border p-4 shadow-lg shadow-black/5 [borderImage:linear-gradient(to_top,transparent_50%,rgba(80,94,185,0.7)_100%)_1] lg:col-span-1 lg:h-64 lg:border-none">
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

        <div className="hidden items-center justify-center gap-7 py-10 lg:flex">
          <Social>
            <Instagram />
          </Social>
          <Social>
            <Linkedin />
          </Social>
          <Social>
            <Facebook />
          </Social>
        </div>
      </div>
    </>
  );
};

export default Contact;
