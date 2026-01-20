import type { Exhibitor } from "../../shared/types"; 

type Props = {
	exhibitor: Exhibitor;
};

const ExhibitorCard = ({ exhibitor }: Props) => {
	return (
		<div className="border border-black rounded-md p-4 flex flex-col gap-2">
			<img
				src={exhibitor.image}
				alt={exhibitor.name}
				className="h-20 w-full"
			/>
			<h3 className="text-lg font-semibold">{exhibitor.name}</h3>
			<p className="text-sm text-gray-600">{exhibitor.description}</p>
		</div>
	);
};

export default ExhibitorCard;
