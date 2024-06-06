import React, { useEffect, useRef, useState } from 'react'; 

const formatTime = (time) => {
  let days = Math.floor(time / (24 * 60 * 60));
  let hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  let minutes = Math.floor((time % (60 * 60)) / 60);
  let seconds = Math.floor(time % 60);

  return `${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para tus vacaciones`;
};

export default function Countdown({ targetDate }) {
  const images = [
    'https://wallpapercave.com/wp/wp9203601.jpg',
    'https://www.spain.info/.content/imagenes/cabeceras-grandes/cataluna/casa-pau-casals-el-vendrel_c-costa-daurada.jpg',
    'https://img.yellohvillage.fr/var/plain_site/storage/images/_aliases/img_panoramique_fullwidth_mobile/site_marchand/choisissez_votre_camping/par_ville/calafell/2242428-1-fre-FR/calafell.jpg',
    'https://www.turismoenmilan.com/wp-content/uploads/2022/02/Lauterbrunnen-en-los-Alpes-Suizos-scaled.webp',
    'https://lh3.googleusercontent.com/p/AF1QipObET6paaDr3ee4qsDO3b0-h2j7ToRGLeio-zoN=s680-w680-h510-rw',
    'https://s3-eu-west-3.amazonaws.com/hotelbreakblog/2022/09/sala-relajacion-hotel-spa-barcelona-theone-1.jpeg',
    
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, [images.length]);

  const calculateSecondsLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    return Math.floor((target - now) / 1000);
  };

  const calculateInitialSeconds = () => {
    const start = new Date('2024-05-20'); 
    const target = new Date(targetDate);
    return Math.floor((target - start) / 1000);
  };

  const [countdown, setCountdown] = useState(calculateSecondsLeft);
  const timerId = useRef();
  const progressBarRef = useRef(null);
  const initialSeconds = useRef(calculateInitialSeconds());

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      alert("¡Han comenzado tus vacaciones!");
    }
    const progress = ((initialSeconds.current - calculateSecondsLeft()) / initialSeconds.current) * 100;
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${progress}%`;
    }
  }, [countdown]);

  return (
    <div className="background" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <div className="overlay">
        <h2>{formatTime(countdown)}</h2>
        <div className="progress-container">
          <div className="progress-bar" ref={progressBarRef}></div>
        </div>
      </div>
    </div>
  );
}