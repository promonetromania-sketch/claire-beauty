import type { LegalSection } from "@/lib/legal/documents"

export function LegalDocument({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-28">
          <h2 className="mb-4 font-serif text-2xl font-semibold text-[#0E2B1F]">
            {section.title}
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            {section.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {section.list ? (
              <ul className="list-disc space-y-2 pl-6">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ))}
    </div>
  )
}
