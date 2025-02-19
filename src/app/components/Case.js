"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export const Case = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="case-style-two">
            <div className="row">
              <div className="col-xl-6">
                <div className="case-thumb">
                  <img src="/img/gallery/7.jpg" alt="Image Not Found" />
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="info text-light"
                  // style="background-image: url(assets/img/shape/banner-3.webp);"
                >
                  <h2>Predict</h2>
                  <p>
                    Our predictive capabilities leverage AI models, including
                    deep learning and probabilistic graphical models, to
                    anticipate equipment failures and inefficiencies before they
                    occur. We utilize advanced time-series forecasting and
                    anomaly detection with data from high-frequency sensors and
                    SCADA systems. Built on robust training datasets, our models
                    enable real-time predictive maintenance with millisecond
                    precision, continuously updating and dynamically
                    recalibrating as new data streams in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="case-style-two">
            <div className="row">
              <div className="col-xl-6">
                <div className="case-thumb">
                  <img src="/img/gallery/8.jpg" alt="Image Not Found" />
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="info text-light"
                  // style="background-image: url(assets/img/shape/banner-3.webp);"
                >
                  <h2>Prevent</h2>
                  <p>
                    We employ multi-agent systems and decentralized AI for
                    autonomous management. We process data at the source for
                    immediate anomaly detection. Reinforcement learning
                    optimizes maintenance schedules by enhancing decision-making
                    under uncertainty. We deploy digital twins for real-time
                    simulations and proactive interventions, preventing
                    cascading failures. Augmented with causal inference and
                    correlations, we ensure coordinated responses across
                    multiple assets, minimizing the risk of widespread
                    disruptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="case-style-two">
            <div className="row">
              <div className="col-xl-6">
                <div className="case-thumb">
                  <img src="/img/gallery/7.jpg" alt="Image Not Found" />
                </div>
              </div>
              <div className="col-xl-6">
                <div
                  className="info text-light"
                  // style="background-image: url(assets/img/shape/banner-3.webp);"
                >
                  <h2>Perform</h2>
                  <p>
                    We maximize energy plant performance using algorithms like
                    convex optimization, evolutionary algorithms, and neural
                    network-based controllers. Our autonomous control systems
                    employ model predictive control (MPC) for real-time
                    adjustments, ensuring peak efficiency. We integrate
                    distributed ledger technology (DLT) for secure energy
                    transactions and decentralized management. Additionally,
                    adaptive learning systems refine strategies with genetic
                    algorithms and ensemble learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
