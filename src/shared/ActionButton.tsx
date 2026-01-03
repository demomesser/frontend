import { SelectedPage } from "./types"

type Props = {
    page: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    children: React.ReactNode;
};

const ActionButton = ({ page, setSelectedPage, children }: Props) => {
    return (
        <a
            href={`#${page}`}
            onClick={(e) => {
                e.preventDefault();
                setSelectedPage(page);

                document.getElementById(page)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }}
            className={"rounded-full bg-[#EDFA8B] px-10 py-2 hover:bg-[#EDFA8B] text-[#407053]"}
        >
            {children}
        </a>
    )
}

export default ActionButton
