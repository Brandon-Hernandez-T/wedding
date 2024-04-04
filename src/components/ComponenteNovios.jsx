import React from 'react';
import '../styles/ComponenteNovios.css';

const ComponenteNovios = () => {
    return (
        <>
            <div className='col-12 space-vertical space-horizontal'>
                <h2 className='textos-cursiva' > <strong> CONTIGO SIEMPRE </strong> </h2>
                <p className='textos-cursiva space-vertical h4' >
                    !Nos casamos! <br />
                    Estamos felices y queremos compartir contigo todo nuestro amor. <br />
                    Queremos que seas parte de este momento tan importante en el que te la pasarás genial.
                </p>
            </div>
            <div className="row space-vertical">
                <div className='col-md-5 space-vertical d-flex justify-content-center flex-column'>
                    <h3 className='textos-cursiva' > Novia </h3>
                    <h2 className='textos-cursiva texto-nombres-novios' > Jacqueline Díaz Ubence </h2>
                </div>
                <div className='col-md-2 space-vertical'>
                    <img src="/novios-icono.webp" alt="Imagen" width="90%" height="auto" />
                </div>
                <div className='col-md-5 space-vertical d-flex justify-content-center flex-column'>
                    <h3 className='textos-cursiva' > Novio </h3>
                    <h2 className='textos-cursiva texto-nombres-novios' > Brandon Hernandez Torres </h2>
                </div>
            </div>
            <div className='space-vertical' />

            <div className='col-12 space-vertical space-horizontal'>
                <h2 className='textos-cursiva' > <strong> NUESTROS PADRES </strong> </h2>
                <p className='textos-cursiva space-vertical h4' >
                    En este día especial, honramos a nuestros padres, cuyo amor y guía han sido fundamentales en nuestras vidas. Agradecemos a nuestros padres, por su amor, apoyo y sabiduría, que han sido un faro en nuestro viaje hacia el matrimonio.
                </p>
            </div>
            <div className="row space-vertical">
                <div className='col-md-5 space-vertical d-flex justify-content-center flex-column'>
                    <h3 className='textos-cursiva' > Padres de la novia </h3>
                    <h2 className='textos-cursiva texto-nombres-novios' > Alejandro Díaz Banda </h2>
                    <h4 className='textos-cursiva-simbolos' >&</h4>
                    <h2 className='textos-cursiva texto-nombres-novios' > Brenda Ubence Zarco </h2>
                </div>
                <div className='col-md-2 space-vertical'>
                    <img src="/nuestros-padres-icono.webp" alt="Imagen" style={{ width: '90%', height: 'auto', borderRadius: '50%' }} />
                </div>
                <div className='col-md-5 space-vertical d-flex justify-content-center flex-column'>
                    <h3 className='textos-cursiva' > Madre del novio </h3>
                    <h2 className='textos-cursiva texto-nombres-novios' > Cecilia Torres Matus </h2>
                </div>
            </div>
            <div className='space-vertical' />
        </>
    );
};

export default ComponenteNovios;