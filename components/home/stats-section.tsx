import { homeStats } from "@/lib/content/home-stats"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#D4AF37]/15 bg-[#0E2B1F] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#D4AF37]">
            Claire Beauty Craiova
          </p>
          <h2 className="font-serif text-3xl font-semibold text-[#FFF9F2] sm:text-4xl">
            De ce aleg clientele din Craiova{" "}
            <span className="text-gold-gradient">Claire Beauty?</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {homeStats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 80}>
              <div className="premium-stat-card group rounded-2xl border border-[#D4AF37]/20 bg-[#FFF9F2]/5 p-5 text-center backdrop-blur-sm transition-all duration-500 hover:border-[#D4AF37]/45 hover:bg-[#FFF9F2]/10 hover:shadow-[0_0_28px_rgba(212,175,55,0.12)] sm:p-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] transition-transform duration-500 group-hover:scale-105">
                  <stat.icon className="h-6 w-6" aria-hidden />
                </div>
                <p className="font-serif text-2xl font-semibold text-[#D4AF37] sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-[#FFF9F2]/85 sm:text-base">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
