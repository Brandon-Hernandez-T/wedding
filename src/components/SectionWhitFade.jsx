import React from 'react';
import { Fade } from 'react-swift-reveal';
import { useInView } from 'react-intersection-observer';

const SectionWithFade = ({ children, isWhite }) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // para que solo se active una vez
        rootMargin: '-100px 0px', // ajusta según tus necesidades
    });

    return (
        <div
            ref={ref}
            className='row d-flex align-items-center justify-content-center text-center'
            style={isWhite ?
                {
                    backgroundColor: 'white',
                    backgroundImage: `url('/fondo-image_1.webp')`,
                    backgroundSize: 'cover',
                    overflow: 'hidden',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                }
                :
                {
                    backgroundImage: `url('/fondo_image_2.webp')`,
                    backgroundSize: 'cover',
                    overflow: 'hidden',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                }}
        >
            <Fade duration={1000} delay={500} distance="30px">
                {children}
            </Fade>

        </div>
    );
};

export default SectionWithFade;