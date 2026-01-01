import { SelectedPage } from "../../shared/types"
import { motion } from "framer-motion"
import DirectorImg from "../../assets/director.jpeg"
import Empl from "../../assets/employee2.jpeg"

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
            className="relative w-screen min-h-screen overflow-hidden scroll-mt-24"
        >
            {/* Background */}
            <motion.div
                className="absolute inset-0 bg-[#256670]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            />

            <motion.div
                className="relative z-10 flex min-h-screen items-center justify-center px-6"
                onViewportEnter={() => setSelectedPage(SelectedPage.CONTACT)}
            >
                <motion.div
                    className="grid w-full max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 items-center"
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
                        variants={{
                            hidden: { opacity: 0, x: -40 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <h1 className="mb-6 text-2xl font-bold text-primary-500">
                            Kontakt oss
                        </h1>

                        <form
                            method="POST"
                            action="https://formsubmit.co/erik.munkelien@demomesser.no"
                            className="flex flex-col gap-5"
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
                        className="flex gap-4 justify-center"
                        variants={{
                            hidden: { opacity: 0, x: 40 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <motion.div
                            className="rounded-xl bg-white p-6 text-center shadow-lg max-w-sm"
                            whileHover={{ scale: 1.03 }}
                        >
                            {/* Image */}
                            <motion.div
                                className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-[#EDFA8B]"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 120 }}
                            >
                                <img
                                    src={DirectorImg}
                                    alt="CEO"
                                    className="h-full w-full object-cover"
                                />
                            </motion.div>

                            {/* Info */}
                            <h2 className="text-lg font-bold text-[#256670]">
                                Erik Munkelien
                            </h2>
                            <p className="text-sm text-gray-600">
                                Tenker bærekraft
                            </p>

                            <div className="mt-4 text-sm text-gray-700">
                                <p>erik.munkelien@demomesser.no</p>
                                <p>+47 484 00 789</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="rounded-xl bg-white p-6 text-center shadow-lg max-w-sm"
                            whileHover={{ scale: 1.03 }}
                        >
                            {/* Image */}
                            <motion.div
                                className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-[#EDFA8B]"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 120 }}
                            >
                                <img
                                    src={Empl}
                                    alt="employee"
                                    className="h-full w-full object-cover"
                                />
                            </motion.div>

                            {/* Info */}
                            <h2 className="text-lg font-bold text-[#256670]">
                                Rune I. Johannesen
                            </h2>
                            <p className="text-sm text-gray-600">
                                Tenker bærekraft
                            </p>

                            <div className="mt-4 text-sm text-gray-700">
                                <p>rune.johannesen@demomesser.no</p>
                                <p>+47 905 99 469</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Contact
