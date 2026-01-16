import { SelectedPage } from "../../shared/types"

type Props = {
    page: SelectedPage,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {

    return (
        <a
            onClick={(e) => {
                e.preventDefault();
                setSelectedPage(page);

                document.getElementById(page)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }}
            className={`cursor-pointer ${selectedPage === page ? "text-primary-500" : ""
                } transition duration-500 hover:text-[#EDFA8B]`}
        >
            {page.replace("-", " ")}
        </a>
    );
}

export default Link
