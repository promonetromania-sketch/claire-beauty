import Image from "next/image"
import { cn } from "@/lib/utils"
import type { ClaireImageMeta } from "@/lib/images/claire-beauty"

type ClaireImageProps = ClaireImageMeta & {
  fill?: boolean
  width?: number
  height?: number
  className?: string
  containerClassName?: string
  priority?: boolean
  sizes?: string
}

export function ClaireImage({
  src,
  alt,
  title,
  objectPosition = "center",
  fill,
  width,
  height,
  className,
  containerClassName,
  priority = false,
  sizes,
}: ClaireImageProps) {
  const imageClassName = cn("object-cover", className)
  const style = { objectPosition }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        title={title}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={imageClassName}
        style={style}
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={width ?? 800}
      height={height ?? 600}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      className={cn(imageClassName, containerClassName)}
      style={style}
      sizes={sizes}
    />
  )
}
