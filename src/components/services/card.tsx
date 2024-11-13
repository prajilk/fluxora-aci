import { cn } from "@/utils/cn";
import Image from "next/image";

type CardProps = {
  src: string;
  alt: string;
  className: string;
  title: string;
  description: string;
};

const Card = ({ src, alt, className, title, description }: CardProps) => {
  return (
    <div
      className={cn(
        "relative h-full before:absolute before:inset-0 before:bg-gradient-to-t before:from-black before:to-transparent",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
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
        <h4 className="text-[5vw] capitalize leading-tight lg:text-[1.3vw]">
          {title}
        </h4>
        <p className="font-helvetica font-extralight leading-tight opacity-50">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
