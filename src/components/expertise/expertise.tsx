import ImageContainer from "./image-container";

const Expertise = () => {
  return (
    <div
      id="expertise"
      className="min-h-screen space-y-5 bg-[#f1e6d7] p-7 lg:p-[max(10vw,100px)]"
    >
      <h1 className="text-center text-[7vw] tracking-widest text-[#222B65] lg:text-left lg:text-[3vw] lg:tracking-wider">
        Notre Expertise
      </h1>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <ImageContainer
            alt="Flight window view image"
            src={"/images/expertise_1.jpg"}
          />
          <ImageContainer
            alt="Luxury hotel reception"
            src={"/images/expertise_2.png"}
          />
        </div>

        <div
          className="space-y-7 border-2 p-7 shadow-sm lg:p-14"
          style={{
            borderImage:
              "linear-gradient(to bottom right, transparent 50%, rgba(0, 0, 0, 0.3) 100%) 1",
          }}
        >
          <h2
            className="whitespace-nowrap rounded-md border py-2 text-center text-[5vw] text-black/50 shadow lg:text-[2vw]"
            style={{
              borderImage:
                "linear-gradient(to bottom right, transparent 50%, rgba(0, 0, 0, 0.3) 100%) 1",
            }}
          >
            Conciergerie d&apos;Entreprise
          </h2>
          <div className="space-y-10 pt-5 font-helvetica text-[4vw] font-light text-[#4E494380] lg:pt-10 lg:text-[1.2vw]">
            <p>
              Spécialisés dans la gestion complète des besoins événementiels et
              des déplacements <b>VIP</b>, nous offrons aux entreprises un
              service clé en main, alliant savoir-faire et excellence
              opérationnelle.
            </p>
            <div className="space-y-5">
              <p>
                De l&apos;organisation de conférences et séminaires prestigieux
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
