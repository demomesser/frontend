import Header from "../components/Header"
import type { Exhibitor } from "../shared/types"
import ExhibitorList from "../components/Exhibitors/exhibitorList"
import Footer from "../components/Footer"

import type { NavItem } from "../shared/types"
import { SelectedPage } from "../shared/types"

import { useState } from "react"


import SeweLogo from "../assets/SeweMaskin_logo.svg"
import WeidemannLogo from "../assets/weidemann_logo.png"
import KonwiLogo from "../assets/konwi_logo.svg"
import BeremaLogo from "../assets/berema_logo.svg"

const exhibitors: Exhibitor[] = [
    {
        id: 1,
        name: "sewe maskin",
        description: "Norcar leverer minilastere med løftekapasitet fra 750 kg til over 1500 kg og motoreffekter fra 20 hk til 49,6 hk. Maskinene kan leveres i ulike konfigurasjoner og med en rekke tilleggsutstyr, alt etter dine behov.",
        image: SeweLogo,
        link: "https://www.sewemaskin.no/"
    },
    {
        id: 2,
        name: "Weidemann",
        description: "Weidemann tilbyr kompakte Hoftracs, hjullastere, teleskopiske hjullastere, teleskoplastere og et bredt utvalg av redskaper og tilbehør.",
        image: WeidemannLogo,
        link: "https://www.weidemann.com/uk/"
    },
    {
        id: 3,
        name: "Konwi",
        description: "KONWI AS har siden 1981 opparbeidet seg 30 års lang erfaring med fremstilling av nye produkter og salg av vel innarbeidede kirkegårdsprodukter til kommuner, steinhuggere, gartnere og privatpersoner.",
        image: KonwiLogo,
        link: "https://www.kirketorget.as/"
    },
    {
        id: 4,
        name: "Berema",
        description: "Berema AS ble etablert i 1968 med en klar visjon: å importere og distribuere kvalitetsprodukter gjennom et solid nettverk av fagforhandlere.",
        image: BeremaLogo,
        link: "https://www.berema.no/"
    },
    
]

const NAV_ITEMS: NavItem[] = [
    { type: "route", label: "← Hjem", to: "/" },
]

const Exhibitors = () => {
    const [isTopOfPage] = useState<boolean>(true)
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.NONE)

    return (
        <div className="min-h-screen flex flex-col">
            <Header
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                navItems={NAV_ITEMS} />
            <main className="flex-grow">
                <ExhibitorList exhibitors={exhibitors} />
            </main>
            <Footer />
        </div>
    )
}

export default Exhibitors
