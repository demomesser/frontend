import { FaFacebookF, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-[#1E425E] py-16">
            <div className="mx-auto w-1/2 flex justify-center">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p>Copyright © 2026 Demomesser All Rights Reserved.</p>
                    <a
                        href="https://www.facebook.com/profile.php?id=61584656870435"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#EDFA8B] transition"
                        aria-label="Facebook"
                    >
                        <FaFacebookF size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/demomesser-as/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#EDFA8B] transition"
                        aria-label="Linkedin"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
