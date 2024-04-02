import React from 'react';
import ComponenteBotonUbicacion from '@/components/ComponenteBotonUbicacion';
import { BiChurch } from 'react-icons/bi';
import { GiPartyFlags } from "react-icons/gi";
import { BsBalloonHeart } from "react-icons/bs";

const ComponenteUbicaciones = () => {
    return (
        <>
            <div className="row space-horizontal">
                <div className="space-vertical-title" />

                <div className="col-md-6 col-12">
                    <h1 className='textos-cursiva texto-nombres-novios space-vertical'> <BiChurch />  Ceremonia Religiosa </h1>
                    <h3 className='textos-cursiva texto-nombres-novios' > Parroquia de San buenaventura </h3>
                    <h4 className='textos-cursiva space-vertical-timer' >P.º de San Buenaventura Manzana 009, Unidad San Buenaventura, 56530 San Buenaventura, Méx.</h4>
                    <h2 className='textos-cursiva texto-nombres-novios space-vertical-timer' > 13:00 hrs </h2>
                    <ComponenteBotonUbicacion googleMapsLink="https://maps.app.goo.gl/dM2aYZnJimEnSzX98" />
                </div>
                <div className="col-md-6 col-12">
                    <img src="/parroquia_sb.jpeg" alt="Imagen" width="65%" height="auto" style={{ border: '2px solid #FFD700', borderRadius: '8px', padding: '5px' }} />
                </div>

                <div className="space-vertical-title" />

                <div className="d-flex flex-column flex-md-row-reverse">
                    <div className="col-md-6 col-12">
                        <h1 className='textos-cursiva texto-nombres-novios space-vertical'> <BsBalloonHeart />  Ceremonia Civil </h1>
                        <h3 className='textos-cursiva texto-nombres-novios' > Fiestas ANDASADI Garden  </h3>
                        <h4 className='textos-cursiva space-vertical-timer' >Carretera Federal Cuautla-México 400, Hacienda Las Palmas I y II, 56535 Ixtapaluca, Méx.</h4>
                        <h2 className='textos-cursiva texto-nombres-novios space-vertical-timer' > 14:30 hrs </h2>
                        <ComponenteBotonUbicacion googleMapsLink="https://maps.app.goo.gl/vbnPZTg62mHr76A88" />
                    </div>
                    <div className="col-md-6 col-12">
                        <img src="/boda_civil.webp" alt="Imagen" width="65%" height="auto" style={{ border: '2px solid #FFD700', borderRadius: '8px', padding: '5px' }} />
                    </div>
                </div>

                <div className="space-vertical-title" />

                <div className="col-md-7 col-12" >
                    <h1 className='textos-cursiva texto-nombres-novios space-vertical'> <GiPartyFlags /> Evento </h1>
                    <h3 className='textos-cursiva texto-nombres-novios' > Fiestas ANDASADI Garden </h3>
                    <h4 className='textos-cursiva space-vertical-timer' >Carretera Federal Cuautla-México 400, Hacienda Las Palmas I y II, 56535 Ixtapaluca, Méx.</h4>
                    <h2 className='textos-cursiva texto-nombres-novios space-vertical-timer' > 15:30 hrs </h2>
                    <ComponenteBotonUbicacion googleMapsLink="https://maps.app.goo.gl/vbnPZTg62mHr76A88" />
                </div>
                <div className="col-md-5 col-12">
                    <img src="/jardin-andasadi.jpeg" alt="Imagen" width="90%" height="auto" style={{ border: '2px solid #FFD700', borderRadius: '8px', padding: '5px' }} />
                </div>

            </div>
            <div className="space-vertical-title" />
        </>
    );
};

export default ComponenteUbicaciones;