import { SelectedPage } from "../../shared/types";

import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Services = ({ setSelectedPage }: Props) => {
    return (
        <section
            id={SelectedPage.SERVICES}
            className="relative w-screen min-h-screen overflow-hidden"
        >
            <motion.div
                className="relative flex flex-col w-full min-h-screen items-center justify-center text-center px-6"
                onViewportEnter={() => setSelectedPage(SelectedPage.SERVICES)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.2 }
                    }
                }}
            >
                {/* Background */}
                <div className="absolute inset-0 bg-[#1E425E] -z-10" />

                {/* Heading */}
                <motion.h1
                    className="mb-6 text-2xl font-bold text-primary-500"
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    Tjenester
                </motion.h1>

                {/* Intro text */}
                <motion.p
                    className="mb-12 text-sm max-w-3xl text-white"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                    }}
                >
                    Vi sørger for at relevante leverandører og publikum møtes på riktige
                    "arenaer" der man kan se, prøve og teste.
                </motion.p>

                {/* CARDS */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"
                >
                    {/* Card 1 */}
                    <motion.div
                        className="rounded-xl bg-white p-6 shadow-lg"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="mb-3 text-lg font-bold text-[#1E425E]">
                            Bærekraft
                        </h2>
                        <p className="text-sm text-gray-700">
                            Vi arrangerer messer med fokus på nullutslippsløsninger og
                            fremtidsrettet teknologi som bidrar til en mer bærekraftig
                            utvikling.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="rounded-xl bg-white p-6 shadow-lg"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="mb-3 text-lg font-bold text-[#1E425E]">
                            Kunnskapsdeling
                        </h2>
                        <p className="text-sm text-gray-700">
                            Våre arenaer legger til rette for erfaringsutveksling,
                            faglige samtaler og praktisk innsikt mellom leverandører
                            og publikum.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="rounded-xl bg-white p-6 shadow-lg"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="mb-3 text-lg font-bold text-[#1E425E]">
                            Innovasjon
                        </h2>
                        <p className="text-sm text-gray-700">
                            Vi gir rom for testing og demonstrasjon av nye løsninger
                            slik at markedet får reell innsikt i teknologiens
                            muligheter og kvalitet.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Services 
