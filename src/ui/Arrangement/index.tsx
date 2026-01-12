import { SelectedPage } from "../../shared/types";

import pdf1 from "../../assets/hallenparken.pdf"
import pdf2 from "../../assets/gravlund.pdf"

import DownloadButton from "../../shared/DownloadButton"
import RegularButton from "../../shared/RegularButton"

import { MapPinIcon } from "@heroicons/react/24/solid"

import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Arrangement = ({ setSelectedPage }: Props) => {
    const registrationLink = "https://cred.pameldingssystem.no/demo-messe"
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

                {/* EVENTS */}
                <div className="rounded-lg bg-[#1E425E] p-6 text-white shadow-md m-6">

                    {/* DATE */}
                    <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#EDFA8B]">
                        15. april 2026
                    </div>

                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                        {/* INFO */}
                        <div>
                            <h3 className="text-xl font-bold leading-tight">
                                Demomesse i Hallén Parken
                            </h3>

                            <p className="mt-1 text-xs text-gray-300">
                                UKE (Utvikling og kompetanseetaten i Oslo Kommune)
                            </p>
                        </div>

                        {/* ACTIONS */}
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <DownloadButton
                                file={pdf1}
                                label="Invitasjon"
                                filename="hallenparken.pdf"
                            />

                            <RegularButton
                                link={registrationLink}
                                label={"Påmelding"}
                            >
                            </RegularButton>

                            <a
                                href="https://www.google.com/maps/place/Hall%C3%A9nparken/@59.9308018,10.7623102,18z/data=!3m1!4b1!4m6!3m5!1s0x46416e6baedbf21d:0xc1c6e3aa88446e41!8m2!3d59.9308006!4d10.7634634!16s%2Fg%2F1221x_tz?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-gray-300 hover:text-[#EDFA8B]"
                            >
                                <MapPinIcon className="h-4 w-4" />
                                Vis i kart
                            </a>
                        </div>
                    </div>


                    {/* DESCRIPTION */}
                    <p className="mt-4 text-base leading-relaxed text-gray-100">
                        20 leverandører av elektrisk utstyr og maskiner viser og demonstrerer
                        løsninger for ansatte og entreprenører som holder orden i parker og
                        veier i byen vår. Publikum får også mulighet til å teste maskinene.
                    </p>
                </div>

                <div className="rounded-lg bg-[#1E425E] p-6 text-white shadow-md m-6">

                    {/* DATE */}
                    <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#EDFA8B]">
                        8. mai 2026
                    </div>

                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h3 className="text-xl font-bold leading-tight">
                                Demomesse på Østre gravlund
                            </h3>

                            <p className="mt-1 text-xs text-gray-300">
                                GPE (Gravplassetaten i Oslo Kommune)
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <DownloadButton file={pdf2} label={"Invitasjon"} filename={"gravlund.pdf"} />

                            <a
                                href="https://www.google.com/maps/place/%C3%98stre+gravlund/@59.9131596,10.8070007,17z/data=!3m1!4b1!4m6!3m5!1s0x46416fac1956fe17:0x551ef06362a130bf!8m2!3d59.9131575!4d10.8089872!16s%2Fg%2F120z70wv?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 inline-flex items-center gap-1 text-xs text-gray-300 hover:text-[#EDFA8B]"
                            >
                                <MapPinIcon className="h-4 w-4" />
                                Vis i kart
                            </a>
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-base leading-relaxed text-gray-100">
                        23 leverandører av elektrisk utstyr og maskiner viser og demonstrerer
                        for alle som holder kirkegårder, parker, veier og borretslag i orden.
                        Det vil selvfølgelig være muligheter for publikum å teste maskinene.
                    </p>
                </div>



            </motion.div>
        </section>
    )
}
export default Arrangement
