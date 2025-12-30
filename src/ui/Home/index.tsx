import { SelectedPage } from "../../shared/types";
import HomePagePicture from "../../assets/homepage.jpg"
import Logo from "../../assets/logo.png"

import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    return (
        <section id={SelectedPage.HOME} className='relative w-screen min-h-screen overflow-hidden'>
            <motion.div className="flex w-full justify-center items-center mt-16" onViewportEnter={() => setSelectedPage(SelectedPage.HOME)}>

                {/* Bakground */}
                <div className="absolute inset-0 bg-[#1E425E]" />

                {/* IMAGE */}
                <img
                    src={HomePagePicture}
                    alt="home-pageGraphic"
                    className="absolute inset-0 w-full h-full object-cover opacity-10"
                />

                {/* TEXT OVERLAY */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="
                            w-72 
                            md:w-96 
                            lg:w-[28rem] 
                            h-auto 
                            mb-10
                        "
                    />
                    <h1 className="max-w-4xl text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Et selskap som bidrar til det Grønne skiftet, med kunnskaps deling
                    </h1>
                </div>
            </motion.div>

        </section >
    )
}

export default Home
