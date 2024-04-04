'use client'
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { MdOutlineTimer } from "react-icons/md";
import '../styles/ComponentCountdown.css';

const WeddingCountdown = ({ weddingDate }) => {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function calculateTimeRemaining() {
        const now = moment();
        const weddingDateTime = moment(weddingDate);
        const diff = weddingDateTime.diff(now);

        const duration = moment.duration(diff);
        const days = Math.floor(duration.asDays());
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        return { days, hours, minutes, seconds };
    }

    return (
        <div className="wedding-countdown row" >
            <div className="countdown-item col-md-12 col-12 space-vertical-title">
                <h1 className='text-titulo' > <strong> <MdOutlineTimer /> YA SÓLO FALTAN </strong> </h1>
            </div>
            <div className="countdown-item col-md-3 col-6  space-vertical-timer">
                <span>{timeRemaining.days}</span>
                <p>Días</p>
            </div>
            <div className="countdown-item col-md-3 col-6 space-vertical-timer">
                <span>{timeRemaining.hours}</span>
                <p>Horas</p>
            </div>
            <div className="countdown-item col-md-3 col-6 space-vertical-timer">
                <span>{timeRemaining.minutes}</span>
                <p>Minutos</p>
            </div>
            <div className="countdown-item col-md-3 col-6 space-vertical-timer">
                <span>{timeRemaining.seconds}</span>
                <p>Segundos</p>
            </div>

            <div className="countdown-item col-md-12 col-12 space-vertical-title" >
                <audio controls autoPlay loop >
                    {/* <source src="/song_byj.wav" type="audio/wav" /> */}
                    <source src="https://www.dropbox.com/scl/fi/gc90h35wgikb5gnfshckb/song_byj.wav?rlkey=bh71psi6ekfz62b7msk5enysy&dl=1" type="audio/wav" />
                    Tu navegador no soporta la reproducción de audio.
                </audio>
            </div>

        </div>
    );
};

export default WeddingCountdown;