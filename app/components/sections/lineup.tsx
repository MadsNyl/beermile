import { cn } from "@/lib/utils";
import { InfiniteSlider } from "../motion/infinite-slider";


const lineups: { image: string, name: string, className?: string }[] = [
    {
        image: 'mads.png',
        name: 'Mads Nylund',
    },
    {
        image: 'christian.png',
        name: 'Christian Ryssdal',
    },
    {
        image: 'jonas.png',
        name: 'Jonas Røisland',
    },
    {
        image: 'oliver.png',
        name: 'Oliver Sæther',
        className: 'object-cover',
    },
    {
        image: 'sina.png',
        name: 'Sina Kolnes',
        className: 'object-cover',
    },
    {
        image: 'olav.png',
        name: 'Olav Sanden',
        className: 'object-cover',
    },
    {
        image: 'mathias.png',
        name: 'Mathias Strøm',
        className: 'object-cover',
    },
    {
        image: 'atle.png',
        name: 'Atle Sund',
    }
];

export default function Lineup() {
    return (
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
                    {lineups.map((lineup, index) => (
                        <LineupItem
                            key={index}
                            {...lineup}
                        />
                    ))}
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
    );
};

interface  LineupItemProps {
    name: string;
    image: string;
    className?: string;
};

function LineupItem({
    name,
    image,
    className
}: LineupItemProps) {
    return (
        <div className="space-y-1 w-[300px] md:w-[400px]">
            <img
                src={`/image/${image}`}
                alt={name}
                className={cn('aspect-square w-full rounded-lg object-fit', className)}
            />
            <h1 className="text-balance text-xl md:text-2xl">
                {name}
            </h1>
        </div>
    );
};