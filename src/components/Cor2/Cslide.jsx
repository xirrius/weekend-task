import './Cslide.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import Sw from '../Swiper2_comp/Sw';
import { charliData } from '../../MockData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Cslide = () => {
  const swiperRef = useRef(null); 

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
        slidesPerView={1.7}
        spaceBetween={30}
        className="charli-mySwiper"
      >
        {charliData.map((event, index) => (
          <SwiperSlide key={index}>
            <Sw event={event} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="charli-carousel-controls">
        <button className="charli-carousel-button charli-prev-button" onClick={handlePrev}>
        <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="charli-carousel-button charli-next-button" onClick={handleNext}>
        <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Cslide;

