import type { Exhibitor } from "../../shared/types";
import ExhibitorCard from "./exhibitorCard";

import { motion } from "framer-motion"

type Props = {
    exhibitors: Exhibitor[]
}

const ExhibitorList = ({ exhibitors }: Props) => {
    return (
        <div>
            <motion.div className="
                px-16
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-8
                pb-10
                place-items-center
            "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                    },
                }}
            >

                {exhibitors.map((exhibitor) => (
                    <motion.div
                        key={exhibitor.id}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <ExhibitorCard exhibitor={exhibitor} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default ExhibitorList;
