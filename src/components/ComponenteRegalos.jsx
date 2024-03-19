import React from 'react';
import { FaGifts } from "react-icons/fa";
import ComponenteBoton from '@/components/ComponenteBoton'

const ComponenteRegalos = () => {
    return (
        <>
        <div className='linea-divisora' />
            <div className='col-12 space-vertical space-horizontal'>
                <h1 className='text-titulo' > <strong> <FaGifts /> MESA DE REGALOS </strong> </h1>
                <p className='textos-cursiva space-vertical h4' >
                    Te invitamos a formar parte de nuestra felicidad y a contribuir a la construcción de nuestro hogar y futuros recuerdos. Descubre nuestra mesa de regalos y encuentra el regalo perfecto para esta nueva etapa de nuestras vidas juntos.
                </p>
            </div>

            <div className="row space-vertical space-horizontal">
                <div className='col-md-6 space-vertical d-flex align-items-center flex-column'>
                    <img src="/amazon-logo.webp" alt="Mesa de regalos de Brandon y Jacqueline" className="img-fluid" />
                    <ComponenteBoton link="https://www.amazon.com.mx/wedding/share/branyjacqui" />
                </div>
                <div className='col-md-6 space-vertical d-flex justify-content-center align-items-center'>
                    <p className='textos-cursiva space-vertical h4' >
                        Sin embargo, queremos recordarte que tu presencia es lo más importante para nosotros, y cualquier gesto de cariño, independientemente de si viene de nuestra mesa de regalos o no, será muy valorado.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ComponenteRegalos;