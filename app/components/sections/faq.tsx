export default function FAQs() {
    return (
        <section className="py-16 md:py-32 bg-neutral-900 border-y border-y-neutral-800">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                    <h1 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
                        Regler for løpet
                    </h1>

                    <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                        <div className="pb-6">
                            <h3 className="font-medium">Hvordan fungerer det?</h3>
                            <p className="text-gray-400 mt-4">Løpets lengde er på en mile, som tilsvarer 1 609 meter. Dette vil tilsi 4 runder rundt idrettsbanen.</p>

                            <ol className="list-outside list-decimal space-y-2 pl-4">
                                <li className="text-gray-400 mt-4">Løpet starter med at hver deltager må chugge en 0,33 liter flaske med øl.</li>
                                <li className="text-gray-400 mt-4">For hver runde deltageren løper, så må det chugges en ny flaske med øl. Deltageren må åpne flasken selv. Det vil si at hver deltager må ha med en eller annen type flaskeåpner.</li>
                                <li className="text-gray-400 mt-4">Første deltager i mål etter 4 øl og 4 runder, er vinneren av løpet.</li>
                            </ol>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Er det krav til øl?</h3>
                            <p className="text-gray-400 mt-4">Hver deltager må kjøpe inn 4 glassflasker med 0,33 liter Dahls øl. Ingen annen drikke er tillatt.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Er det førstemann i mål som vinner?</h3>
                            <p className="text-gray-400 my-4">Ikke nødvendigvis. I utgangspunktet er det førstemann i mål som vinner. Derimot legges det til en strafferunde i slutten av løpet hvis man spyr. Merk at hvis man spyr på banen er man diskvalifisert.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
