import { VisualGallery } from "@/components/shared/visual-gallery"
import { homepageGallery } from "@/lib/images/claire-beauty"

export function GallerySection() {
  return (
    <VisualGallery
      images={homepageGallery}
      eyebrow="Galerie"
      title="Claire Beauty în imagini"
      description="O selecție din atmosfera salonului și tratamentele noastre — autentic, elegant, premium."
      className="bg-secondary/30"
      columns={4}
      hideFromIndexOnMobile={4}
      ctaHref="/contact"
      ctaLabel="Vezi galeria completă"
    />
  )
}
