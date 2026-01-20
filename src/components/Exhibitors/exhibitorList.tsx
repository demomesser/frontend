import type { Exhibitor } from "../../shared/types";
import ExhibitorCard from "./exhibitorCard";

type Props = {
	exhibitors: Exhibitor[]
}

const ExhibitorList = ({ exhibitors }: Props) => {
	return (
		<div className="py-28 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{exhibitors.map((exhibitor) => (
				<ExhibitorCard key={exhibitor.id} exhibitor={exhibitor} />
			))}
		</div>
	)
}

export default ExhibitorList;
