import Image from "next/image";
import type { SiteImage } from "@/lib/images";

/** Immagine reale con dimensioni esplicite, angoli 4px e filo di separatore. */
export default function Shot({
  image,
  className = "",
  priority = false,
  sizes,
}: {
  image: SiteImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={image.src}
      width={image.width}
      height={image.height}
      alt={image.alt}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      sizes={sizes}
      className={`media h-auto w-full ${className}`}
    />
  );
}
