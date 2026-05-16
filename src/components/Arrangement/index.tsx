import { SelectedPage } from "../../shared/types";

import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Arrangement = ({ setSelectedPage }: Props) => {
    return (
        <section
            id={SelectedPage.ARRANGEMENT}
            className="bg-white w-screen min-h-screen bg-white scroll-mt-24"
        >
            <motion.div
                className="mx-auto max-w-5xl"
                onViewportEnter={() => setSelectedPage(SelectedPage.ARRANGEMENT)}
            >

                {/* HEADER */}
                <div className="mb-12 pt-12 text-center mx-4">
                    <h2 className="text-4xl font-bold text-[#1E425E]">
                        Kommende arrangementer
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#EDFA8B]" />
                </div>

                {/* EVENT INFO */}
                <div className="rounded-lg bg-[#1E425E] p-8 md:p-10 text-white shadow-md m-6">

                    {/* DATE */}
                    <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#EDFA8B]">
                        Høsten 2026
                    </div>
                    <p className="text-xl font-bold leading-tight">Informasjon kommer</p>
                </div>
                <div className="rounded-lg bg-[#1E425E] p-8 md:p-10 text-white shadow-md m-6">

                    {/* DATE */}
                    <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#EDFA8B]">
                        Dato kommer
                    </div>
                    <p className="text-xl font-bold leading-tight">Informasjon kommer</p>
                </div>


            </motion.div>
        </section>
    )
}
export default Arrangement
