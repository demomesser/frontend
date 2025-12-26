import { SelectedPage } from "../../shared/types";
import HomePagePicture from "../../assets/homepage.jpg"

import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    return (
        <section id={SelectedPage.HOME} className='relative w-screen min-h-screen overflow-hidden'>
            <motion.div className="flex w-full justify-center items-center mt-16" onViewportEnter={()=> setSelectedPage(SelectedPage.HOME)}>

                {/* Bakground */}
                <div className="absolute inset-0 bg-[#1E425E]" />

                {/* IMAGE */}
                <img
                    src={HomePagePicture}
                    alt="home-pageGraphic"
                    className="absolute inset-0 w-full h-full object-cover opacity-10"
                />
                {/* TEXT OVERLAY */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Et selskap som bidrar til det Grønne skiftet, med kunnskaps deling
                    </h1>
                </div>
            </motion.div>

        </section >
    )
}

export default Home
