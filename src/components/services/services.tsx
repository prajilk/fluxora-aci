import Image from "next/image";
import ScrollToContact from "./scroll-to-contact";

const Services = () => {
  return (
    <div id="services" className="relative min-h-screen p-[max(10vw,100px)]">
      <h1 className="text-[3vw] text-[#222B65]">Nos Services</h1>
      <hr className="my-5 border-black/10" />
      <div className="mt-10 grid grid-cols-3 gap-3">
        <div className="relative row-span-2 h-full before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:to-transparent">
          <Image
            src={"/images/service_1.png"}
            alt="Service boy"
            className="object-cover"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end gap-3 p-5 text-white">
            <h4 className="text-[1.3vw] capitalize leading-tight">
              Gestion des déplacements internationaux
            </h4>
            <p className="font-helvetica font-extralight leading-tight opacity-50">
              Prise en charge complète des déplacements internationaux, y
              compris pour des événements prestigieux tels que la Fashion Week,
              le Festival de Cannes, le Grand Prix de Formule 1, et bien plus.
            </p>
          </div>
        </div>
        <div className="relative aspect-[1/0.8] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:to-transparent">
          <Image
            src={"/images/service_2.jpg"}
            alt="Passport Image"
            className="object-cover"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end gap-3 p-5 text-white">
            <h4 className="text-[1.3vw] capitalize leading-tight">
              Réservations de transport
            </h4>
            <p className="font-helvetica font-extralight leading-tight opacity-50">
              Billets de train et d&apos;avion avec accréditation IATA, pour des
              voyages individuels ou des privatisations.
            </p>
          </div>
        </div>
        <div className="relative aspect-[1/0.8] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:to-transparent">
          <Image
            src={"/images/service_3.png"}
            alt="Customer"
            className="object-cover"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end gap-3 p-5 text-white">
            <h4 className="text-[1.3vw] capitalize leading-tight">
              Suivi clientèle
            </h4>
            <p className="font-helvetica font-extralight leading-tight opacity-50">
              Service client dédié pour accompagner chaque étape du voyage.
            </p>
          </div>
        </div>
        <div className="relative aspect-[1/0.8] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:to-transparent">
          <Image
            src={"/images/service_4.png"}
            alt="Bar"
            className="object-cover"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end gap-3 p-5 text-white">
            <h4 className="text-[1.3vw] capitalize leading-tight">
              Hôtellerie et restauration
            </h4>
            <p className="font-helvetica font-extralight leading-tight opacity-50">
              Organisation d&apos;hébergements exclusifs et de services de
              restauration haut de gamme.
            </p>
          </div>
        </div>
        <div className="relative aspect-[1/0.8] before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:to-transparent">
          <Image
            src={"/images/service_5.png"}
            alt="Bar"
            className="object-cover"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-end gap-3 p-5 text-white">
            <h4 className="text-[1.3vw] capitalize leading-tight">
              Événementiel et conciergerie
            </h4>
            <p className="font-helvetica font-extralight leading-tight opacity-50">
              Planification et gestion d&apos;événements, avec un service de
              conciergerie pour répondre à toutes les demandes.
            </p>
          </div>
        </div>
      </div>
      <ScrollToContact />
    </div>
  );
};

export default Services;
