import data from "../data/data";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="gallery-container">
        <div className="gallery-main">
          <div className="gallery-contents">
            <div className="gallery-title">
              <h1>QALEREYA</h1>
            </div>
            <div className="gallery-swiper">
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={5}
                loop={true}
                centeredSlides={true}
                pagination={{ clickable: true }}
                initialSlide={2}
                navigation={{
                  clickable: true,
                  el: ".swiper-pagination",
                  bulletClass: "gallery-bullet",
                  bulletActiveClass: "gallery-bullet-active",
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
              >
                {data.galleryItems.map((img) => (
                  <SwiperSlide key={img.id}>
                    <img
                      src={img.img}
                      alt="Gallery"
                      className="h-full w-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="gallery-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
