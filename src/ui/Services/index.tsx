import { SelectedPage } from "../../shared/types";

import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Services = ({ setSelectedPage }: Props) => {
    return (
        <section id={SelectedPage.SERVICES} className='relative w-screen min-h-screen overflow-hidden'>
            <motion.div className="flex w-full justify-center items-center mt-16" onViewportEnter={() => setSelectedPage(SelectedPage.ABOUTUS)}>
                {/* Bakground */}
                <div className="absolute inset-0 bg-[#1E425E]" />
                {/* TEXT OVERLAY */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className='text-sm px-64'>
                        Vi sørger for at relevante leverandører og publikum møtes på riktige  "arenaer" der man kan se, prøve og teste. Vi sørger for bevertning og  tilrettelegging.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}

export default Services 
