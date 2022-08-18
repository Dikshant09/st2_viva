import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import projects from '../Projects/projectData';
import { images } from '../../constants';

const Slider = () => {
  return (
    <Swiper
    slidesPerView={1}
    pagination={{ clickable: true }}
    className="swiper-container"
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    scrollbar={{ draggable: true }}
  >
    {projects.map(({id, imgUrl, title }) => (
      <SwiperSlide
        key={id}
        // onClick={() => navigate(`/category/${data.type}/${id}`)}
      >
        <div
          style={{
            background: `url(${images[imgUrl]}) center no-repeat`,
            backgroundSize: "cover",
            height: "250px",
          }}
          className="swiperSlideDiv"
        >
          <p className="swiperSlideText">{title}</p>
          <p className="swiperSlidePrice">
            {/* ${data.discountedPrice ?? data.regularPrice}{" "} */}
            {/* {data === "rent" && "/ month"} */}
          </p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default Slider;