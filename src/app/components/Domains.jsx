"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export const Domains = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="row">
            <div className="col-xl-4">
              <div className="choose-us-style-two">
                <h2 className="title mb-5">
                  Grow business <br /> with creative <br /> ideas
                </h2>
                <div className="domain-desc">
                  <p className="desc">
                    Our predictive capabilities leverage AI models like deep
                    learning, Bayesian networks, and probabilistic graphical
                    models to anticipate failures before they occur. Using
                    high-resolution time-series forecasting, federated learning,
                    and anomaly detection, we process real-time data from SCADA,
                    IoT sensors, and edge computing nodes. Built on
                    domain-specific datasets, our models dynamically
                    recalibrate, enabling millisecond-precision predictive
                    maintenance while continuously improving failure
                    classification and degradation modelling.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-7 offset-xl-1 text-end">
              <div className="choose-us-style-two-thumb">
                <div className="curve-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    version="1.1"
                  >
                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                    <text>
                      <textPath href="#textPath">
                        Award winning creative digital agency
                      </textPath>
                    </text>
                  </svg>
                </div>
                <h4>We have worked for you</h4>
                <h2 className="text-path">since 1980</h2>
                <img
                  src="/img/about-service.jpg"
                  alt="Image Not Found"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-xl-4">
              <div className="choose-us-style-two">
                <h2 className="title mb-5">
                  Grow business <br /> with creative <br /> ideas
                </h2>
                <div className="domain-desc">
                  <p className="desc">
                    Our predictive capabilities leverage AI models like deep
                    learning, Bayesian networks, and probabilistic graphical
                    models to anticipate failures before they occur. Using
                    high-resolution time-series forecasting, federated learning,
                    and anomaly detection, we process real-time data from SCADA,
                    IoT sensors, and edge computing nodes. Built on
                    domain-specific datasets, our models dynamically
                    recalibrate, enabling millisecond-precision predictive
                    maintenance while continuously improving failure
                    classification and degradation modelling.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-7 offset-xl-1 text-end">
              <div className="choose-us-style-two-thumb">
                <div className="curve-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    version="1.1"
                  >
                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                    <text>
                      <textPath href="#textPath">
                        Award winning creative digital agency
                      </textPath>
                    </text>
                  </svg>
                </div>
                <h4>We have worked for you</h4>
                <h2 className="text-path">since 1980</h2>
                <img
                  src="/img/about-service.jpg"
                  alt="Image Not Found"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="row">
            <div className="col-xl-4">
              <div className="choose-us-style-two">
                <h2 className="title mb-5">
                  Grow business <br /> with creative <br /> ideas
                </h2>
                <div className="domain-desc">
                  <p className="desc">
                    Our predictive capabilities leverage AI models like deep
                    learning, Bayesian networks, and probabilistic graphical
                    models to anticipate failures before they occur. Using
                    high-resolution time-series forecasting, federated learning,
                    and anomaly detection, we process real-time data from SCADA,
                    IoT sensors, and edge computing nodes. Built on
                    domain-specific datasets, our models dynamically
                    recalibrate, enabling millisecond-precision predictive
                    maintenance while continuously improving failure
                    classification and degradation modelling.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-7 offset-xl-1 text-end">
              <div className="choose-us-style-two-thumb">
                <div className="curve-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    version="1.1"
                  >
                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                    <text>
                      <textPath href="#textPath">
                        Award winning creative digital agency
                      </textPath>
                    </text>
                  </svg>
                </div>
                <h4>We have worked for you</h4>
                <h2 className="text-path">since 1980</h2>
                <img
                  src="/img/about-service.jpg"
                  alt="Image Not Found"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
