"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export const Slider = () => {
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
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h4_testimonial-item">
            <div className="h4_testimonial-item-top">
              <ul className="h4_testimonial-rating list-unstyled">
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
              </ul>
              <div className="h4_testimonial-icon">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.49014 10.9091C2.041 10.3704 2.55055 9.72391 3.01878 8.9697C3.45947 8.21549 3.74867 7.46128 3.88638 6.70707C2.86729 6.70707 2.02723 6.42424 1.3662 5.85859C0.67762 5.29293 0.333332 4.49832 0.333332 3.47475C0.333332 2.47811 0.650078 1.6431 1.28357 0.969695C1.88951 0.323231 2.68826 0 3.67981 0C4.67136 0 5.48388 0.336699 6.11737 1.0101C6.72332 1.71044 7.02629 2.55892 7.02629 3.55555C7.02629 5.22559 6.61314 6.82828 5.78685 8.36364C4.96056 9.92593 3.91393 11.138 2.64695 12L1.49014 10.9091ZM9.46385 10.9091C10.0147 10.3704 10.5243 9.72391 10.9925 8.9697C11.4332 8.21549 11.7224 7.46128 11.8601 6.70707C10.841 6.70707 10.0009 6.42424 9.33991 5.85859C8.65133 5.29293 8.30704 4.49832 8.30704 3.47475C8.30704 2.47811 8.62379 1.6431 9.25728 0.969695C9.86322 0.323231 10.662 0 11.6535 0C12.6451 0 13.4576 0.336699 14.0911 1.0101C14.697 1.71044 15 2.55892 15 3.55555C15 5.22559 14.5869 6.82828 13.7606 8.36364C12.9343 9.92593 11.8876 11.138 10.6207 12L9.46385 10.9091Z"
                    fill="currentColor"
                    fillOpacity="1"
                  ></path>
                </svg>
              </div>
              <p>
                Maecenas eget ullamcorper dolor placerat ipsum. Aliquam dictum
                massa eu libero vehicula, id dapibus ligula vulputate. Donec
                arcu elit, pulvinar quis orci ut, tincidunt justo consectetur .
              </p>
            </div>
            <div className="h4_testimonial-head">
              <div className="h4_testimonial-head-img">
                <img src="/img/testimonial/5.png" alt="Image Not Found" />
              </div>
              <div className="h4_testimonial-head-info">
                <h6>Russell Sprout</h6>
                <span>Blog Writer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h4_testimonial-item">
            <div className="h4_testimonial-item-top">
              <ul className="h4_testimonial-rating list-unstyled">
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
              </ul>
              <div className="h4_testimonial-icon">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.49014 10.9091C2.041 10.3704 2.55055 9.72391 3.01878 8.9697C3.45947 8.21549 3.74867 7.46128 3.88638 6.70707C2.86729 6.70707 2.02723 6.42424 1.3662 5.85859C0.67762 5.29293 0.333332 4.49832 0.333332 3.47475C0.333332 2.47811 0.650078 1.6431 1.28357 0.969695C1.88951 0.323231 2.68826 0 3.67981 0C4.67136 0 5.48388 0.336699 6.11737 1.0101C6.72332 1.71044 7.02629 2.55892 7.02629 3.55555C7.02629 5.22559 6.61314 6.82828 5.78685 8.36364C4.96056 9.92593 3.91393 11.138 2.64695 12L1.49014 10.9091ZM9.46385 10.9091C10.0147 10.3704 10.5243 9.72391 10.9925 8.9697C11.4332 8.21549 11.7224 7.46128 11.8601 6.70707C10.841 6.70707 10.0009 6.42424 9.33991 5.85859C8.65133 5.29293 8.30704 4.49832 8.30704 3.47475C8.30704 2.47811 8.62379 1.6431 9.25728 0.969695C9.86322 0.323231 10.662 0 11.6535 0C12.6451 0 13.4576 0.336699 14.0911 1.0101C14.697 1.71044 15 2.55892 15 3.55555C15 5.22559 14.5869 6.82828 13.7606 8.36364C12.9343 9.92593 11.8876 11.138 10.6207 12L9.46385 10.9091Z"
                    fill="currentColor"
                    fillOpacity="1"
                  ></path>
                </svg>
              </div>
              <p>
                Maecenas eget ullamcorper dolor placerat ipsum. Aliquam dictum
                massa eu libero vehicula, id dapibus ligula vulputate. Donec
                arcu elit, pulvinar quis orci ut, tincidunt justo consectetur .
              </p>
            </div>
            <div className="h4_testimonial-head">
              <div className="h4_testimonial-head-img">
                <img src="/img/testimonial/5.png" alt="Image Not Found" />
              </div>
              <div className="h4_testimonial-head-info">
                <h6>Russell Sprout</h6>
                <span>Blog Writer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h4_testimonial-item">
            <div className="h4_testimonial-item-top">
              <ul className="h4_testimonial-rating list-unstyled">
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
              </ul>
              <div className="h4_testimonial-icon">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.49014 10.9091C2.041 10.3704 2.55055 9.72391 3.01878 8.9697C3.45947 8.21549 3.74867 7.46128 3.88638 6.70707C2.86729 6.70707 2.02723 6.42424 1.3662 5.85859C0.67762 5.29293 0.333332 4.49832 0.333332 3.47475C0.333332 2.47811 0.650078 1.6431 1.28357 0.969695C1.88951 0.323231 2.68826 0 3.67981 0C4.67136 0 5.48388 0.336699 6.11737 1.0101C6.72332 1.71044 7.02629 2.55892 7.02629 3.55555C7.02629 5.22559 6.61314 6.82828 5.78685 8.36364C4.96056 9.92593 3.91393 11.138 2.64695 12L1.49014 10.9091ZM9.46385 10.9091C10.0147 10.3704 10.5243 9.72391 10.9925 8.9697C11.4332 8.21549 11.7224 7.46128 11.8601 6.70707C10.841 6.70707 10.0009 6.42424 9.33991 5.85859C8.65133 5.29293 8.30704 4.49832 8.30704 3.47475C8.30704 2.47811 8.62379 1.6431 9.25728 0.969695C9.86322 0.323231 10.662 0 11.6535 0C12.6451 0 13.4576 0.336699 14.0911 1.0101C14.697 1.71044 15 2.55892 15 3.55555C15 5.22559 14.5869 6.82828 13.7606 8.36364C12.9343 9.92593 11.8876 11.138 10.6207 12L9.46385 10.9091Z"
                    fill="currentColor"
                    fillOpacity="1"
                  ></path>
                </svg>
              </div>
              <p>
                Maecenas eget ullamcorper dolor placerat ipsum. Aliquam dictum
                massa eu libero vehicula, id dapibus ligula vulputate. Donec
                arcu elit, pulvinar quis orci ut, tincidunt justo consectetur .
              </p>
            </div>
            <div className="h4_testimonial-head">
              <div className="h4_testimonial-head-img">
                <img src="/img/testimonial/5.png" alt="Image Not Found" />
              </div>
              <div className="h4_testimonial-head-info">
                <h6>Russell Sprout</h6>
                <span>Blog Writer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h4_testimonial-item">
            <div className="h4_testimonial-item-top">
              <ul className="h4_testimonial-rating list-unstyled">
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
              </ul>
              <div className="h4_testimonial-icon">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.49014 10.9091C2.041 10.3704 2.55055 9.72391 3.01878 8.9697C3.45947 8.21549 3.74867 7.46128 3.88638 6.70707C2.86729 6.70707 2.02723 6.42424 1.3662 5.85859C0.67762 5.29293 0.333332 4.49832 0.333332 3.47475C0.333332 2.47811 0.650078 1.6431 1.28357 0.969695C1.88951 0.323231 2.68826 0 3.67981 0C4.67136 0 5.48388 0.336699 6.11737 1.0101C6.72332 1.71044 7.02629 2.55892 7.02629 3.55555C7.02629 5.22559 6.61314 6.82828 5.78685 8.36364C4.96056 9.92593 3.91393 11.138 2.64695 12L1.49014 10.9091ZM9.46385 10.9091C10.0147 10.3704 10.5243 9.72391 10.9925 8.9697C11.4332 8.21549 11.7224 7.46128 11.8601 6.70707C10.841 6.70707 10.0009 6.42424 9.33991 5.85859C8.65133 5.29293 8.30704 4.49832 8.30704 3.47475C8.30704 2.47811 8.62379 1.6431 9.25728 0.969695C9.86322 0.323231 10.662 0 11.6535 0C12.6451 0 13.4576 0.336699 14.0911 1.0101C14.697 1.71044 15 2.55892 15 3.55555C15 5.22559 14.5869 6.82828 13.7606 8.36364C12.9343 9.92593 11.8876 11.138 10.6207 12L9.46385 10.9091Z"
                    fill="currentColor"
                    fillOpacity="1"
                  ></path>
                </svg>
              </div>
              <p>
                Maecenas eget ullamcorper dolor placerat ipsum. Aliquam dictum
                massa eu libero vehicula, id dapibus ligula vulputate. Donec
                arcu elit, pulvinar quis orci ut, tincidunt justo consectetur .
              </p>
            </div>
            <div className="h4_testimonial-head">
              <div className="h4_testimonial-head-img">
                <img src="/img/testimonial/5.png" alt="Image Not Found" />
              </div>
              <div className="h4_testimonial-head-info">
                <h6>Russell Sprout</h6>
                <span>Blog Writer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h4_testimonial-item">
            <div className="h4_testimonial-item-top">
              <ul className="h4_testimonial-rating list-unstyled">
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
              </ul>
              <div className="h4_testimonial-icon">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.49014 10.9091C2.041 10.3704 2.55055 9.72391 3.01878 8.9697C3.45947 8.21549 3.74867 7.46128 3.88638 6.70707C2.86729 6.70707 2.02723 6.42424 1.3662 5.85859C0.67762 5.29293 0.333332 4.49832 0.333332 3.47475C0.333332 2.47811 0.650078 1.6431 1.28357 0.969695C1.88951 0.323231 2.68826 0 3.67981 0C4.67136 0 5.48388 0.336699 6.11737 1.0101C6.72332 1.71044 7.02629 2.55892 7.02629 3.55555C7.02629 5.22559 6.61314 6.82828 5.78685 8.36364C4.96056 9.92593 3.91393 11.138 2.64695 12L1.49014 10.9091ZM9.46385 10.9091C10.0147 10.3704 10.5243 9.72391 10.9925 8.9697C11.4332 8.21549 11.7224 7.46128 11.8601 6.70707C10.841 6.70707 10.0009 6.42424 9.33991 5.85859C8.65133 5.29293 8.30704 4.49832 8.30704 3.47475C8.30704 2.47811 8.62379 1.6431 9.25728 0.969695C9.86322 0.323231 10.662 0 11.6535 0C12.6451 0 13.4576 0.336699 14.0911 1.0101C14.697 1.71044 15 2.55892 15 3.55555C15 5.22559 14.5869 6.82828 13.7606 8.36364C12.9343 9.92593 11.8876 11.138 10.6207 12L9.46385 10.9091Z"
                    fill="currentColor"
                    fillOpacity="1"
                  ></path>
                </svg>
              </div>
              <p>
                Maecenas eget ullamcorper dolor placerat ipsum. Aliquam dictum
                massa eu libero vehicula, id dapibus ligula vulputate. Donec
                arcu elit, pulvinar quis orci ut, tincidunt justo consectetur .
              </p>
            </div>
            <div className="h4_testimonial-head">
              <div className="h4_testimonial-head-img">
                <img src="/img/testimonial/5.png" alt="Image Not Found" />
              </div>
              <div className="h4_testimonial-head-info">
                <h6>Russell Sprout</h6>
                <span>Blog Writer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="h4_testimonial-item">
            <div className="h4_testimonial-item-top">
              <ul className="h4_testimonial-rating list-unstyled">
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
                <li>
                  <i className="fa-solid fa-star"></i>
                </li>
              </ul>
              <div className="h4_testimonial-icon">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.49014 10.9091C2.041 10.3704 2.55055 9.72391 3.01878 8.9697C3.45947 8.21549 3.74867 7.46128 3.88638 6.70707C2.86729 6.70707 2.02723 6.42424 1.3662 5.85859C0.67762 5.29293 0.333332 4.49832 0.333332 3.47475C0.333332 2.47811 0.650078 1.6431 1.28357 0.969695C1.88951 0.323231 2.68826 0 3.67981 0C4.67136 0 5.48388 0.336699 6.11737 1.0101C6.72332 1.71044 7.02629 2.55892 7.02629 3.55555C7.02629 5.22559 6.61314 6.82828 5.78685 8.36364C4.96056 9.92593 3.91393 11.138 2.64695 12L1.49014 10.9091ZM9.46385 10.9091C10.0147 10.3704 10.5243 9.72391 10.9925 8.9697C11.4332 8.21549 11.7224 7.46128 11.8601 6.70707C10.841 6.70707 10.0009 6.42424 9.33991 5.85859C8.65133 5.29293 8.30704 4.49832 8.30704 3.47475C8.30704 2.47811 8.62379 1.6431 9.25728 0.969695C9.86322 0.323231 10.662 0 11.6535 0C12.6451 0 13.4576 0.336699 14.0911 1.0101C14.697 1.71044 15 2.55892 15 3.55555C15 5.22559 14.5869 6.82828 13.7606 8.36364C12.9343 9.92593 11.8876 11.138 10.6207 12L9.46385 10.9091Z"
                    fill="currentColor"
                    fillOpacity="1"
                  ></path>
                </svg>
              </div>
              <p>
                Maecenas eget ullamcorper dolor placerat ipsum. Aliquam dictum
                massa eu libero vehicula, id dapibus ligula vulputate. Donec
                arcu elit, pulvinar quis orci ut, tincidunt justo consectetur .
              </p>
            </div>
            <div className="h4_testimonial-head">
              <div className="h4_testimonial-head-img">
                <img src="/img/testimonial/5.png" alt="Image Not Found" />
              </div>
              <div className="h4_testimonial-head-info">
                <h6>Russell Sprout</h6>
                <span>Blog Writer</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
