import { useState } from 'react'
import './App.css'
import Navbar from "./nav/navbar.jsx";
import HomeComponent from "./HomeComponent";
import AboutUs from "./aboutus";
import Contact from "./contact";

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Navbar></Navbar>
			
			<HomeComponent />
			<AboutUs />
			<Contact />
			
		</>
	)
}

export default App
