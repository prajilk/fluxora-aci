import Image from "next/image";
import Book from "../icons/book";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen space-y-10 bg-[#f1e6d7] p-7 lg:p-[max(10vw,100px)]"
    >
      <h1 className="text-center tracking-widest lg:tracking-wider lg:text-left text-[7vw] lg:text-[3vw] text-[#222B65]">À Propos d&apos;ACI</h1>
      <div className="grid lg:grid-cols-2">
        <div className="lg:hidden">
          <Image
              src={"/images/about_mobile.png"}
              alt="About image"
              className="object-cover"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
        </div>
        <div
          className="w-full lg:w-4/5 space-y-7 border-2 px-10 lg:px-14 p-14 shadow-lg"
          style={{
            borderImage:
              "linear-gradient(to bottom right, transparent 50%, rgba(0, 0, 0, 0.3) 100%) 1",
          }}
        >
          <div className="flex justify-center lg:justify-start">
            <Book />
          </div>
          <h2 className="gradient__dark font-light text-center lg:text-left text-[5vw] lg:text-[2vw]">Histoire de ACI</h2>
          <div className="font-helvetica text-[3.8vw] lg:text-[1.2vw] font-light opacity-50">
            <p>
              L&apos;histoire d&apos;ACI Voyages est marquée par son engagement
              dans le voyage sur mesure depuis <b>1998.</b>
            </p>
            <p className="mb-10">
              Dès sa création, l&apos;agence s&apos;est spécialisée dans la
              conception de parcours personnalisés, répondant aux besoins
              spécifiques de ses clients.
            </p>
            <p>
              Elle s&apos;est distinguée par son approche individualisée et son
              service de conciergerie de luxe, intégrant tous les aspects
              logistiques et pratiques pour offrir des expériences uniques et
              sans souci.
            </p>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <Image
                src={"/images/about_desktop.png"}
                alt="About image"
                className="object-cove"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
          {/* <div className="absolute right-10 top-1/2 aspect-auto w-[20vw] -translate-y-1/2">
            <Image
              src={"/images/about_rounded_text.png"}
              alt="About image"
              className="object-cover"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="relative left-1/2 top-1/2 size-3/5 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-[25vw]">
              <Image
                src={"/images/about_2.png"}
                alt="About image"
                className="object-cover"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="absolute -bottom-14 -left-14 w-[10vw]">
              <Image
                src={"/images/about_1.png"}
                alt="About image"
                className="object-cover"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
