type DownloadButtonProps = {
    file: string
    label: string
    filename?: string
}

const DownloadButton = ({ file, label, filename, }: DownloadButtonProps) => {
    return (
        <a href={file} download={filename} style={{ textDecoration: "none" }}>
            <button className="hover:text-[#EDFA8B] cursor-pointer">
                {label}
            </button>
        </a>
    )
}


export default DownloadButton
