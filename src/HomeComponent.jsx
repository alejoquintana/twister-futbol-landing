import "./home.scss"

const HomeComponent = () => {
	return (
		<div className='section-container grid grid-cols-2 background' id='init'>
			<div className='row-span-1 flex flex-col justify-center'>
				<h1 className='text-8xl text-primary font-black'>Twister Futbol</h1>
				<p className=''>
					pequeña empresa familiar dedicada a fabricar indumentaria deportiva con mas de 25 años de vida.
				</p>
			</div>
		</div>
	);
}

export default HomeComponent;