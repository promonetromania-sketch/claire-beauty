import { VisualGallery } from "@/components/shared/visual-gallery"
import { homepageGallery } from "@/lib/images/claire-beauty"

export function GallerySection() {
  return (
    <VisualGallery
      images={homepageGallery}
      eyebrow="Galerie"
      title="Claire Beauty în imagini"
      description="Tratamente reale, terapeută dedicată și atmosferă premium — tot ce definește salonul nostru din Craiova."
      className="bg-secondary/40"
      columns={3}
    />
  )
}
