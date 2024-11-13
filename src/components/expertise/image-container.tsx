import Image from "next/image";

type ImageContainerProps = {
  src: string;
  alt: string;
};

const ImageContainer = ({ src, alt }: ImageContainerProps) => {
  return (
    <div className="aspect-square w-full overflow-hidden lg:aspect-video">
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
    </div>
  );
};

export default ImageContainer;
