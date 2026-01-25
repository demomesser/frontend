import Header from "../components/Header"
import type { Exhibitor } from "../shared/types"
import ExhibitorList from "../components/Exhibitors/exhibitorList"
import Footer from "../components/Footer"

import type { NavItem } from "../shared/types"
import { SelectedPage, ExhibitorCategory } from "../shared/types"

import { useState } from "react"


import SeweLogo from "../assets/SeweMaskin_logo.svg"
import WeidemannLogo from "../assets/weidemann_logo.png"
import KonwiLogo from "../assets/konwi_logo.svg"
import CramerLogo from "../assets/cramer_logo.webp"
import StigaLogo from "../assets/stiga_logo.jpeg"

const exhibitors: Exhibitor[] = [
    {
        id: 1,
        name: "sewe maskin",
        description: "Norcar leverer minilastere med løftekapasitet fra 750 kg til over 1500 kg og motoreffekter fra 20 hk til 49,6 hk. Maskinene kan leveres i ulike konfigurasjoner og med en rekke tilleggsutstyr, alt etter dine behov.",
        image: SeweLogo,
        link: "https://www.sewemaskin.no/",
        category: ExhibitorCategory.TUNGE_MASKINER
    },
    {
        id: 2,
        name: "Weidemann",
        description: "Weidemann tilbyr kompakte Hoftracs, hjullastere, teleskopiske hjullastere, teleskoplastere og et bredt utvalg av redskaper og tilbehør.",
        image: WeidemannLogo,
        link: "https://www.weidemann.com/uk/",
        category: ExhibitorCategory.TUNGE_MASKINER
    },
    {
        id: 3,
        name: "Konwi",
        description: "KONWI AS har siden 1981 opparbeidet seg 30 års lang erfaring med fremstilling av nye produkter og salg av vel innarbeidede kirkegårdsprodukter til kommuner, steinhuggere, gartnere og privatpersoner.",
        image: KonwiLogo,
        link: "https://www.kirketorget.as/",
        category: ExhibitorCategory.DIVERSE
    },
    {
        id: 4,
        name: "Cramer",
        description: "Cramer leverer kraftige, batteridrevne verktøy for profesjonell bruk. Med skandinavisk design og moderne batteriteknologi tilbyr de stillegående, utslippsfrie og pålitelige løsninger.",
        image: CramerLogo,
        link: "https://www.berema.no/",
        category: ExhibitorCategory.PARK_HAGE
    },
    {
        id: 5,
        name: "Stiga",
        description: "STIGA er et velkjent varemerke og en ledende produsent av hagemaskiner.",
        image: StigaLogo,
        link: "https://www.stiga.com/no/",
        category: ExhibitorCategory.PARK_HAGE
    },
]

const NAV_ITEMS: NavItem[] = [
    { type: "route", label: "← Hjem", to: "/" },
]

const Exhibitors = () => {
    const [isTopOfPage] = useState<boolean>(true)
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.NONE)

    const groupedExhibitors = exhibitors.reduce<Record<string, Exhibitor[]>>(
        (acc, exhibitor) => {
            acc[exhibitor.category] ??= []
            acc[exhibitor.category].push(exhibitor)
            return acc
        },
        {}
    )

    return (
        <div className="min-h-screen flex flex-col">
            <Header
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                navItems={NAV_ITEMS} />
            <main className="flex-grow px-4 md:px-8 py-12 space-y-16">
                {Object.entries(groupedExhibitors).map(([category, exhibitors]) => (
                    <section key={category} className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold border-b pb-2">
                            {category}
                        </h2>
                        <ExhibitorList exhibitors={exhibitors} />
                    </section>
                ))}
            </main>
            <Footer />
        </div>
    )
}

export default Exhibitors
