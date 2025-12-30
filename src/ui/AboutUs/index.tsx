import { SelectedPage } from "../../shared/types";

import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const AboutUs = ({ setSelectedPage }: Props) => {
    return (
        <section id={SelectedPage.ABOUTUS} className='relative w-screen min-h-screen overflow-hidden'>
            <motion.div className="flex w-full justify-center items-center mt-16" onViewportEnter={() => setSelectedPage(SelectedPage.ABOUTUS)}>
                <div className="absolute inset-0 bg-[#256670]" />
                {/* TEXT OVERLAY */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="mb-6 text-2xl font-bold text-primary-500">
                        Om oss
                    </h1>
                    <p className='text-sm mb-4 px-64'>
                        Demomesser as er et resultat av mangel på arenaer for testing og prøving!
                        Tradisjonelle messer gir som oftest publikum bare kjennskap og lite kunnskap om
                        produktets kvalitet og bruks område. Med søkelys på bærekraft, miljø og et
                        samfunnsansvar arrangerer vi kun messer med null utslipps utstyr og maskiner.
                    </p>

                    <p className="text-sm px-64">
                        Vi som jobber i demomesser, har lang erfaring i arbeidslivet og har vært med hele
                        veien mot det Grønne skiftet fra dag 1. Med kunnskap om konsekvenser og
                        muligheter er vi i stand til å gi leverandører og publikum gode råd om hvordan man
                        skal formidle «budskapet»!
                    </p>
                </div>
            </motion.div>
        </section>
    )
}

export default AboutUs
