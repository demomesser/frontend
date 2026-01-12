type Props = {
    link: string
    children: React.ReactNode;
};

const RegularButton = ({ link, children }: Props) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#EDFA8B] px-10 py-2 hover:bg-[#EDFA8B] text-[#407053] inline-block"
        >
            {children}
        </a>
    )
}

export default RegularButton 
