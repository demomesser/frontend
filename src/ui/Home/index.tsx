import { SelectedPage } from "../../shared/types";
import HomePagePicture from "../../assets/homepage.jpeg"
import Logo from "../../assets/logo.png"

import ActionButton from "../../shared/ActionButton"

import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    return (
        <section id={SelectedPage.HOME} className='relative w-screen min-h-screen overflow-hidden px-6'>

            {/* BACKGROUND IMAGE */}
            <img
                src={HomePagePicture}
                alt="home background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/10 z-10" />
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.HOME)}
                className="relative z-10 flex min-h-screen items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div
                    className="
                      flex flex-col items-center justify-center
                      rounded-2xl
                      bg-[#1E425E]
                      px-14 py-16
                      shadow-2xl
                      max-w-3xl
                      text-center
                    "
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-96 drop-shadow-2xl"
                    />

                    <p className="mt-12 text-lg text-white drop-shadow-md">
                        Et selskap som bidrar til det grønne skiftet, med kunnskapsdeling
                    </p>

                    <div className="mt-16">
                        <ActionButton
                            page={SelectedPage.ARRANGEMENT}
                            setSelectedPage={setSelectedPage}
                        >
                            Arrangementer
                        </ActionButton>
                    </div>
                </motion.div>
            </motion.div>

        </section >
    )
}

export default Home
