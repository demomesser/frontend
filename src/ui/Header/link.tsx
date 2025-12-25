import { SelectedPage } from "../../shared/types"

type Props = {
    page: String,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "-") as SelectedPage 

    return (
        <a
            href={`#${lowerCasePage}`}
            onClick={()=> setSelectedPage(lowerCasePage)}
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-[#EDFA8B]`}
        >
            {page}
        </a>
    )
}

export default Link
