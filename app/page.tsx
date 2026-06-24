import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/layout/whatsapp-button"
import { MobileCTA } from "@/components/layout/mobile-cta"
import { StatsSection } from "@/components/home/stats-section"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { BenefitsSection } from "@/components/home/benefits-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { AboutSection } from "@/components/home/about-section"
import { FAQSection } from "@/components/home/faq-section"
import { BlogPreviewSection } from "@/components/home/blog-preview-section"
import { CTASection } from "@/components/home/cta-section"
import { LocalSEOSection } from "@/components/home/local-seo-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <BenefitsSection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <BlogPreviewSection />
        <CTASection />
        <LocalSEOSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  )
}
