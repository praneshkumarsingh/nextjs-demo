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
          nextEl: ".journey-prev",
          prevEl: ".journey-next",
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="journey-item mb-30 tp_fade_left">
            <span className="journey-item-number">01</span>
            <h5 className="journey-item-title">
              <a href="service-details.html">AI Powered Results</a>
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="journey-item mb-30 tp_fade_left">
            <span className="journey-item-number">02</span>
            <h5 className="journey-item-title">
              <a href="service-details.html">Payment Gateways</a>
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="journey-item mb-30 tp_fade_left">
            <span className="journey-item-number">03</span>
            <h5 className="journey-item-title">
              <a href="service-details.html">Multi Lingual</a>
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="journey-item mb-30 tp_fade_left">
            <span className="journey-item-number">04</span>
            <h5 className="journey-item-title">
              <a href="service-details.html">Support Platform</a>
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="journey-item mb-30 tp_fade_left">
            <span className="journey-item-number">05</span>
            <h5 className="journey-item-title">
              <a href="service-details.html">AI Powered Results</a>
            </h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="journey-item mb-30 tp_fade_left">
            <span className="journey-item-number">06</span>
            <h5 className="journey-item-title">
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
