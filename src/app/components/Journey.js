"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export const Journey = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".h4_service-prev",
          prevEl: ".h4_service-next",
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h4_service-item mb-30 tp_fade_left">
            <span className="h4_service-item-number">01</span>
            <h5 className="h4_service-item-title">
              <a href="service-details.html">AI Powered Results</a>
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h4_service-item mb-30 tp_fade_left">
            <span className="h4_service-item-number">02</span>
            <h5 className="h4_service-item-title">
              <a href="service-details.html">Payment Gateways</a>
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h4_service-item mb-30 tp_fade_left">
            <span className="h4_service-item-number">03</span>
            <h5 className="h4_service-item-title">
              <a href="service-details.html">Multi Lingual</a>
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h4_service-item mb-30 tp_fade_left">
            <span className="h4_service-item-number">04</span>
            <h5 className="h4_service-item-title">
              <a href="service-details.html">Support Platform</a>
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h4_service-item mb-30 tp_fade_left">
            <span className="h4_service-item-number">05</span>
            <h5 className="h4_service-item-title">
              <a href="service-details.html">AI Powered Results</a>
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h4_service-item mb-30 tp_fade_left">
            <span className="h4_service-item-number">06</span>
            <h5 className="h4_service-item-title">
              <a href="service-details.html">Payment Gateways</a>
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
