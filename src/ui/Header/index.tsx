type Props = {
    isTopPage: Boolean
}

const Header = (props: Props) => {
	const flexBetween = "flex items-center justify-between";
	const navBarBackground = props.isTopOfPage ? "" : "bg-primary-100 drop-shadow"
    return (
        <nav>

        </nav>
    )
}

export default Header 
