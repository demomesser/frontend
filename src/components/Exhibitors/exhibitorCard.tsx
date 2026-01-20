import type { Exhibitor } from "../../shared/types"

type Props = {
    exhibitor: Exhibitor
}

const ExhibitorCard = ({ exhibitor }: Props) => {
    return (
        <div className="
            rounded-md 
            border
            border-black
            bg-white
            p-4
            shadow-md
            transition 
            hover:shadow-lg"
        >
            <a
                href={exhibitor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex 
                    flex-col 
                    gap-4
                "
            >
                <img
                    src={exhibitor.image}
                    alt={exhibitor.name}
                    className="h-20 w-full"
                />
                <p className="text-sm text-black">{exhibitor.description}</p>
            </a>
        </div >
    )
}

export default ExhibitorCard;
