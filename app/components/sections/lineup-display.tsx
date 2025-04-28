import { Link } from "@tanstack/react-router"

const members: {
    name: string;
    avatar: string;
    role: string;
    link?: string;
}[] = [
    {
        name: "Mads Nylund",
        avatar: "/image/mads.png",
        role: "Digital Forretningsutvikling",
    },
    {
        name: "Christian Ryssdal",
        avatar: "/image/christian.png",
        role: "MKI",
    },
    {
        name: "Simon Kvalheim",
        avatar: "/image/simon.png",
        role: "Digital Forretningsutvikling",
    },
    {
        name: "Oliver Sæther",
        avatar: "/image/oliver.png",
        role: "Ryde",
    },
    {
        name: "Sina Kolnes",
        avatar: "/image/sina.png",
        role: "Økonomi og administrasjon",
    },
    {
        name: "Olav Sanden",
        avatar: "/image/olav.png",
        role: "Ingeniør i ett eller annet",
    },
    {
        name: "Mathias Strøm",
        avatar: "/image/mathias.png",
        role: "Digital Forretningsutvikling",
    },
    {
        name: "Frida Kroken",
        avatar: "/image/frida.png",
        role: "Digital Forretningsutvikling",
    },
    {
        name: "Atle Sund",
        avatar: "/image/atle.png",
        role: "Ingeniør i ett eller annet",
    },
    {
        name: "Jenni Walaunet",
        avatar: "/image/jenni.png",
        role: "Medisin",
    },
    {
        name: "Sander Sundbye",
        avatar: "/image/sander.png",
        role: "Digital Forretningsutvikling",
    },
    {
        name: "Trym Gudvangen",
        avatar: "/image/trym.png",
        role: "Datateknologi",
    },
    {
        name: "Caroline Floen",
        avatar: "/image/carro.png",
        role: "Marin teknikk"
    },
    {
        name: "Benedikte Meyer",
        avatar: "/image/benedikte.png",
        role: "Økonomi og administrasjon"
    },
    {
        name: "Kasper Sandø",
        avatar: "/image/kasper.png",
        role: "Digital Forretningsutvikling"
    },
    {
        name: "Erle Røkke",
        avatar: "/image/erle.png",
        role: "Digital Forretningsutvikling"
    }
];

const teamMembers: {
    name: string;
    avatar: string;
    role: string;
    link?: string;
}[] = [
    {
        name: "Jonas Røisland",
        avatar: "/image/jonas.png",
        role: "MKI",
    }
];

export default function LineupSection() {
    return (
        <section className="bg-neutral-900 border-y border-y-neutral-800 py-16 md:py-32 mt-24 space-y-24">
                <div className="mx-auto max-w-6xl border-t px-6">
                    <span className="text-caption -ml-6 -mt-3.5 block w-max px-6 bg-neutral-900">Lineup</span>
                    <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                        <div className="sm:w-2/5">
                            <h2 className="text-3xl font-bold sm:text-4xl">Årets Deltagere</h2>
                        </div>
                        <div className="mt-6 sm:mt-0 space-y-2">
                            <h1 className="text-2xl font-medium">
                                Ønsker du å delta?
                            </h1>
                            <p>
                                Ta kontakt med Mads Nylund for mer informasjon.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-24">
                        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                            {members.map((member, index) => (
                                <div key={index} className="group overflow-hidden">
                                    <img className="h-96 w-full rounded-md object-cover object-top transition-all duration-500 group-hover:h-[22.5rem] group-hover:rounded-xl" src={member.avatar} alt="team member" width="826" height="1239" />
                                    <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                        <div className="flex justify-between">
                                            <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                            <span className="text-xs">_0{index + 1}</span>
                                        </div>
                                        <div className="mt-1 flex items-center justify-between">
                                            <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                            {member.link && (
                                                <Link
                                                    to={member.link} 
                                                    className=" group-hover:text-primary-600 group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                                                >
                                                    Se mer
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-6xl border-t px-6">
                    <span className="text-caption -ml-6 -mt-3.5 block w-max px-6 bg-neutral-900">Team</span>
                    <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                        <div className="sm:w-2/5">
                            <h2 className="text-3xl font-bold sm:text-4xl">Årets Dommere</h2>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-24">
                        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="group overflow-hidden">
                                    <img className="h-96 w-full rounded-md object-cover object-top transition-all duration-500 group-hover:h-[22.5rem] group-hover:rounded-xl" src={member.avatar} alt="team member" width="826" height="1239" />
                                    <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                        <div className="flex justify-between">
                                            <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                            <span className="text-xs">_0{index + 1}</span>
                                        </div>
                                        <div className="mt-1 flex items-center justify-between">
                                            <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                            {member.link && (
                                                <Link
                                                    to={member.link} 
                                                    className=" group-hover:text-primary-600 group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                                                >
                                                    Se mer
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </section>
    )
}