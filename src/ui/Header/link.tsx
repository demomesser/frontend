import { SelectedPage } from "../../shared/types"

type Props = {
    page: SelectedPage,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {

    return (
        <a
            href={`#${page}`}
            onClick={()=> setSelectedPage(page)}
            className={`${selectedPage === page ? "text-primary-500" : ""} transition duration-500 hover:text-[#EDFA8B]`}
        >
            {page.replace("-", " ")}
        </a>
    )
}

export default Link
