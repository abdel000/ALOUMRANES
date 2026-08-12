import { SectionHeading } from "./SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/content/school";

/**
 * Visible Q&A content, kept in sync with the FAQPage JSON-LD emitted by the route
 * that renders this (Google requires schema answers to match on-page text).
 */
export function Faq() {
  return (
    <section className="border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHeading eyebrow="Questions fréquentes" title="Ce que les parents nous demandent." />
        <div className="mt-14 max-w-3xl">
          <Accordion type="single" collapsible>
            {FAQ.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`}>
                <AccordionTrigger className="text-base">{item.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
