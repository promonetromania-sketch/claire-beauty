"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { pricingFaqs } from "@/lib/content/pricing"

export function PricingFAQ() {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {pricingFaqs.map((faq, index) => (
        <AccordionItem
          key={faq.question}
          value={`pricing-faq-${index}`}
          className="rounded-2xl border border-[#0E2B1F]/8 bg-[#FFF9F2] px-5 shadow-premium"
        >
          <AccordionTrigger className="py-5 text-left font-serif text-base font-semibold text-[#0E2B1F] hover:text-[#B8962E] sm:text-lg [&[data-state=open]]:text-[#B8962E]">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-relaxed text-[#0E2B1F]/72 sm:text-base">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
