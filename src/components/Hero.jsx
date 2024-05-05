import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import data from "../data/data";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-contact">
          <div className="hero-contact-items">
            <div className="hero-contact-item">
              <FaPhoneAlt />
              <span>
                <p>(+994 12) 408-72-45</p>
                <p>(+994 70) 715-55-00</p>
              </span>
            </div>
            <div className="hero-contact-item">
              <FaLocationDot />
              <p>
                Binəqədi ray., Novxanı qəs., Dəniz sahili, Sarıqaya küç. AZ0119
              </p>
            </div>
          </div>
        </div>
        <Swiper
          className="swiper-hero"
          direction={"horizontal"}
          loop={true}
          initialSlide={0}
          pagination={{
            el: ".hero-pagination",
            clickable: true,
            bulletClass: "hero-bullet",
            bulletActiveClass: "hero-bullet-active",
          }}
          modules={[Pagination]}
          breakpoints={{
            1024: {
              direction: "vertical",
            },
          }}
        >
          {data.heroSwiper.map((swiper) => (
            <SwiperSlide key={swiper.id} className="swiper-hero-slide">
              <img src={swiper.img} alt="Hero Image" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hero-pagination"></div>
      </div>
    </section>
  );
};

export default Hero;
