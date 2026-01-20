import { SelectedPage } from "../../shared/types"
import { motion } from "framer-motion"
import DirectorImg from "../../assets/director.jpeg"
import Empl3Img from "../../assets/employee3.jpg"
import ContactCard from "./contactCard"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Contact = ({ setSelectedPage }: Props) => {
    const inputStyle = "rounded-md px-4 py-2 bg-white text-black"
    const buttonStyle =
        "rounded-md bg-[#EDFA8B] px-6 py-2 font-bold text-[#407053] hover:bg-primary-600 transition"

    return (
        <section
            id={SelectedPage.CONTACT}
            className="relative w-screen min-h-screen overflow-hidden"
        >
            {/* Background */}
            <motion.div
                className="absolute inset-0 bg-[#1E425E]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            />



            <motion.div
                className="relative z-10 flex flex-col items-center px-8 pt-32 md:px-6 md:pt-32"
                onViewportEnter={() => setSelectedPage(SelectedPage.CONTACT)}
            >
                <h1 className="mb-12 text-4xl font-bold text-primary-500">
                    Kontakt oss
                </h1>

                <motion.div
                    className="grid w-full max-w-5xl grid-cols-1 gap-12 items-stretch md:grid-cols-3 md:-translate-x-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                >

                    {/* LEFT — FORM */}
                    <motion.div
                        className="md:col-span-2 h-full"
                        variants={{
                            hidden: { opacity: 0, x: -40 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >


                        <form
                            method="POST"
                            action="https://formsubmit.co/erik.munkelien@demomesser.no"
                            className="flex h-full flex-col gap-5"
                        >
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

                            <button type="submit" className={buttonStyle}>
                                Send melding
                            </button>
                        </form>
                    </motion.div>

                    {/* RIGHT — CEO CARD */}
                    <motion.div
                        className="md:col-span-1 flex flex-col md:flex-row gap-6 items-center mt-4"
                        variants={{
                            hidden: { opacity: 0, x: 40 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <ContactCard
                            image={DirectorImg}
                            name="Erik Munkelien"
                            role="Tenker bærekraft"
                            email="erik.munkelien@demomesser.no"
                            phone="+47 484 00 789"
                        />
                        <ContactCard
                            image={Empl3Img}
                            name="Vinjar Berland"
                            role="IT"
                            email="vinjar.berland@demomesser.no"
                            phone="+47 476 46 919"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Contact
