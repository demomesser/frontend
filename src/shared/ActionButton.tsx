import { SelectedPage } from "./types";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  page: SelectedPage;
  setSelectedPage?: (value: SelectedPage) => void;
  children: React.ReactNode;
};

const ActionButton = ({ page, setSelectedPage, children }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    // Optional state sync
    setSelectedPage?.(page);

    // If already on homepage → scroll
    if (location.pathname === "/") {
      document.getElementById(page)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    // Otherwise → go home with hash
    navigate(`/#${page}`);
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer rounded-full bg-[#EDFA8B] px-10 py-2 text-[#407053]"
    >
      {children}
    </button>
  );
};

export default ActionButton;
