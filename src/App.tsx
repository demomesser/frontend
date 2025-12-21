import { useEffect, useState } from "react";
import Header from "./ui/Header"
import Home from "./ui/Home"
import Footer from "./ui/Footer"

const App = () => {
    const [isTopOfPage] = useState<boolean>(true)

    return (
        <div className='app bg-gray-20'>
            <Header isTopPage={isTopOfPage}/>
            <Home />
            <Footer />
        </div>

    )
}

export default App
