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
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className='text-sm px-64'>
                        Demomesser as er et resultat av mangel på arenaer for testing og  prøving! Tradisjonelle messer gir som oftest publikum bare kjennskap og  lite kunnskap om produktets kvalitet og bruks område. Vi arrangerer kun  messer med null utslipp utstyr/maskiner.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}

export default AboutUs
