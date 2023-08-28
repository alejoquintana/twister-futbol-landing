import { useState } from 'react'
import './App.css'
import Navbar from "./nav/navbar.jsx";
import HomeComponent from "./HomeComponent";
import AboutUs from "./aboutus";

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Navbar></Navbar>
			
			<HomeComponent />
			<AboutUs />
			
		</>
	)
}

export default App
