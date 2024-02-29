'use client'
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../styles/ComponentCountdown.css'

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
            <div className="countdown-item col-md-3 col-6">
                <span>{timeRemaining.days}</span>
                <p>Días</p>
            </div>
            <div className="countdown-item col-md-3 col-6">
                <span>{timeRemaining.hours}</span>
                <p>Horas</p>
            </div>
            <div className="countdown-item col-md-3 col-6">
                <span>{timeRemaining.minutes}</span>
                <p>Minutos</p>
            </div>
            <div className="countdown-item col-md-3 col-6">
                <span>{timeRemaining.seconds}</span>
                <p>Segundos</p>
            </div>
        </div>
    );
};

export default WeddingCountdown;