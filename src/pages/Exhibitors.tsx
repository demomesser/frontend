import type { Exhibitor } from "../shared/types"
import ExhibitorList from "../components/Exhibitors/exhibitorList"
import Footer from "../components/Footer"

import SeweLogo from "../assets/SeweMaskin_logo.svg";

const exhibitors: Exhibitor[] = [
    {
        id: 1,
        name: "test",
        description: "this is an test",
        image: SeweLogo
    },
]

const Exhibitors = () => {
    return (
        <div>
            <ExhibitorList exhibitors={exhibitors}/>
            <Footer />
        </div>
    )
}

export default Exhibitors
