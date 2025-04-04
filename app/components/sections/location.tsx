import { Clock, MapPin } from 'lucide-react'

export default function Location() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Hvor skjer det?</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative space-y-4">
                        <p className="text-gray-400">
                            Løpet vil finne sted på <span className="text-gray-300 font-bold">Øya stadion</span> — klokken 12:00 fredag 16. mai 2025.
                        </p>
                        <p className="text-gray-400">Løpet starter presist 12:00, så pass på å være ute i god tid.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Clock className="size-4" />
                                    <h3 className="text-sm font-medium">Tidspunkt</h3>
                                </div>
                                <p className="text-gray-400 text-sm">12:00</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <MapPin className="size-4" />
                                    <h3 className="text-sm font-medium">Adresse</h3>
                                </div>
                                <p className="text-gray-400 text-sm">Klostergata 86, 7030 Trondheim</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0">
                        <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl to-transparent p-px from-zinc-700">
                            <img
                                src="/image/location.png"
                                alt="Øya idrettsbane"
                                className="aspect-67/34 rounded-2xl object-cover object-center"
                                width={800}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
