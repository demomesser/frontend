import Logo from "../../assets/icon.png"
import { SelectedPage } from "../../shared/types";
import Link from "./link";

type Props = {
    isTopOfPage: Boolean
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Header = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const navBarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
    return (
        <nav>
            <div className={`${navBarBackground} ${flexBetween} fixed top-0 z-40 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img src={Logo} alt="logo" />
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link page="Om oss" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Tjenester" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Kontakt oss" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header 
