import Header from "../components/Header"
import Home from "../components/Home"
import AboutUs from "../components/AboutUs"
import Services from "../components/Services"
import Arrangement from "../components/Arrangement"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

import { SelectedPage } from "../shared/types"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import type { NavItem } from "../shared/types"

const NAV_ITEMS: NavItem[] = [
    { type: "route", label: "Utstiller →", to: "/utstiller" },
    { type: "page", page: SelectedPage.ABOUTUS },
    { type: "page", page: SelectedPage.SERVICES },
    { type: "page", page: SelectedPage.ARRANGEMENT },
    { type: "page", page: SelectedPage.CONTACT },
];

const Homepage = () => {
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.HOME)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.HOME)
            } else
                if (window.scrollY !== 0) {
                    setIsTopOfPage(false)
                }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    useEffect(() => {
        if (!location.hash) return

        const page = location.hash.replace("#", "") as SelectedPage

        setSelectedPage(page)

        requestAnimationFrame(() => {
            document.getElementById(page)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }, [location.hash])
    return (
        <div>
            <Header
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                navItems={NAV_ITEMS}
            />
            <Home setSelectedPage={setSelectedPage} />
            <AboutUs setSelectedPage={setSelectedPage} />
            <Services setSelectedPage={setSelectedPage} />
            <Arrangement setSelectedPage={setSelectedPage} />
            <Contact setSelectedPage={setSelectedPage} />
            <Footer />
        </div>

    )
}

export default Homepage
