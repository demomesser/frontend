import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Icon from "../../assets/icon.png"
import { SelectedPage } from "../../shared/types";
import Link from "./link";
import useMediaQuery from "../../shared/useMedia";

type Props = {
    isTopOfPage: Boolean
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Header = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const navBarBackground = isTopOfPage ? "bg-[#1E425E]" : "bg-[#1E425E]/50 backdrop-blur-md"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

    return (
        <nav>
            <div className={`${navBarBackground} ${flexBetween} fixed top-0 z-40 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-1/2`}>
                    <div className={`${flexBetween} w-full gap-32`}>
                        { /* LOGO */}

                        <img
                            src={Icon}
                            alt="Icon"
                            className="cursor-pointer w-12 h-auto"
                            onClick={() => {
                                setSelectedPage(SelectedPage.HOME)
                                document.getElementById(SelectedPage.HOME)?.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }}
                        />

                        { /* Nav items */}
                        {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-lg font-bold`}>

                                <Link page={SelectedPage.HOME} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page={SelectedPage.ABOUTUS} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page={SelectedPage.SERVICES} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page={SelectedPage.CONTACT} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>
                        </div>) : (
                            <button className="rounded-full bg-[#EDFA8B] p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars3Icon className="h-6 w-6 text-[#407053]" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            { /* MOBILE MENU MODAL */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-[#1E425E] drop-shadow-xl">
                    { /* CLOSE ICON */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    { /* MENU ITEMS */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link page={SelectedPage.HOME} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page={SelectedPage.ABOUTUS} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page={SelectedPage.SERVICES} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page={SelectedPage.CONTACT} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Header 
