import { SelectedPage } from "../../shared/types";
import HomePagePicture from "../../assets/homepage.jpg"
import Logo from "../../assets/logo.png"

import ActionButton from "../../shared/ActionButton"

import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    return (
        <section id={SelectedPage.HOME} className='relative w-screen min-h-screen overflow-hidden px-6'>


            {/* IMAGE */}
            <img
                src={HomePagePicture}
                alt="home-pageGraphic"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Bakground */}
            <div className="
                absolute inset-0 z-0
                bg-gradient-to-br
                from-[#1E425E]/80
                via-[#256670]/95
                to-[#EDF4B8]/70
            " />

            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.HOME)}
                className="relative z-10 flex min-h-screen items-center justify-center px-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 1.2 }
                    }
                }}
            >
                {/* TEXT OVERLAY */}
                <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    variants={{
                        hidden: { opacity: 0, x: -90 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-100 h-auto"

                    />
                    <p className="mt-12 text-lg">
                        Et selskap som bidrar til det grønne skiftet, med kunnskaps deling
                    </p>
                    <div className="mt-16">
                        <ActionButton page={SelectedPage.ARRANGEMENT} setSelectedPage={setSelectedPage}>
                            Arrangementer
                        </ActionButton>
                    </div>

                </motion.div>

            </motion.div>

        </section >
    )
}

export default Home
