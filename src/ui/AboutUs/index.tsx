import { SelectedPage } from "../../shared/types";

import AboutImg from "../../assets/image3.jpg"

import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const AboutUs = ({ setSelectedPage }: Props) => {
    return (
        <section
            id={SelectedPage.ABOUTUS}
            className="relative w-screen min-h-screen bg-white scroll-mt-24"
        >
            <motion.div
                className="relative mx-auto max-w-6xl px-6 pt-8"
                onViewportEnter={() => setSelectedPage(SelectedPage.ABOUTUS)}
            >
                {/* HEADER */}
                <h1 className="mb-8 text-center text-4xl font-bold text-[#1E425E]">
                    Om oss
                </h1>

                {/* COLORED BOX */}
                <div className="rounded-xl bg-[#1E425E] p-10 shadow-lg mb-6">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
                        
                        {/* LEFT — TEXT */}
                        <div className="text-white text-base leading-relaxed space-y-4">
                            <p>
                                Demomesser AS er et resultat av mangel på arenaer for testing og prøving.
                                Tradisjonelle messer gir som oftest publikum bare kjennskap og lite
                                kunnskap om produktets kvalitet og bruksområde.
                            </p>

                            <p>
                                Med søkelys på bærekraft, miljø og samfunnsansvar arrangerer vi kun
                                messer med nullutslippsutstyr og maskiner.
                            </p>

                            <p>
                                Vi som jobber i Demomesser har lang erfaring i arbeidslivet og har vært
                                med hele veien mot det grønne skiftet. Med kunnskap om konsekvenser og
                                muligheter gir vi både leverandører og publikum gode råd.
                            </p>
                        </div>

                        {/* RIGHT — IMAGE */}
                        <div className="flex justify-center">
                            <img
                                src={AboutImg}
                                alt="Om Demomesser"
                                className="max-h-80 w-full rounded-lg object-cover shadow-md"
                            />
                        </div>

                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default AboutUs
