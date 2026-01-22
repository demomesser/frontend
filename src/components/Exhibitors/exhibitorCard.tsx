import type { Exhibitor } from "../../shared/types"

type Props = {
    exhibitor: Exhibitor
}

const ExhibitorCard = ({ exhibitor }: Props) => {
    return (
        <div className="
            w-[400px]
            h-[240px]
            rounded-md 
            border
            border-black
            bg-white
            p-6
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
                    gap-6
                "
            >
                <div className="h-20 flex items-center justify-center">
                    <img
                        src={exhibitor.image}
                        alt={exhibitor.name}
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
                <p className="text-sm text-black">{exhibitor.description}</p>
            </a>
        </div >
    )
}

export default ExhibitorCard;
