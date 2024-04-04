import React from 'react';

const ComponenteFooter = () => {
    return (
        <div className="footer-container">

            <div className="d-none d-md-block"> {/* Oculta en dispositivos móviles */}
                <img src="/sliderFotos/slider-20.webp" alt="Imagen B&J" className="background-image" />
            </div>

            <div className="d-md-none"> {/* Oculta en dispositivos de escritorio */}
                <img src="/sliderFotos/slider-5.webp" alt="Imagen B&J" className="background-image" />
            </div>

            <div className="d-none d-md-block"> {/* Oculta en dispositivos móviles */}
                <div className="overlay-text">
                    <img src="/footer-text.webp" alt="Imagen" width="100%" height="auto" />
                </div>
            </div>

            <div className="d-md-none"> {/* Oculta en dispositivos de escritorio */}
                <div className="overlay-text-mobile">
                    <img src="/footer-text.webp" alt="Imagen Mobile" width="100%" />
                </div>
            </div>

        </div>
    );
};

export default ComponenteFooter;