import type { SelectedPage } from "../../shared/types";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    return (
        <section id="home" className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
            <div>hello</div>
        </section>
    )
}

export default Home
