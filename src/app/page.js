import React from "react";
import "./page.css";
import { GoArrowUpRight } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { Slider } from "./components/Slider";

function page() {
  return (
    <>
      <section className="hero">
        <div className="hero-banner">
          <video autoPlay muted loop>
            <source src="/banner-video.mp4" type="video/mp4" />
          </video>
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="home-content text-center">
                  <div className="gradient-sub-border-wrap">
                    <span className="gradient-sub">
                      The Ultimate AI-powered solutions
                    </span>
                  </div>
                  <h1>Explore the Fastest AI Powered Content Generator</h1>
                  <p className="mb-5">
                    Embark on a journey of unparalleled speed and creativity as
                    we delve into the fastest AI-powered content generator,
                    revolutionizing the landscape of content creation.
                  </p>

                  <a href="" className="default-btn">
                    Get Started
                    <GoArrowUpRight />
                  </a>
                  <a href="#!" className="default-btn style-two ms-4">
                    Learn More
                    <BsArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-story section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="story-wapper text-light">
                <ul className="check-list-item list-unstyled">
                  <li>
                    <div className="icon-wapper">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="content">
                      <h5>Professional Agency</h5>
                      <p>
                        Consectetur adipisci velitsed quia non numquam eius
                        tempralabore et dolore magnam aliquam quaerat
                      </p>
                    </div>
                  </li>
                  <li className="border-0 pb-0 mb-0">
                    <div className="icon-wapper">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="content">
                      <h5>Solutions Provider</h5>
                      <p>
                        Know more about digital direct response than virtually
                        any digital marketing agency in the industry.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="story-title">
                <h3>
                  Providing the best service <br />
                  In <span>digital</span> marketing
                </h3>
              </div>

              <div className="video-wapper">
                <video className="video-live" autoPlay loop muted>
                  <source src="/video.mp4" type="video/mp4" />
                </video>
                <a
                  href="#"
                  className="popup-youtube video-play-button with-text mt-20"
                >
                  <div className="effect"></div>
                  <span>
                    <i className="fa-solid fa-play"></i> OUR STORY
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose section-gap section-bg ">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-5">
              <div className="achivement-counter">
                <ul className="list-unstyled">
                  <li>
                    <div className="icon">
                      <img src="/img/startup.png" className="img-fluid" />
                    </div>
                    <div className="fun-fact">
                      <div className="counter">
                        <div className="timer" data-to="500" data-speed="2000">
                          500
                        </div>
                        <div className="operator">+</div>
                      </div>
                      <span className="medium">
                        Business advices given <br /> over 30 years
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/team.png" className="img-fluid" />
                    </div>
                    <div className="fun-fact">
                      <div className="counter">
                        <div className="timer" data-to="30" data-speed="2000">
                          30
                        </div>
                        <div className="operator">+</div>
                      </div>
                      <span className="medium">
                        Business Excellence <br /> awards achieved
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="align-self-center">
                <div className="choose-caption">
                  {/* <h5 className="sub-title">Why Choose Us</h5> */}
                  <h2 className="title">
                    Get benifits and <br /> advantages market goal
                  </h2>
                  <p className="desc">
                    Continue indulged speaking the was out horrible for domestic
                    position. Seeing rather her you not esteem men settle genius
                    excuse. Deal say over you age from. Comparison new ham
                    melancholy son themselves.
                  </p>
                  <ul className="list-check">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Project Initialization
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Realtime Best Data Solutions.
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Market Development
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-services section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="service-caption">
                {/* <h3 className="sub-title">Our Services</h3> */}
                <h2 className="title">
                  Our creative & digital agency services
                </h2>
                <div className="service-btn">
                  <a href="#!">See All</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-box">
                <div className="icon">
                  <img src="/img/service-icon.png" className="img-fluid" />
                </div>
                <div className="content">
                  <p>Comparison new entertain melancholy son themselves.</p>
                  <h4>
                    <a href="service-details">Content Marketing</a>
                  </h4>
                  <span>Marketing</span>
                  <a href="service-details" className="icon-btn">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-box">
                <div className="icon">
                  <img src="/img/service-icon.png" className="img-fluid" />
                </div>
                <div className="content">
                  <p>Comparison new entertain melancholy son themselves.</p>
                  <h4>
                    <a href="service-details">Content Marketing</a>
                  </h4>
                  <span>Marketing</span>
                  <a href="service-details" className="icon-btn">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-box">
                <div className="icon">
                  <img src="/img/service-icon.png" className="img-fluid" />
                </div>
                <div className="content">
                  <p>Comparison new entertain melancholy son themselves.</p>
                  <h4>
                    <a href="service-details">Content Marketing</a>
                  </h4>
                  <span>Marketing</span>
                  <a href="service-details" className="icon-btn">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-box">
                <div className="icon">
                  <img src="/img/service-icon.png" className="img-fluid" />
                </div>
                <div className="content">
                  <p>Comparison new entertain melancholy son themselves.</p>
                  <h4>
                    <a href="service-details">Content Marketing</a>
                  </h4>
                  <span>Marketing</span>
                  <a href="service-details" className="icon-btn">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-box">
                <div className="icon">
                  <img src="/img/service-icon.png" className="img-fluid" />
                </div>
                <div className="content">
                  <p>Comparison new entertain melancholy son themselves.</p>
                  <h4>
                    <a href="service-details">Content Marketing</a>
                  </h4>
                  <span>Marketing</span>
                  <a href="service-details" className="icon-btn">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-box">
                <div className="icon">
                  <img src="/img/service-icon.png" className="img-fluid" />
                </div>
                <div className="content">
                  <p>Comparison new entertain melancholy son themselves.</p>
                  <h4>
                    <a href="service-details">Content Marketing</a>
                  </h4>
                  <span>Marketing</span>
                  <a href="service-details" className="icon-btn">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 text-center">
              {/* <h5 className="sub-title">Our Sponsor</h5> */}
              <h3 className="title">
                Dependable Feedback <br />
                Marketing Departments.
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="brand-wrap">
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/1.png" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/2.png" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/3.png" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/4.png" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/5.png" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/6.png" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/7.png" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/8.png" alt="Image Not Found" />
                </div>
                <div className="brand-item tp_fade_bottom">
                  <img src="/img/brand/9.png" alt="Image Not Found" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tetimonial section-bg pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              {/* <h5 className="sub-title">Testimonial</h5> */}
              <h3 className="title">
                Dependable Feedback <br />{" "}
                <img src="/img/testimonial/author.png" className="img-fluid" />
                From Clients.
              </h3>
            </div>
          </div>

          <div className="row section-gap">
            <div className="col-lg-12">
              <div className="testimonial-carousel">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="faq-caption">
                {/* <h5 className="sub-title">Faqs</h5> */}
                <h2 className="title">
                  Frequently Asked <br /> Questions
                </h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="faq-content">
                <div className="accordion" id="Expp">
                  <div className="accordion-item mb-30">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is Doodle Content Writing Tool?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#Expp"
                    >
                      <div className="accordion-body">
                        <p>
                          Sed Mattis eros lectors, eu fermentum Felis laborites
                          convallis. Nam Felis arco, sed mi Faubus quips. Fusco
                          id dui nil. Sed ac lorem a dolor incident suscept
                          quips Purus. Poetesque auctor fugit Elementa. ante
                          ipsum primes in Faubus orca lotus et utricles poseurs
                          cub ilia curare.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-30">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What Languages Does It Supports?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#Expp"
                    >
                      <div className="accordion-body">
                        <p>
                          Sed Mattis eros lectors, eu fermentum Felis laborites
                          convallis. Nam Felis arco, sed mi Faubus quips. Fusco
                          id dui nil. Sed ac lorem a dolor incident suscept
                          quips Purus. Poetesque auctor fugit Elementa. ante
                          ipsum primes in Faubus orca lotus et utricles poseurs
                          cub ilia curare.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-30">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How are AI writers impacting the writing industry?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#Expp"
                    >
                      <div className="accordion-body">
                        <p>
                          Sed Mattis eros lectors, eu fermentum Felis laborites
                          convallis. Nam Felis arco, sed mi Faubus quips. Fusco
                          id dui nil. Sed ac lorem a dolor incident suscept
                          quips Purus. Poetesque auctor fugit Elementa. ante
                          ipsum primes in Faubus orca lotus et utricles poseurs
                          cub ilia curare.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-30">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Does Doodle To Write Long Articles?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#Expp"
                    >
                      <div className="accordion-body">
                        <p>
                          Sed Mattis eros lectors, eu fermentum Felis laborites
                          convallis. Nam Felis arco, sed mi Faubus quips. Fusco
                          id dui nil. Sed ac lorem a dolor incident suscept
                          quips Purus. Poetesque auctor fugit Elementa. ante
                          ipsum primes in Faubus orca lotus et utricles poseurs
                          cub ilia curare.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
