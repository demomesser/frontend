import Link from "./link";
import LinkRoute from "./linkRoute";
import type { NavItem } from "../../shared/types";
import { SelectedPage } from "../../shared/types";

type Props = {
    items: NavItem[];
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    className?: string;
};

const NavItems = ({
    items,
    selectedPage,
    setSelectedPage,
    className = "",
}: Props) => {
    return (
        <div className={className}>
            {items.map((item, index) => {
                if (item.type === "route") {
                    return (
                        <LinkRoute
                            key={index}
                            label={item.label}
                            to={item.to}
                        />
                    );
                }

                return (
                    <Link
                        key={index}
                        page={item.page}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                );
            })}
        </div>
    );
};

export default NavItems;
