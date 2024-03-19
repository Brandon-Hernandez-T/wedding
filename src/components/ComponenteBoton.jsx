import React from 'react';
import { FaGift } from "react-icons/fa6";

const ComponenteBotonUbicacion = ({ link }) => {

    const handleOpenGoogleMaps = () => {
        window.open(link, '_blank');
    };

    return (
        <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: 'white', border: '2px solid #FFD700', color: 'black', marginBottom: '5vh', marginTop: '2vh', width: 230, height: 50 }}
            onClick={handleOpenGoogleMaps}
        >
            <FaGift className="me-2" /> Ver mesa
        </button>
    );
};

export default ComponenteBotonUbicacion;