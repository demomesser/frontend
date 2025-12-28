import { SelectedPage } from "../../shared/types";

import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Services = ({ setSelectedPage }: Props) => {
    return (
        <section id={SelectedPage.SERVICES} className='relative w-screen min-h-screen overflow-hidden'>
            <motion.div
                className="relative flex flex-col w-full min-h-screen items-center justify-center text-center px-6"
                onViewportEnter={() => setSelectedPage(SelectedPage.SERVICES)}
            >
                {/* Bakground */}
                <div className="absolute inset-0 bg-[#1E425E] -z-10" />

                {/* TEXT OVERLAY */}
                <h1 className="mb-6 text-2xl font-bold text-primary-500">
                    Tjenester
                </h1>
                <p className='text-sm max-w-3xl'>
                    Vi sørger for at relevante leverandører og publikum møtes på riktige  "arenaer" der man kan se, prøve og teste. Vi sørger for bevertning og  tilrettelegging.
                </p>
            </motion.div>
        </section>
    )
}

export default Services 
