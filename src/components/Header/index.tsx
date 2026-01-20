import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Icon from "../../assets/icon.png"
import { SelectedPage } from "../../shared/types";
import Link from "./link";
import LinkRoute from "./linkRoute";
import useMediaQuery from "../../shared/useMedia";
import ActionButton from "../../shared/ActionButton"

type Props = {
    isTopOfPage: boolean
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
                <div className="mx-auto w-full max-w-7xl px-6">
                    <div className="flex w-full items-center">

                        {/* LOGO */}
                        <div className="flex items-center justify-start w-[200px]">
                            <img
                                src={Icon}
                                alt="Icon"
                                className="cursor-pointer w-12 h-auto"
                                onClick={() => {
                                    setSelectedPage(SelectedPage.HOME);
                                    document.getElementById(SelectedPage.HOME)?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                }}
                            />
                        </div>

                        {/* NAV ITEMS */}
                        <div className="flex flex-1 justify-center">
                            {isAboveMediumScreens && (
                                <div className="flex gap-10 text-lg font-semibold whitespace-nowrap">
                                    <LinkRoute label="Utstiller →" to="/utstiller" />
                                    <Link page={SelectedPage.ABOUTUS} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page={SelectedPage.SERVICES} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page={SelectedPage.ARRANGEMENT} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page={SelectedPage.CONTACT} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                </div>
                            )}
                        </div>

                        {/* BUTTON */}
                        <div className="flex items-center justify-end w-[200px]">
                            {!isAboveMediumScreens && (
                                <button
                                    className="rounded-full bg-[#EDFA8B] p-2"
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                                >
                                    <Bars3Icon className="h-6 w-6 text-[#407053]" />
                                </button>
                            )}

                            {isAboveMediumScreens && !isTopOfPage && (
                                <ActionButton
                                    page={SelectedPage.ARRANGEMENT}
                                    setSelectedPage={setSelectedPage}
                                >
                                    Påmeldinger
                                </ActionButton>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            {/* MOBILE MENU MODAL */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-[#1E425E] drop-shadow-xl">
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <LinkRoute label="Utstiller →" to="/utstiller" />
                        <Link page={SelectedPage.ABOUTUS} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page={SelectedPage.SERVICES} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page={SelectedPage.ARRANGEMENT} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page={SelectedPage.CONTACT} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                </div>
            )}
        </nav>
    );

}

export default Header 
