type DownloadButtonProps = {
    file: string
    label: string
    filename?: string
}

const DownloadButton = ({ file, label, filename, }: DownloadButtonProps) => {
    return (
        <a href={file} download={filename} style={{ textDecoration: "none" }}>
            <button className="rounded-full bg-[#EDFA8B] px-4 py-2 text-[#407053] cursor-pointer">
                {label}
            </button>
        </a>
    )
}


export default DownloadButton
