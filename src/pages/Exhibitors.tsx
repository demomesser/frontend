import Header from "../components/Header";
import type { Exhibitor } from "../shared/types"
import ExhibitorList from "../components/Exhibitors/exhibitorList"
import Footer from "../components/Footer"

import type { NavItem } from "../shared/types";
import { SelectedPage } from "../shared/types"

import { useState } from "react"


import SeweLogo from "../assets/SeweMaskin_logo.svg";

const exhibitors: Exhibitor[] = [
    {
        id: 1,
        name: "test",
        description: "Norcar leverer minilastere med løftekapasitet fra 750 kg til over 1500 kg og motoreffekter fra 20 hk til 49,6 hk. Maskinene kan leveres i ulike konfigurasjoner og med en rekke tilleggsutstyr, alt etter dine behov.",
        image: SeweLogo,
        link: "https://www.sewemaskin.no/"
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
