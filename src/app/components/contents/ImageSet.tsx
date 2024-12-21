import Image, { StaticImageData } from "next/image";

type ImageSetType = {
    image: StaticImageData,
    alt: string,
    height: number,
    width: number
}
export default function ImageSet({ image, alt, height, width }: ImageSetType) {
    return (
        <div className="relative mt-8" style={{ aspectRatio: `${width}/${height}`, width: `min(${width}px , 95%)` }}>
            <Image src={image} alt={alt} fill className="object-cover object-top" placeholder="blur" />
        </div>

    )
}