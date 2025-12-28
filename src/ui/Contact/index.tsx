import { SelectedPage } from "../../shared/types";

import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ({ setSelectedPage }: Props) => {
    const inputStyle = "rounded-md px-4 py-2 bg-white text-black"
    const buttonStyle = "rounded-md bg-[#EDFA8B] px-6 py-2 font-bold text-[#407053] hover:bg-primary-600 transition"

    return (
        <section
            id={SelectedPage.CONTACT}
            className="relative w-screen min-h-screen overflow-hidden scroll-mt-24"
        >
            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-[#256670] z-0" />

            <motion.div
                className="relative z-10 flex w-full min-h-screen items-center justify-center"
                onViewportEnter={() => setSelectedPage(SelectedPage.CONTACT)}
            >
                <motion.div className="w-full max-w-md px-6">
                    <h1 className="mb-6 text-2xl font-bold text-primary-500">
                        Kontakt oss
                    </h1>

                    <form method="POST" className="flex flex-col gap-5" action="https://formsubmit.co/erik.munkelien@demomesser.no">
                        <input
                            type="text"
                            name="name"
                            placeholder="Navn"
                            required
                            className={inputStyle}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="E-post"
                            required
                            className={inputStyle}
                        />

                        <textarea
                            name="message"
                            placeholder="Melding"
                            rows={5}
                            required
                            className={inputStyle}
                        />

                        <button
                            type="submit"
                            className={buttonStyle}
                        >
                            Send melding
                        </button>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    );
};



export default Contact
