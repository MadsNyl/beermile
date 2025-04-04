import { AnimatedGroup } from '../motion/animated-group'
import { TextEffect } from '../motion/text-effect'
import CountdownClock from '../ui/clock'
import { InfiniteSlider } from '../motion/infinite-slider'
import FAQs from '../sections/faq'
import Location from '../sections/location'
import FooterSection from '../sections/footer'
import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <div className="absolute z-20 flex w-full justify-between items-center md:p-3">
                <Link to="/">
                    <img
                        src="/image/logo.png"
                        alt="Logo"
                        className="h-16 w-16 rounded-full"
                    />
                </Link>
            </div>
            <main className="overflow-hidden bg-neutral-950 text-white">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <div className="mx-auto max-w-7xl px-6">
                            <AnimatedGroup variants={transitionVariants}>
                                <Link
                                    to="/treningsplan"
                                    className="bg-zinc-800 hover:bg-neutral-950 group mx-auto flex w-fit items-center gap-4 rounded-full border border-zinc-800 p-1 pl-4 shadow-md transition-colors duration-300 border-t-zinc-700 shadow-zinc-950 hover:border-zinc-700">
                                    <span className="text-white text-sm">Se vårt anbefalte treningsopplegg</span>
                                    <span className="border-zinc-700 block h-4 w-0.5 border-l border-l-zinc-700 bg-zinc-700"></span>

                                    <div className="bg-neutral-950 group-hover:bg-zinc-800 size-6 overflow-hidden rounded-full duration-500">
                                        <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                            <span className="flex size-6">
                                                <ArrowRight className="m-auto size-3" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedGroup>

                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">

                                <div className="space-y-12">
                                    <div className="space-y-4">
                                        <TextEffect
                                            preset="fade-in-blur"
                                            speedSegment={0.3}
                                            as="h1"
                                            className="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                            Nylund Le Beermile
                                        </TextEffect>
                                        <TextEffect
                                            preset="fade-in-blur"
                                            speedSegment={0.3}
                                            as="h2"
                                            className="text-balance text-xl font-normal text-gray-400 md:text-3xl lg:text-4xl"
                                        >
                                            Det ultimate løpet for alle som elsker å løpe og drikke øl
                                        </TextEffect>
                                    </div>
            
                                    <AnimatedGroup
                                        variants={{
                                            container: {
                                                visible: {
                                                    transition: {
                                                        staggerChildren: 0.05,
                                                        delayChildren: 0.75,
                                                    },
                                                },
                                            },
                                            ...transitionVariants,
                                        }}
                                    >
                                        <CountdownClock targetDate={new Date('2025-05-16T12:00:00')} />
                                    </AnimatedGroup>

                                    <TextEffect
                                        preset="fade-in-blur"
                                        speedSegment={0.3}
                                        as="p"
                                        className="text-balance text-xl font-normal text-gray-400 md:text-3xl lg:text-4xl"
                                    >
                                        Fredag 16. mai 2025
                                    </TextEffect>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-neutral-900 border-y border-y-neutral-800 py-16 md:py-32 mt-24">
                    <div className="mx-auto max-w-6xl space-y-8  md:space-y-16">
                        <h1 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl px-6">
                            Årets lineup
                        </h1>

                        <InfiniteSlider
                            className="pb-12"
                            speedOnHover={20}
                            gap={44}
                        >

                            <div className="space-y-1 w-[300px] md:w-[400px]">
                                <img
                                    src="/image/mads.png"
                                    alt='Mads'
                                    className='aspect-square w-full rounded-lg object-fit'
                                />
                                <h1 className="text-balance text-xl md:text-2xl">
                                    Mads Nylund
                                </h1>
                            </div>

                            <div className="space-y-1 w-[300px] md:w-[400px]">
                                <img
                                    src="/image/christian.png"
                                    alt='Christian'
                                    className='aspect-square w-full rounded-lg object-fit'
                                />
                                <h1 className="text-balance text-xl md:text-2xl">
                                    Christian Ryssdal
                                </h1>
                            </div>

                            <div className="space-y-1 w-[300px] md:w-[400px]">
                                <img
                                    src="/image/jonas.png"
                                    alt='Jonas'
                                    className='aspect-square w-full rounded-lg object-fit'
                                />
                                <h1 className="text-balance text-xl md:text-2xl">
                                    Jonas Røisland
                                </h1>
                            </div>

                            <div className="space-y-1 w-[300px] md:w-[400px]">
                                <img
                                    src="/image/oliver.png"
                                    alt='Oliver'
                                    className='aspect-square w-full rounded-lg object-cover'
                                />
                                <h1 className="text-balance text-xl md:text-2xl">
                                    Oliver Sæther
                                </h1>
                            </div>
                        </InfiniteSlider>
                    </div>

                    <div className="space-y-2 px-6 mx-auto max-w-6xl">
                        <h1 className="text-2xl font-medium">
                            Ønsker du å delta?
                        </h1>
                        <p>
                            Ta kontakt med Mads Nylund for mer informasjon.
                        </p>
                    </div>
                </section>

                <Location />

                <FAQs />

                <FooterSection />
            </main>
        </>
    )
}
