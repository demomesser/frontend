import { motion } from "framer-motion"

type Props = {
    image: string
    name: string
    role: string
    email: string
    phone: string
}

const ContactCard = ({ image, name, role, email, phone }: Props) => {
    return (
        <motion.div
            className="rounded-xl bg-white p-6 text-center shadow-lg max-w-sm"
            whileHover={{ scale: 1.03 }}
            variants={{
                hidden: { opacity: 0, x: 40 },
                visible: { opacity: 1, x: 0 },
            }}
        >
            {/* Image */}
            <motion.div
                className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-[#256670]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
            >
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover"
                />
            </motion.div>

            {/* Info */}
            <h2 className="text-lg font-bold text-[#256670]">
                {name}
            </h2>

            <p className="text-sm text-gray-600">
                {role}
            </p>

            <div className="mt-4 text-sm text-gray-700">
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        </motion.div>
    )
}

export default ContactCard

