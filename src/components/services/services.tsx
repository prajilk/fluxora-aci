import ScrollToContact from "./scroll-to-contact";
import Card from "./card";

const cards = [
  {
    src: "/images/service_1.png",
    alt: "Service boy",
    title: "Gestion des déplacements internationaux",
    description:
      "Prise en charge complète des déplacements internationaux, y compris pour des événements prestigieux tels que la Fashion Week, le Festival de Cannes, le Grand Prix de Formule 1, et bien plus.",
  },
  {
    src: "/images/service_2.jpg",
    alt: "Passport Image",
    title: "Réservations de transport",
    description:
      "Billets de train et d'avion avec accréditation IATA, pour des voyages individuels ou des privatisations.",
  },
  {
    src: "/images/service_3.png",
    alt: "Customer",
    title: "Suivi clientèle",
    description:
      "Service client dédié pour accompagner chaque étape du voyage.",
  },
  {
    src: "/images/service_4.png",
    alt: "Bar",
    title: "Hôtellerie et restauration",
    description:
      "Organisation d'hébergements exclusifs et de services de restauration haut de gamme.",
  },
  {
    src: "/images/service_5.png",
    alt: "Hotel",
    title: "Événementiel et conciergerie",
    description:
      "Planification et gestion d'événements, avec un service de conciergerie pour répondre à toutes les demandes.",
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="relative min-h-screen p-7 lg:p-[max(10vw,100px)]"
    >
      <h1 className="text-center text-[7vw] tracking-widest text-[#222B65] lg:text-left lg:text-[3vw] lg:tracking-wider">
        Nos Services
      </h1>
      <hr className="my-5 border-black/10" />
      <div className="mt-10 grid gap-3 lg:grid-cols-3">
        {cards.map((card, i) => (
          <Card
            src={card.src}
            key={i}
            alt={card.alt}
            className={i === 0 ? "row-span-2" : "aspect-[1/0.8]"}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="flex justify-center lg:justify-end">
        <ScrollToContact />
      </div>
    </div>
  );
};

export default Services;
