"use client"
export default function NavItem({el,children}) {
	function handleClick() {
		console.log(el)
		//resultRef.current.scrollIntoView({ behavior: "smooth" });
	}
	return (
		<li key={el} className='item' onClick={handleClick}>
			{children}
		</li>
	);
}