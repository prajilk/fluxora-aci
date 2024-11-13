import Image from "next/image";

const Expertise = () => {
  return (
    <div
      id="expertise"
      className="min-h-screen space-y-5 bg-[#f1e6d7] p-7 lg:p-[max(10vw,100px)]"
    >
      <h1 className="text-center tracking-widest lg:tracking-wider lg:text-left text-[7vw] lg:text-[3vw] text-[#222B65]">Notre Expertise</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          <div className="aspect-square lg:aspect-video w-full overflow-hidden">
            <Image
              src={"/images/expertise_1.jpg"}
              alt="Flight window view image"
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
          <div className="aspect-square lg:aspect-video w-full overflow-hidden">
            <Image
              src={"/images/expertise_2.png"}
              alt="Flight window view image"
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
        </div>

        <div
          className="space-y-7 border-2 p-7 lg:p-14 shadow-sm"
          style={{
            borderImage:
              "linear-gradient(to bottom right, transparent 50%, rgba(0, 0, 0, 0.3) 100%) 1",
          }}
        >
          <h2
            className="rounded-md border py-2 shadow whitespace-nowrap text-center text-[5vw] lg:text-[2vw] text-black/50 opacity-60"
            style={{
            borderImage:
              "linear-gradient(to bottom right, transparent 50%, rgba(0, 0, 0, 0.3) 100%) 1",
          }}
            // style={{ boxShadow: "3px 3px 10px 0px rgba(0,0,0,0.2)" }}
          >
            Conciergerie d&apos;Entreprise
          </h2>
          <div className="space-y-10 pt-5 text-[#4E494380] lg:pt-10 font-helvetica text-[4vw] lg:text-[1.2vw] font-light opacity-50">
            <p>
              Spécialisés dans la gestion complète des besoins événementiels et
              des déplacements <b>VIP</b>, nous offrons aux entreprises un
              service clé en main, alliant savoir-faire et excellence
              opérationnelle.
            </p>
            <div className="space-y-5">
              <p>
                De l &apos;organisation de conférences et séminaires prestigieux
                à la planification de voyages VIP exclusifs, nous assurons un
                accompagnement sur mesure à chaque étape.
              </p>
              <p>
                Grâce à notre réseau de partenaires de confiance et notre
                expérience éprouvée, nous garantissons des solutions adaptées et
                une gestion sans faille pour des événements et déplacements qui
                reflètent l&apos;image et les standards les plus élevés de nos
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
