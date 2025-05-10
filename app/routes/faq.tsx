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
      answer: 'Hvis du spyr, legges det til en strafferunde i slutten av løpet. Du kan bli tildelt maks én strafferunde En strafferunde er en runde på 400 meter. Hvis du spyr på banen, blir du diskvalifisert fra løpet.',
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
  {
    id: 'item-6',
    question: 'Drikker man eller spiser man flytende ting som suppe og yoghurt?',
    answer: 'Nei, flytende ting som suppe og yoghurt er ikke mat. Du kan ikke spise flytende ting. Du kan drikke dem hvis du vil, men du kan ikke spise dem. Det er ingen unntak fra denne regelen.',
  },
  {
    id: 'item-7',
    question: 'Når er neste gang det er Cræzy dæys på Rema 1000?',
    answer: 'Neste gang det er Cræzy dæys på Rema 1000 er 16. mai 2025. De selger Dahls øl på glassflaske.',
  },
  {
    id: 'item-8',
    question: 'Hvorfor er det så mange spørsmål om mat og drikke?',
    answer: 'Fordi vi er en mat- og drikkenettside. Det er derfor vi har så mange spørsmål om mat og drikke. Hvis du ikke liker det, kan du gå til en annen nettside.',
  },
  {
    id: 'item-9',
    question: 'Hvorfor bet Mike Tyson han bokseren i øret?',
    answer: 'Fordi han boksern ikke ville delta i Beerlund.',
  }
  
];

function RouteComponent() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden bg-background text-white min-h-screen">
      <section className="py-24">
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
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                                      <p className='text-start'>
                                        {item.question}
                                      </p>
                                    </AccordionTrigger>
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
