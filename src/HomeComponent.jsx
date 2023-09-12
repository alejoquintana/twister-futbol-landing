import "./home.scss"

const HomeComponent = () => {
	return (
		<div className='section-container grid grid-cols-3 background' id='init'>
			<div className='row-span-1 col-span-2 flex flex-col justify-center'>
				<h1 className='text-8xl text-primary font-black'>Twister Futbol</h1>
				<p className='text-dark'>
					Empresa familiar dedicada a fabricar indumentaria deportiva con mas de 25 años de vida.
				</p>
			</div>
		</div>
	);
}

export default HomeComponent;