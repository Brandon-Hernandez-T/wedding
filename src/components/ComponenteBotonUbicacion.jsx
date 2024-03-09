import React from 'react';
import { BsGeoAlt } from 'react-icons/bs';

const ComponenteBotonUbicacion = ({ googleMapsLink }) => {

    const handleOpenGoogleMaps = () => {
        window.open(googleMapsLink, '_blank');
    };

    return (
        <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: 'white', border: '2px solid #FFD700', color: 'black', marginBottom: '5vh', marginTop: '2vh', width: 230, height: 50 }}
            onClick={handleOpenGoogleMaps}
        >
            <BsGeoAlt className="me-2" /> Ubicación
        </button>
    );
};

export default ComponenteBotonUbicacion;