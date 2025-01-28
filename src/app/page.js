import React from "react";
import "./page.css";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { Slider } from "./components/Slider";

function page() {
  return (
    <>
      <header className="custom-navbar">
        <nav className="navbar navbar-expand-lg py-0">
          <div className="container">
            <a className="navbar-brand py-0" href="#">
              <Image
                src="/logo.png"
                width={110}
                height={80}
                alt="Website Logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    WHY ELILE
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SERVICES
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-disabled="true">
                    DOMAINS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-disabled="true">
                    OUR EXPERTISE
                  </a>
                </li>
                <li className="nav-item pe-0">
                  <a className="nav-link" aria-disabled="true">
                    OUR TEAM
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <a href="" className="default-btn bg-white text-green">
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
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
                  <a href="" className="default-btn style-two ms-4">
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
              <div
                className="story-wapper text-light"
                style={{ backgroundImage: "url(/7.png)" }}
              >
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
                <ul>
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
                  <h5 className="sub-title">Why Choose Us</h5>
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
                <h3 className="sub-title">Our Services</h3>
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
                  <div className="shape">
                    <img src="/img/service-shape.webp" />
                  </div>
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
                  <div className="shape">
                    <img src="/img/service-shape.webp" />
                  </div>
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
                  <div className="shape">
                    <img src="/img/service-shape.webp" />
                  </div>
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
                  <div className="shape">
                    <img src="/img/service-shape.webp" />
                  </div>
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
                  <div className="shape">
                    <img src="/img/service-shape.webp" />
                  </div>
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
                  <div className="shape">
                    <img src="/img/service-shape.webp" />
                  </div>
                </div>
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
                <h5 className="sub-title">Faqs</h5>
                <h2 className="title">
                  Frequently Asked <br /> Questions
                </h2>
                <img src="/img/faq-img.png" className="img-fluid" />
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

      <section className="tetimonial section-bg pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h5 className="sub-title">Testimonial</h5>
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

      <section className="brand section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 text-center">
              <h5 className="sub-title">Our Sponsor</h5>
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

      <div className="our-team section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">Team members</h5>
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
                <h4 className="sub-title">About our compnay</h4>
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

      <footer className="bg-dark text-light footer-custom">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-3 footer-item">
                <div className="footer-animated-shape">
                  <img src="/img/footer-icon.png" alt="Dilabs" />
                </div>
                <div className="footer-about">
                  <img src="/img/logo-white.webp" className="img-fluid logo" />
                  <p>
                    Are off under folly death writter transforming cold regular.
                    Almost do am or limits of hearts.{" "}
                  </p>
                  <div className="footer-social mt-5">
                    <ul className="list-unstyled">
                      <li>
                        <a href="http://facebook.com">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="http://twitter.com">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="http://linkedin.com">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                <div className="f-item link footer-widget widget_nav_menu">
                  <h4 className="widget-title">Company</h4>
                  <div className="menu-company-container">
                    <ul className="list-unstyled">
                      <li className="menu-item">
                        <a href="#">Compnay Profile</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">About</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Help Center</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Career</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Plans &amp; Pricing</a>
                      </li>
                      <li className="menu-item">
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                <div className="contact">
                  <h4 className="widget-title">Contact Info</h4>
                  <ul className="list-unstyled">
                    <li>
                      <div className="content">
                        <strong>Address:</strong>
                        5919 Trussville Crossings Pkwy, Birmingham
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>Email:</strong>
                        <a href="mailto:info@validtheme.com">
                          info@validtheme.com
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <strong>Phone:</strong>
                        <a href="tel:+12334598768">+123 34598768</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                <div className="contact">
                  <h4 className="widget-title">Newsletter</h4>
                  <p>
                    Join our subscribers list to get the instant latest news and
                    special offers.{" "}
                  </p>
                  <div className="newsletter">
                    <form className="newsletter-form">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="form-control"
                        name="email"
                      />
                      <button type="submit">
                        {" "}
                        <i className="fa fa-paper-plane text-light"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom bg-dark text-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>
                  Copyright 2025. All Rights Reserved by{" "}
                  <a href="#">ELILE AI.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default page;
