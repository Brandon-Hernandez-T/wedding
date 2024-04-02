import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);
import styles from '@/styles/ComponenteSlider.css';

const ComponenteSlider = () => {
    return (
        <div className="row">
            <AutoplaySlider
                play={true}
                interval={3000}
                cancelOnInteraction={false}
                bullets={false}
                animation="cubeAnimation"
                infinite
                media={[
                    // {
                    //     source: '/sliderFotos/slider-1.webp',
                    // },
                    {
                        source: '/sliderFotos/slider-20.webp',
                    },
                    {
                        source: '/sliderFotos/slider-2.webp',
                    },
                    {
                        source: '/sliderFotos/slider-3.webp',
                    },
                    {
                        source: '/sliderFotos/slider-4.webp',
                    },
                    // {
                    //     source: '/sliderFotos/slider-5.webp',
                    // },
                    {
                        source: '/sliderFotos/slider-6.webp',
                    },
                    {
                        source: '/sliderFotos/slider-7.webp',
                    },
                    {
                        source: '/sliderFotos/slider-8.webp',
                    },
                    // {
                    //     source: '/sliderFotos/slider-9.webp',
                    // },
                    {
                        source: '/sliderFotos/slider-10.webp',
                    },
                    {
                        source: '/sliderFotos/slider-11.webp',
                    },
                    {
                        source: '/sliderFotos/slider-12.webp',
                    },
                    {
                        source: '/sliderFotos/slider-13.webp',
                    },
                    // {
                    //     source: '/sliderFotos/slider-14.webp',
                    // },
                    {
                        source: '/sliderFotos/slider-15.webp',
                    },
                    {
                        source: '/sliderFotos/slider-16.webp',
                    },
                    {
                        source: '/sliderFotos/slider-17.webp',
                    },
                    {
                        source: '/sliderFotos/slider-18.webp',
                    },
                    {
                        source: '/sliderFotos/slider-19.webp',
                    },
                ]}
            />
        </div>
    );
};

export default ComponenteSlider;