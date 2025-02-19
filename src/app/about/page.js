import React from "react";
import "./page.css";
import { Journey } from "../components/Journey";
import { Case } from "../components/Case";

const page = () => {
  return (
    <>
      <div
        className="breadcrumb-area custom-breadcrumb bg-green bg-cover"
        style={{
          backgroundImage: `url('/img/about-banner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="container">
          <div className="breadcrumb-item">
            <div className="row">
              <div className="col-lg-8 ">
                <nav className="woocommerce-breadcrumb" aria-label="Breadcrumb">
                  <a href="https://wordpress.validthemes.net/dilabs">Home</a> /
                  About Us
                </nav>
                <h1 className="breadcumb-title">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-style-two-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 about-style-two">
              <div className="about-two-thumb">
                <img
                  decoding="async"
                  src="/img/about/4.jpg"
                  alt="Image Not Found"
                  className="img-fluid"
                />
                <div className="experience">
                  <h2>
                    <strong>18</strong> Years Experience
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-two-info">
                <h2 className="title">
                  Providing the best service <br /> In digital marketing
                </h2>
                <p className="desc">
                  Contrasted dissimilar get joy you instrument out reasonably.
                  Again keeps at no meant stuff. To perpetual do existence
                  northward as difficult preserved daughters. Continued at up to
                  zealously necessary breakfast. Surrounded sir motionless she
                  end literature. Gay direction neglected but supported yet her.
                </p>
                <div className="about-grid-info">
                  <a
                    href="https://wordpress.validthemes.net/dilabs/services-version-one/"
                    className="btn-round-animation"
                  >
                    Discover More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <ul className="list-info-item list-unstyled">
                    <li>
                      <h4>
                        <a href="https://wordpress.validthemes.net/dilabs/service-details/">
                          Design
                          <i className="fa-solid fa-angle-right"></i>
                        </a>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <a href="https://wordpress.validthemes.net/dilabs/service-details/">
                          Digital Solution
                          <i className="fa-solid fa-angle-right"></i>
                        </a>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <a href="https://wordpress.validthemes.net/dilabs/service-details/">
                          Strategy
                          <i className="fa-solid fa-angle-right"></i>
                        </a>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <a href="https://wordpress.validthemes.net/dilabs/service-details/">
                          Branding
                          <i className="fa-solid fa-angle-right"></i>
                        </a>
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="h4_service-area pt-130 pb-90">
        <div className="container">
          <div className="row mb-5 align-items-end">
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
              <div className="h4_section-area mb-20">
                <h2 className="title tp_title_slideup mb-0">
                  Content Created By Ai Lightning Speed.
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-4 col-sm-3">
              <div className="h4_service-navigation mb-30 tp_fade_left">
                <div className="h4_service-prev">
                  <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className="h4_service-next">
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper h4_service-active mt-5">
            <div className="swiper-wrapper">
              <Journey />
            </div>
          </div>
        </div>
      </section>

      <div className="feature-style-one-area section-gap">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="feature-style-one cont">
                <div className="info">
                  <h4>Our Mission & Vision</h4>
                  <p>Customize templates and create unique campaigns </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="feature-style-one cont">
                <div className="info">
                  <h4>Strategic Asset Management</h4>
                  <p>Reach goals on every communication channel </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="feature-style-one cont">
                <div className="info">
                  <h4>Autonomous Operations Framework</h4>
                  <p>Reach goals on every communication channel </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="case-studies-area section-gap">
        <div className="container">
          <div className="case-carousel swiper">
            <div className="heading-left">
              <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6">
                  <div className="content-left">
                    <h2 className="title">Our core capabilities</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-wrapper">
              <Case />
            </div>
          </div>
        </div>
      </div>

      <div className="our-team section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h2 className="title">
                  Our professional <br /> expert team members
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6 mb-30">
              <div className="team-style-one">
                <div className="thumb">
                  <img
                    decoding="async"
                    src="/img/team/1.jpg"
                    alt="Dilabs"
                    className="img-fluid"
                  />
                  <div className="team-info">
                    <div className="team-social">
                      <div className="share-link">
                        <i className="fa-solid fa-share-nodes"></i>
                        <ul>
                          <li className="facebook">
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="twitter">
                            <a href="#">
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li className="youtube">
                            <a href="#">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#">
                        <i className="fa-solid fa-message"></i>
                      </a>
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://wordpress.validthemes.net/dilabs/team-details/">
                          James Baker
                        </a>
                      </h4>
                      <span>Marketing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-30">
              <div className="team-style-one">
                <div className="thumb">
                  <img
                    decoding="async"
                    src="/img/team/2.jpg"
                    alt="Dilabs"
                    className="img-fluid"
                  />
                  <div className="team-info">
                    <div className="team-social">
                      <div className="share-link">
                        <i className="fa-solid fa-share-nodes"></i>
                        <ul>
                          <li className="facebook">
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="twitter">
                            <a href="#">
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li className="youtube">
                            <a href="#">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#">
                        <i className="fa-solid fa-message"></i>
                      </a>
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://wordpress.validthemes.net/dilabs/team-details/">
                          Dalton Grant
                        </a>
                      </h4>
                      <span>Project Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-30">
              <div className="team-style-one">
                <div className="thumb">
                  <img
                    decoding="async"
                    src="/img/team/3.jpg"
                    alt="Dilabs"
                    className="img-fluid"
                  />
                  <div className="team-info">
                    <div className="team-social">
                      <div className="share-link">
                        <i className="fa-solid fa-share-nodes"></i>
                        <ul>
                          <li className="facebook">
                            <a href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="twitter">
                            <a href="#">
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li className="youtube">
                            <a href="#">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <a href="#">
                        <i className="fa-solid fa-message"></i>
                      </a>
                    </div>
                    <div className="content">
                      <h4>
                        <a href="https://wordpress.validthemes.net/dilabs/team-details/">
                          Ryan Ricketts
                        </a>
                      </h4>
                      <span>Director</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
