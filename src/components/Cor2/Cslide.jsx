import './Cslide.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';
import Sw from '../Swiper2_comp/Sw';
import { charliData } from '../../MockData';
 
const Cslide = () => {
  const swiperRef = useRef(null); 

    const [slides, setSlides] = useState(2.3);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // State for window width

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      if (window.innerWidth <= 1200) {
        setSlides(2.3);
      } else {
        setSlides(1.7);
      }
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    useEffect(() => {
      if (windowWidth > 1200) {
        setSlides(2.1);
      } else if (windowWidth <= 1200 && windowWidth > 768) {
        setSlides(2.3);
      } else if (windowWidth <= 768 && windowWidth > 576) {
        setSlides(2);
      } else {
        setSlides(1);
      }
    }, [windowWidth]);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev(); 
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext(); 
  };

  return (
    <div className="charli-swiper-container">
      <Swiper
        ref={swiperRef}
        slidesPerView={slides}
        spaceBetween={30}
        className="charli-mySwiper"
      >
        {charliData.map((event, index) => (
          <SwiperSlide key={index}>
            <Sw event={event} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="carousel-controls charli-carousel-controls">
        <button className="carousel-button prev-button" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="rgb(178, 178, 178)"
          >
            <path d="M10.5 250.2l-6 5.8 6 5.8 184 176 5.8 5.5 11.1-11.6-5.8-5.5L35.9 264 440 264l8 0 0-16-8 0L35.9 248 205.5 85.8l5.8-5.5L200.3 68.7l-5.8 5.5-184 176z" />
          </svg>
        </button>{" "}
        <button className="carousel-button next-button" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="rgb(178, 178, 178)"
          >
            <path d="M445.5 261.8c1.6-1.5 2.5-3.6 2.5-5.8s-.9-4.3-2.5-5.8l-192-184c-3.2-3.1-8.3-2.9-11.3 .2s-2.9 8.3 .2 11.3L420.1 248 8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l412.1 0L242.5 434.2c-3.2 3.1-3.3 8.1-.2 11.3s8.1 3.3 11.3 .2l192-184z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Cslide;

