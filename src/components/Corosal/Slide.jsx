import './Slide.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import Sc from '../Swiper_comp/Sc';
import { RecommendationBannerData } from '../../MockData'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Importing arrow icons

const Slide = () => {
  const swiperRef = useRef(null); // Reference to control the Swiper

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev(); // Accessing the swiper instance
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext(); // Accessing the swiper instance
  };

  return (
    <div className="swiper-container">
      <Swiper
        ref={swiperRef}
        slidesPerView={1.7}
        spaceBetween={30}
        className="mySwiper"
      >
        {RecommendationBannerData.map((event, index) => (
          <SwiperSlide key={index}>
            <Sc event={event} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="carousel-controls">
        <button className="carousel-button prev-button" onClick={handlePrev}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="carousel-button next-button" onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Slide;
