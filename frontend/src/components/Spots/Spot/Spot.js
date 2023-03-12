import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Spot.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { NavLink } from "react-router-dom";

export default function Spot({ spot }) {
  return (
    <>
      <NavLink to={`/spots/${spot.id}`}>
        <Swiper
          slidesPerView={1}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={spot?.previewImage} />
          </SwiperSlide>
          {spot?.otherImages.map((img) => (
            <SwiperSlide>
              <img src={img.url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </NavLink>
    </>
  );
}
