import "./navbar.css";
import NavItem from "./nav.item";

const sections = [
	{ name: 'INICIO', ref: 'init' },
	{ name: 'NOSOTROS', ref: 'us' },
	{ name: 'CONTACTANOS', ref: 'contact' },
	{ name: 'MUESTRAS', ref: 'shows' },
]

export default function NavBar() {
	const navlist = sections.map(section =>
		<NavItem el={section.ref} key={section.name}>
			{section.name}
		</NavItem>
	);
	return (
		<nav className='navbar border-b-2 border-dark'>
			<ul className='list'>
				{navlist}
			</ul>
		</nav>
	);
}