import React, { useRef, useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";

import ListingCarouselSlide from "./ListingCarouselSlide";

export default function ListingCarousel({ spotsList, user }) {
  const swiperRef = useRef();

  const [page, setPage] = useState(1);

  let reviews = useSelector((state) => Object.values(state.reviews));

  let userList = [];

  let maxNum = 0;
  let minNum = 0;

  for (let spot of spotsList) {
    if (spot.ownerId === user?.id) {
      userList.push(spot);
      reviews = reviews.filter((review) => review.spotId === spot.id);
      maxNum += 1;
    }
  }

  return (
    <div className="user-carousel">
      {userList.length > 2 && page - 1 > minNum && (
        <button
          className="carousel-left"
          onClick={() => {
            setPage((prev) => prev - 1);

            swiperRef.current?.slidePrev();
          }}
        >
          <VscChevronLeft />
        </button>
      )}

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
      >
        {Object.values(spotsList).map(
          (spot) =>
            user?.id === spot.ownerId && (
              <SwiperSlide>
                <ListingCarouselSlide spot={spot} />
              </SwiperSlide>
            )
        )}
      </Swiper>

      {userList.length > 2 && page < maxNum - 1 && (
        <button
          className="carousel-right"
          onClick={() => {
            setPage((prev) => prev + 1);

            swiperRef.current?.slideNext();
          }}
        >
          <VscChevronRight />
        </button>
      )}
    </div>
  );
}
