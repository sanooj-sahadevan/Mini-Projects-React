/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

function formatTime(){
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridien = hours >= 12 ? "PM" :"AM"
    hours = hours %12 || 12

return `${zero(hours)}:${zero(minutes)}:${zero(seconds)}:${zero(meridien)}`;
}



function zero(time){
    return time<10? '0'+time: time}




    return (
        <div className='classContainer'>
            <div className='clock'>
                <span>{formatTime(time)}</span>
            </div>
        </div>
    );
}

export default DigitalClock;
