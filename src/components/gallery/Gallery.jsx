import React, { useState, useEffect }  from 'react'
import './Gallery.css'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import gallery2 from'../../assets/images/gallery-img-2.jpg'
import gallery3 from'../../assets/images/gallery-img-3.jpg'

export default () => {
  const [images, setImages] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [numberOfSlides, setnumberOfSlides] = useState(3)

  useEffect(() => {
    const importedImages = [gallery3, gallery2, gallery3, gallery2];
    setImages(importedImages);
  }, [])

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 420) {
      setnumberOfSlides(1)
    } else if (screenWidth >= 420 && screenWidth < 1024) {
      setnumberOfSlides(2)
    }
    else {
      setnumberOfSlides(3)
    }
  }, [screenWidth]);

  return (
    <section className="gallery">
      <div className="container">
      <h2 className="h2 section-title">Tournaments</h2>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={numberOfSlides}
            navigation
     
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <figure className="gallery-item">
                  <img src={image} alt="Gallery image" />
                </figure>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
    
  );
};