import { Link as RouterLink } from "react-router-dom";

type Props = {
	label: string;
	to: string;
};

const LinkRoute = ({ label, to }: Props) => {
	return (
		<RouterLink
			to={to}
			className="cursor-pointer transition duration-500 hover:text-[#EDFA8B]"
		>
			{label}
		</RouterLink>
	);
};

export default LinkRoute;

