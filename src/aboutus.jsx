import Divider from "./divider";

const texts = [
    'En el corazón de nuestra pasión por el deporte y el estilo, nace "Twister Futbol", un taller de ropa deportiva con un toque personal y familiar. Fundada hace más de dos décadas.',
    'todos nuestros articulos estan confeccionados con materiales de primerisima calidad, lo que garantiza una durabilidad unica.',
    'nuestros clientes son potencialmente clubes de futbol infantil afiliados a las distintas ligas de capital federal y gran Buenos Aires. Pero sin desatender otras actividades y disciplina, tales como basquet, volley, hockey, entre otros.',

]

const AboutUs = () => {
    return (
        <div className='section-container flex flex-col bg-gradient-to-b from-light to-secondary' id='us'>
            <Divider />
            <div className="grow flex flex-col items-center justify-center gap-40">
                <h2 className="text-6xl text-dark font-bold underline decoration-white">Te contamos sobre nosotros.</h2>
                <div className='grid grid-cols-3 gap-20'>
                    {texts.map((text, i) => {
                        return (
                            <p key={i} className="py-4 border-t-2 border-secondary">
                                {text}
                            </p>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

/*
En el corazón de nuestra pasión por el deporte y el estilo, nace "DeporteStyle", un taller de ropa deportiva con un toque personal y familiar. Fundada hace más de dos décadas.

En "DeporteStyle", no solo creamos ropa deportiva, sino que también forjamos un vínculo estrecho con nuestros clientes, quienes se convierten en parte de nuestra familia deportiva. Nuestra misión es elevar la experiencia deportiva a través de prendas que fusionan funcionalidad y estilo a la perfección.

Lo que nos distingue es nuestra atención meticulosa a cada detalle. Cada prenda es el resultado de la dedicación y la destreza artesanal de nuestros diseñadores y costureros, quienes trabajan en estrecha colaboración para garantizar que cada producto cumpla con los estándares más exigentes. Utilizamos materiales de la más alta calidad que no solo resisten el desgaste de las actividades deportivas, sino que también ofrecen comodidad y transpirabilidad.

Nuestra empresa familiar se enorgullece de mantener vivos los valores que nos han guiado desde el principio: integridad, compromiso y pasión. Creemos en la importancia de apoyar a nuestra comunidad, por lo que colaboramos con proveedores locales siempre que sea posible, contribuyendo así al crecimiento económico y social de nuestra región.

En "DeporteStyle", también valoramos la innovación. Nuestro equipo de diseño trabaja constantemente en la creación de nuevas líneas de productos que se adaptan a las tendencias cambiantes y a las necesidades de nuestros clientes. Desde ropa para correr hasta prendas de yoga y entrenamiento, ofrecemos una amplia gama de opciones para satisfacer todas las disciplinas deportivas.

Nos emociona continuar creciendo y evolucionando como empresa familiar. Cada día, damos la bienvenida a nuevos miembros a nuestra familia "DeporteStyle", ya sean clientes, empleados o socios. Juntos, compartimos el amor por el deporte y la moda, y estamos comprometidos a proporcionar productos excepcionales que eleven tu estilo mientras persigues tus metas deportivas.

En "DeporteStyle", la ropa deportiva deja de ser solo una prenda para convertirse en una declaración de pasión, determinación y unión familiar. Únete a nosotros y experimenta la diferencia de un enfoque personal en el mundo de la moda deportiva.
*/