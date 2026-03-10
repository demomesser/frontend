import Header from "../components/Header"
import type { Exhibitor } from "../shared/types"
import ExhibitorList from "../components/Exhibitors/exhibitorList"
import ExhibitorSlider from "../components/Exhibitors/exhibitorSlider"
import Footer from "../components/Footer"

import type { NavItem } from "../shared/types"
import { SelectedPage, ExhibitorCategory } from "../shared/types"

import { useState, useEffect } from "react"


import SeweLogo from "../assets/SeweMaskin_logo.svg"
import WeidemannLogo from "../assets/weidemann_logo.png"
import KonwiLogo from "../assets/konwi_logo.svg"
import CramerLogo from "../assets/cramer_logo.webp"
import NellemannLogo from "../assets/nellemann_machinery_logo.jpg"
import HusqvarnaLogo from "../assets/husqvarna_logo.png"
import HymaxLogo from "../assets/hymax_logo.avif"
import NtsLogo from "../assets/nts_logo.png"
import LadeByraaetLogo from "../assets/ladebyraaet_logo.png"
import CfMaskinLogo from "../assets/cf_maskin_logo.jpeg"
import NomacoLogo from "../assets/nomaco_logo.jpg"
import BeckMaskinLogo from "../assets/beck_maskin_logo.svg"

const exhibitors: Exhibitor[] = [
    {
        id: 1,
        name: "sewe maskin",
        description: "Norcar leverer minilastere med løftekapasitet fra 750 kg til over 1500 kg og motoreffekter fra 20 hk til 49,6 hk. Maskinene kan leveres i ulike konfigurasjoner og med en rekke tilleggsutstyr, alt etter dine behov.",
        image: SeweLogo,
        link: "https://www.sewemaskin.no/",
        category: [
            ExhibitorCategory.TUNGE_MASKINER
        ]
    },
    {
        id: 2,
        name: "Weidemann",
        description: "Weidemann tilbyr kompakte Hoftracs, hjullastere, teleskopiske hjullastere, teleskoplastere og et bredt utvalg av redskaper og tilbehør.",
        image: WeidemannLogo,
        link: "https://www.weidemann.com/uk/",
        category: [
            ExhibitorCategory.TUNGE_MASKINER
        ]
    },

    {
        id: 3,
        name: "Cramer",
        description: "Cramer leverer kraftige, batteridrevne verktøy for profesjonell bruk. Med skandinavisk design og moderne batteriteknologi tilbyr de stillegående, utslippsfrie og pålitelige løsninger.",
        image: CramerLogo,
        link: "https://www.berema.no/",
        category: [
            ExhibitorCategory.PARK_HAGE
        ]
    },
    {
        id: 4,
        name: "Konwi",
        description: "KONWI AS har siden 1981 opparbeidet seg 30 års lang erfaring med fremstilling av nye produkter og salg av vel innarbeidede kirkegårdsprodukter til kommuner, steinhuggere, gartnere og privatpersoner.",
        image: KonwiLogo,
        link: "https://www.kirketorget.as/",
        category: [
            ExhibitorCategory.DIVERSE
        ]
    },
    {
        id: 5,
        name: "Nellemann Machinery",
        description: "Leverandør av profesjonelle maskiner til vei & park, golf & idrett, landbruk og entreprenører.",
        image: NellemannLogo,
        link: "https://nellemannmachinery.no/",
        category: [
            ExhibitorCategory.TUNGE_MASKINER
        ]
    },
    {
        id: 6,
        name: "Husqvarna",
        description: "Drevet av en lidenskap for innovasjon siden 1689 tilbyr Husqvarna profesjonelle produkter til skog, park og hage. Ytelse og bruk oppfyller kravene til sikkerhet og miljø i våre banebrytende innovasjoner.",
        image: HusqvarnaLogo,
        link: "https://www.husqvarna.com/",
        category: [
            ExhibitorCategory.PARK_HAGE
        ]
    },
    {
        id: 7,
        name: "Hymax",
        description: "Hymax har røtter og historie fra maskinproduksjon i 1956, men fra 1997 har vi vært en rendyrket maskinimportør. Selskapet importerer varemerker som Kubota, Giant og Ausa, som alle er ledende varemerker i segmentet «under 10 tonn».",
        image: HymaxLogo,
        link: "https://www.hymax.no/elektriske-maskiner",
        category: [
            ExhibitorCategory.TUNGE_MASKINER
        ]
    },
    {
        id: 8,
        name: "Nts",
        description: "NTS leverer alt fra enkle ATV hengere til mer avansert tømmerhengere med drift og kran, tipphengere og spesialhengere.",
        image: NtsLogo,
        link: "https://norsktilhengersenter.no/",
        category: [
            ExhibitorCategory.PARK_HAGE,
            ExhibitorCategory.DIVERSE
        ]
    },
    {
        id: 9,
        name: "Ladebyrået",
        description: "Profesjonelle brukte hurtigladere for transportbransjen. 50-350kW effekt, 20+ års erfaring med lading av elektriske nyttekjøretøy i Norge.",
        image: LadeByraaetLogo,
        link: "https://www.ladebyraet.no/",
        category: [
            ExhibitorCategory.DIVERSE
        ]
    },
    {
        id: 10,
        name: "CF maskin",
        description: "CF- gruppen består i dag av 11 maskinforretninger fra Skogmo i nord til Skjeberg i sør. CF Maskin ble etablert i 1988, og er forhandler av alle Claas produkter. I tillegg er de importør av andre merkevarer som f.eks Schäffer mini/hjullastere.",
        image: CfMaskinLogo,
        link: "https://cf.no/",
        category: [
            ExhibitorCategory.TUNGE_MASKINER
        ]
    },
    {
        id: 11,
        name: "Nomaco",
        description: "Hos Nomaco finner du et bredt utvalg av elektriske maskiner og kjøretøy for profesjonell bruk. De er stillegående, driftssikre og miljøvennlige – og samtidig en god investering.",
        image: NomacoLogo,
        link: "https://www.nomaconorge.no/",
        category: [
            ExhibitorCategory.PARK_HAGE,
            ExhibitorCategory.DIVERSE
        ]
    },
    {
        id: 12,
        name: "Beck Maskin",
        description: "Din partner på anleggsmaskiner og utstyr. Kobelco Gravemaskiner, Wacker Neuson komprimeringsprodukter, hjulgravere, hjullastere og hjuldumpere og mer",
        image: BeckMaskinLogo,
        link: "https://www.nomaconorge.no/",
        category: [
            ExhibitorCategory.PARK_HAGE,
            ExhibitorCategory.DIVERSE
        ]
    },
]

const NAV_ITEMS: NavItem[] = [
    { type: "route", label: "← Hjem", to: "/" },
    { type: "page", page: SelectedPage.TUNGE_MASKINER },
    { type: "page", page: SelectedPage.PARK_HAGE },
    { type: "page", page: SelectedPage.DIVERSE },
]

const ExhibitorCategoryId: Record<ExhibitorCategory, string> = {
    [ExhibitorCategory.TITLE]: SelectedPage.TITLE,
    [ExhibitorCategory.TUNGE_MASKINER]: SelectedPage.TUNGE_MASKINER,
    [ExhibitorCategory.PARK_HAGE]: SelectedPage.PARK_HAGE,
    [ExhibitorCategory.LADING]: SelectedPage.LADING,
    [ExhibitorCategory.DIVERSE]: SelectedPage.DIVERSE,
}

const Exhibitors = () => {
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.NONE)

    const groupedExhibitors = exhibitors.reduce<Record<string, Exhibitor[]>>(
        (acc, exhibitor) => {
            exhibitor.category.forEach(category =>{
                acc[category] ??= []
                acc[category].push(exhibitor)
            })
            return acc
        },
        {}
    )
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.TITLE)
            } else
                if (window.scrollY !== 0) {
                    setIsTopOfPage(false)
                }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Header
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                navItems={NAV_ITEMS} />
            <section id={SelectedPage.TITLE} className="bg-[#1E425E] min-h-screen text-white py-32 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    Utstillere
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-white">
                    Utforsk årets utstillere innen park- og hagemaskiner, tunge maskiner, ladning, infrastruktur og spesialutstyr, og bli kjent med bærekraftige løsninger for morgendagens drift.
                </p>
                <ExhibitorSlider exhibitors={exhibitors} />
            </section>
            <main className="flex-grow px-4 md:px-8 py-16 space-y-16">
                {Object.entries(groupedExhibitors).map(([category, exhibitors]) => {
                    const id = ExhibitorCategoryId[category as ExhibitorCategory]
                    return (
                        <section
                            key={category}
                            id={id}
                            className="space-y-6 scroll-mt-32"
                        >
                            <h2 className="text-center text-4xl font-bold text-[#1E425E]">
                                {category}
                            </h2>


                            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#EDFA8B]" />


                            <ExhibitorList exhibitors={exhibitors} />
                        </section>
                    )
                })}
            </main>
            <Footer />
        </div>
    )
}

export default Exhibitors
