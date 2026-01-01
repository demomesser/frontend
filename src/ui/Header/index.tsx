import Icon from "../../assets/icon.png"
import { SelectedPage } from "../../shared/types";
import Link from "./link";

type Props = {
    isTopOfPage: Boolean
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Header = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const navBarBackground = isTopOfPage ? "bg-[#1E425E]" : "bg-[#1E425E]/50 backdrop-blur-md"

    return (
        <nav>
            <div className={`${navBarBackground} ${flexBetween} fixed top-0 z-40 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-1/2`}>
                    <div className={`${flexBetween} w-full gap-32`}>
                        { /* LOGO */}

                        <img
                            src={Icon}
                            alt="Icon"
                            className="cursor-pointer w-8 h-auto"
                            onClick={() => {
                                setSelectedPage(SelectedPage.HOME)
                                document.getElementById(SelectedPage.HOME)?.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }}
                        />

                        { /* Nav items */}
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm font-bold`}>

                                <Link page={SelectedPage.HOME} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page={SelectedPage.ABOUTUS} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page={SelectedPage.SERVICES} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page={SelectedPage.CONTACT} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header 
