import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { message } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/galleries`);
        if (response.ok) {
          const data = await response.json();
          setGallery(data);
        } else {
          message.error("Galereya yüklənərkən xəta baş verdi");
        }
      } catch (error) {
        console.log(error);
        message.error("Server error. Please try again later.");
      }
    };
    fetchData();
  }, [apiUrl]);

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
                {gallery.map((img) => (
                  <SwiperSlide key={img._id}>
                    <img
                      src={img.galleryImage}
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
