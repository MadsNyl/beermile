import { HeroHeader } from '@/components/blocks/header';
import FooterSection from '@/components/sections/footer';
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/treningsplan')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
          <HeroHeader />
          <main className="overflow-hidden bg-neutral-950 text-white min-h-screen px-4">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>

                <div className="space-y-12 pb-12 pt-28">
                  <section className="max-w-4xl w-full mx-auto">
                    <img
                      src="/image/training.png"
                      alt="Treningsplan"
                      className="aspect-video rounded-xl"
                    />
                  </section>

                  <section className="w-full max-w-4xl mx-auto space-y-8">
                    <div className="space-y-4">
                      <h1 className="relative z-10 max-w-xl font-semibold text-2xl">
                        Treningsplan for Beerlund
                      </h1>

                      <p className="text-gray-200">
                        Ved hjelp av en ekspert på området, har jeg fått utarbeidet en optimal treningsplan for å forberede meg til Beerlund. Treningsplanen er delt opp i 6 uker. Det er viktig å følge planen nøye for å oppnå best mulig resultat.
                      </p>

                      <p>
                        Hver uke er delt inn i 3 til 4 treningsøkter. Det er også viktig å huske på å restituere kroppen godt mellom øktene, og tilpasse intensiteten etter ditt utholdenhetsnivå. Det er også viktig å spise sunt og drikke nok vann i løpet av treningsperioden.
                      </p>
                    </div>
                    
                    <section>
                      <h2 className="text-2xl font-semibold mb-4">Uke 1</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-semibold">Økt 1 – Intervaller:</span>
                          <ul className="list-disc pl-5 text-gray-200">
                            <li>Oppvarming: 10 min rolig jogg med dynamiske øvelser.</li>
                            <li>Hoveddel: 4 × 400 meter i raskt tempo med ca. 90 sek pause (rolig gange eller lett jogg).</li>
                            <li>Nedtrapping: 5–10 min lett jogg og uttøyning.</li>
                          </ul>
                        </li>
                        <li><span className="font-semibold">Økt 2 – Rolig Langtur:</span> 30 min i komfortabelt tempo.</li>
                        <li>
                          <span className="font-semibold">Økt 3 – Tempoøkt:</span>
                          <ul className="list-disc pl-5 text-gray-200">
                            <li>Oppvarming: 10 min lett jogg.</li>
                            <li>Hoveddel: 15 min i tempo litt raskere enn konkurransefart.</li>
                            <li>Nedtrapping: 5–10 min lett jogg og uttøyning.</li>
                          </ul>
                        </li>
                        <li className="text-gray-200">
                          <span className="font-semibold text-white">Valgfritt – Økt 4:</span> Lett løpetur (40 min) eller styrke-/funksjonstrening.
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-semibold mb-4">Uke 2</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-semibold">Økt 1 – Intervaller:</span>
                          <ul className="list-disc pl-5 text-gray-200">
                            <li>Oppvarming: 10 min.</li>
                            <li>Hoveddel: Velg 4 × 400 meter eller 3 × 600 meter med 1–1,5 min pause mellom hver.</li>
                            <li>Nedtrapping: 10 min lett jogg.</li>
                          </ul>
                        </li>
                        <li><span className="font-semibold">Økt 2 – Rolig Langtur:</span> 35 min i rolig tempo.</li>
                        <li>
                          <span className="font-semibold">Økt 3 – Tempoøkt:</span>
                          <ul className="list-disc pl-5 text-gray-200">
                            <li>Oppvarming: 10 min.</li>
                            <li>Hoveddel: 18 min i jevnt, utfordrende tempo.</li>
                            <li>Nedtrapping: 5–10 min lett jogg.</li>
                          </ul>
                        </li>
                        <li className="text-gray-200">
                          <span className="font-semibold text-white">Valgfritt – Økt 4:</span> Lett sykkeløkt, svømming eller 30 min rolig jogg.
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-semibold mb-4">Uke 3</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-semibold">Økt 1 – Intervaller:</span>
                          <ul className="list-disc pl-5 text-gray-200">
                            <li>Oppvarming: 10 min.</li>
                            <li>Hoveddel: 5 × 400 meter med ca. 1 min pause mellom hver.</li>
                            <li>Nedtrapping: 10 min lett jogg.</li>
                          </ul>
                        </li>
                        <li><span className="font-semibold">Økt 2 – Rolig Langtur:</span> 35–40 min i rolig tempo.</li>
                        <li>
                          <span className="font-semibold">Økt 3 – Tempoøkt:</span>
                          <ul className="list-disc pl-5 text-gray-200">
                            <li>Oppvarming: 10 min.</li>
                            <li>Hoveddel: 20 min i et tempo som utfordrer, men med fokus på teknikk.</li>
                            <li>Nedtrapping: 10 min.</li>
                          </ul>
                        </li>
                        <li className="text-gray-200">
                          <span className="font-semibold text-white">Valgfritt – Økt 4:</span> Lett langtur (45 min) eller styrkeøkt.
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-semibold mb-4">Uke 4</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-semibold">Økt 1 – Intervaller:</span>
                          <ul className="list-disc pl-5 text-gray-200">
                            <li>Oppvarming: 10 min.</li>
                            <li>Hoveddel: 3 × 600 meter i raskt tempo med 1–1,5 min pause mellom hver.</li>
                            <li>Nedtrapping: 10 min lett jogg.</li>
                          </ul>
                        </li>
                        <li><span className="font-semibold">Økt 2 – Rolig Langtur:</span> 40 min i rolig tempo.</li>
                        <li>
                          <span className="font-semibold">Økt 3 – Tempoøkt:</span>
                          <ul className="list-disc pl-5 text-gray-200">
                            <li>Oppvarming: 10 min.</li>
                            <li>Hoveddel: 22 min i konkurransefart – 10–15 sek raskere per km enn beermile-fart.</li>
                            <li>Nedtrapping: 10 min.</li>
                          </ul>
                        </li>
                        <li className="text-gray-200">
                          <span className="font-semibold text-white">Valgfritt - Økt 4:</span> Rask jogg eller alternativ kondisitetrening (30-40 min).
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-semibold mb-4">Uke 5</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-semibold">Økt 1 – Intervaller:</span>
                          <ul className="list-disc pl-5">
                            <li>Oppvarming: 10 min.</li>
                            <li>Hoveddel: 2 × 600 meter etterfulgt av 2 × 400 meter med 1–1,5 min pause.</li>
                            <li>Nedtrapping: 10 min.</li>
                          </ul>
                        </li>
                        <li><span className="font-semibold">Økt 2 – Rolig Langtur:</span> 40 min med fokus på avslappet teknikk.</li>
                        <li>
                          <span className="font-semibold">Økt 3 – Tempoøkt:</span>
                          <ul className="list-disc pl-5">
                            <li>Oppvarming: 10 min.</li>
                            <li>Hoveddel: 25 min i jevnt og utfordrende tempo.</li>
                            <li>Nedtrapping: 10 min.</li>
                          </ul>
                        </li>
                        <li className="text-gray-200">
                          <span className="font-semibold text-white">Valgfritt – Økt 4:</span> Lett økt (40–45 min rolig jogg) eller styrkeøkt.
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-semibold mb-4">Uke 6 – Nedtrappingsuke</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <span className="font-semibold">Økt 1 – Lett Intervall:</span>
                          <ul className="list-disc pl-5 text-gray-200">
                            <li>Oppvarming: 10 min.</li>
                            <li>Hoveddel: 3 × 400 meter i raskt tempo med ca. 90 sek pause.</li>
                            <li>Nedtrapping: 10 min lett jogg.</li>
                          </ul>
                        </li>
                        <li><span className="font-semibold">Økt 2 – Rolig Korttur:</span> 30 min lett jogg.</li>
                        <li>
                          <span className="font-semibold">Økt 3 – Konkurranseforberedende Tempo:</span>
                          <ul className="list-disc pl-5 text-gray-200">
                            <li>Oppvarming: 10 min.</li>
                            <li>Hoveddel: 10–12 min med 1600 meter simulering.</li>
                            <li>Nedtrapping: 10 min.</li>
                          </ul>
                        </li>
                        <li className="text-gray-200">
                          <span className="font-semibold text-white">Valgfritt – Økt 4:</span> Veldig lett restitusjonsøkt (20 min) ved behov.
                        </li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="text-2xl font-semibold mb-4">Generelle Tips</h2>
                      <ul className="list-disc pl-5 space-y-2 text-gray-200">
                        <li>Alltid start med dynamisk oppvarming og avslutt med nedtrapping.</li>
                        <li>Sørg for minst én hviledag mellom harde økter.</li>
                        <li>Integrer styrke- og mobilitetsøvelser 2–3 ganger per uke.</li>
                        <li>Bruk valgfrie økter for variasjon og aktiv restitusjon.</li>
                        <li>Reduser treningsmengden i uke 6 for optimal restitusjon før konkurranse.</li>
                      </ul>
                    </section>
                  </section>
                </div>

                <FooterSection />
            </main>
        </>
  );
}
