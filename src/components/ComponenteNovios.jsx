import React from 'react';
import '../styles/ComponenteNovios.css';

const ComponenteNovios = () => {
    return (
        <>
        <div className='linea-divisora' />
            <div className='col-12 space-vertical space-horizontal'>
                <h2 className='textos-cursiva' > <strong> CONTIGO SIEMPRE </strong> </h2>
                <p className='textos-cursiva space-vertical h4' >
                    !Nos casamos! <br />
                    Estamos felices y queremos compartir contigo todo nuestro amor. <br />
                    Queremos que seas parte de este momento tan importante en el que te la pasarás genial.
                </p>
            </div>
            <div className='col-md-6 space-vertical'>
                <h3 className='textos-cursiva' > Novia </h3>
                <h2 className='textos-cursiva texto-nombres-novios' > Jacqueline Díaz Ubence </h2>
            </div>
            <div className='col-md-6 space-vertical'>
                <h3 className='textos-cursiva' > Novio </h3>
                <h2 className='textos-cursiva texto-nombres-novios' > Brandon Hernandez Torres </h2>
            </div>
        </>
    );
};

export default ComponenteNovios;