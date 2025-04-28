import { HeroHeader } from '@/components/blocks/header'
import FooterSection from '@/components/sections/footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/faq')({
  component: RouteComponent,
})

const faqItems: {
  id: string;
  question: string;
  answer: string;
}[] = [
  {
      id: 'item-1',
      question: 'Hvor langt skal man løpe?',
      answer: 'Løpet er totalt 1,6 km langt, som tilsvarer 4 runder rundt idrettsbanen. Hver runde er 400 meter.',
  },
  {
      id: 'item-2',
      question: 'Er det noen spesifikke krav til ølen?',
      answer: 'Ja, hver deltager må bruke 4 flasker med 0,33 liter Dahls øl. Ingen annen drikke er tillatt.',
  },
  {
      id: 'item-3',
      question: 'Hva skjer hvis jeg spyr?',
      answer: 'Hvis du spyr, må du ta en strafferunde. En strafferunde er en runde på 400 meter. Hvis du spyr på banen, blir du diskvalifisert fra løpet.',
  },
  {
      id: 'item-4',
      question: 'Kan jeg få refusjon hvis jeg ikke er fornøyd med Foodora leveransen?',
      answer: 'Jeg vet ikke hvorfor dere fortsetter å spørre om dette. Det er ikke mulig å få refusjon for en Foodora leveranse. Hvis du har problemer med en bestilling, vennligst kontakt Foodora kundeservice direkte.',
  },
  {
      id: 'item-5',
      question: 'Hvordan lager man en bocadillo?',
      answer: 'En bocadillo er en spansk sandwich laget med crusty brød og fylt med en liste spesifikke ingredienser. Du fyller bocadilloen med smør, stekte tomater, serranoskinke og brie. Hvis du hører noen andre si noe annet, så er det feil. Det er ingen andre måter å lage en bocadillo på.',
  },
];

function RouteComponent() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden bg-background text-white min-h-screen px-4">
      <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Ofte stilte spørsmål</h2>
                    <p className="text-muted-foreground mt-4 text-balance">
                      Her finner du svar på de vanligste spørsmålene våre. Hvis du ikke finner det du leter etter, er du velkommen til å kontakte oss for ytterligere hjelp.
                    </p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1">
                        {faqItems.map((item) => (
                            <div
                                className="group"
                                key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                            </div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
      </main>

      <FooterSection />
    </>
  )
}
