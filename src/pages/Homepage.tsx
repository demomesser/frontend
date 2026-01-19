import Header from "../components/Header"
import Home from "../components/Home"
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Arrangement from "../components/Arrangement"
import Contact from "../components/Contact";
import Footer from "../components/Footer"

import { SelectedPage } from "../shared/types";
import { useEffect, useState } from "react";

const Homepage = () => {
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.HOME)

    useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopOfPage(true);
				setSelectedPage(SelectedPage.HOME)
			} else
				if (window.scrollY !== 0) {
					setIsTopOfPage(false);
				}
		}
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
    return (
        <div>
            <Header isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Home setSelectedPage={setSelectedPage} />
            <AboutUs setSelectedPage={setSelectedPage} />
            <Services setSelectedPage={setSelectedPage}/>
            <Arrangement setSelectedPage={setSelectedPage}/>
            <Contact setSelectedPage={setSelectedPage} />
            <Footer />
        </div>

    )
}

export default Homepage
