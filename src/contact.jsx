import Divider from "./divider";

const Contact = () => {
    return (
        <div className='section-container flex flex-col bg-gradient-to-b from-secondary to-primary' id='us'>
            <Divider />
            <div className="grow flex flex-col items-center justify-center gap-40">
                <h2 className="text-6xl text-white font-bold decoration-white">Contactanos.</h2>

                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/twisterfutbol/">@twisterfutbol</a>
                <a target="_blank" rel="noreferrer" href="https://wa.link/sslyjy">IR A WHATSAPP</a>
                <button></button>
            </div>
        </div>
    );
}

export default Contact;