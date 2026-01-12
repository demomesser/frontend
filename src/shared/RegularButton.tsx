type Props = {
    link: string
    label: string
};

const RegularButton = ({ link, label }: Props) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <button className="rounded-full bg-[#EDFA8B] px-4 py-2 text-[#407053] cursor-pointer">
                {label}
            </button>
        </a>
    )
}

export default RegularButton 
