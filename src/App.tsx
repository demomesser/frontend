import Header from "./ui/Header"
import Home from "./ui/Home"

import AboutUs from "./ui/aboutUs";
import Footer from "./ui/Footer"
import { SelectedPage } from "./shared/types";
import { useEffect, useState } from "react";

const App = () => {
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
        <div className='app bg-black-20'>
            <Header isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            <Home setSelectedPage={setSelectedPage} />
            <AboutUs setSelectedPage={setSelectedPage} />
            <Footer />
        </div>

    )
}

export default App
