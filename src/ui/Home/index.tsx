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

            {/* Bakground */}
            <div className="absolute inset-0 bg-[#1E425E]" />

            {/* IMAGE */}
            <img
                src={HomePagePicture}
                alt="home-pageGraphic"
                className="absolute inset-0 w-full h-full object-cover opacity-5"
            />

            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.HOME)}
                className="relative z-10 flex min-h-screen items-center justify-center px-6"
            >
                {/* TEXT OVERLAY */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="
                            w-100
                            h-auto
                        "
                    />
                    <p className="mt-12 text-lg">
                        Et selskap som bidrar til det grønne skiftet, med kunnskaps deling
                    </p>
                    <div className="mt-16">
                        <ActionButton page={SelectedPage.CONTACT} setSelectedPage={setSelectedPage}>
                            Arrangement
                        </ActionButton>
                    </div>

                </div>

            </motion.div>

        </section >
    )
}

export default Home
