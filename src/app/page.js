import React from "react";
import "./page.css";
import { GoArrowUpRight } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { Testimonial } from "./components/Testimonial";

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
                  <span className="sub-title">
                    Advanced AI-POWERED ENERGY Solutions
                  </span>
                  <h1>Smarter, Faster & More Efficient Energy Management </h1>
                  <p className="mb-5">
                    Robust AI-powered energy solutions to predict failures,
                    optimize performance, and enable real-time decision-making
                    for power grids, renewables, and industrial assets.
                  </p>

                  <a href="" className="default-btn">
                    Schedule Call
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
                      <h5>Optimized Energy Flow</h5>
                      <p>
                        Aging grids and demand surges cause frequent
                        disruptions. AI-powered systems ensure seamless energy
                        generation, storage, and distribution, preventing
                        failures.
                      </p>
                    </div>
                  </li>
                  <li className="border-0 pb-0 mb-0">
                    <div className="icon-wapper">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="content">
                      <h5>AI-Driven Interoperability</h5>
                      <p>
                        Fragmented energy assets lead to operational silos. Our
                        AI-powered platform creates a unified control layer for
                        real-time data exchange and intelligent automation.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="story-title">
                <h3>
                  Resilient energy infrastructure
                  <br />
                  With <span>AI</span> in energy
                </h3>
              </div>

              <div className="video-wapper">
                <video className="video-live" autoPlay loop muted>
                  <source src="/video.mp4" type="video/mp4" />
                </video>
                <a
                  href="#"
                  className="popup-youtube video-play-button with-text"
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
                          80
                        </div>
                        <div className="operator">+</div>
                      </div>
                      <span className="medium">
                        Assets under management <br /> totalling SAR 317.8 B
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
                          11
                        </div>
                        <div className="operator">+</div>
                      </div>
                      <span className="medium">
                        Countries have <br /> our strong presence
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="align-self-center">
                <div className="choose-caption">
                  <h2 className="title">
                    Pioneering AI in energy <br />
                    infrastructure & data centers
                  </h2>
                  <p className="desc">
                    Elile AI delivers custom, dynamic AI-powered dashboard
                    solutions that monitor, predict, and optimize asset
                    performance across Solar PV, Wind Farms, Sea Water Reverse
                    Osmosis, Gas Turbines, and Data Centers.
                  </p>
                  <ul className="list-check">
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Real-Time Root Cause Analysis (RCA)
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Self-Healing & Asset Performance Management
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-check"></i>
                      </span>
                      Interoperability & Multi-Agentic AI
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
                <h2 className="title">
                  Possibilities with reliability as a service
                </h2>
                <div className="service-btn">
                  <a href="#!">Explore More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="service-box">
                <div className="icon">
                  <img src="/img/service-icon.png" className="img-fluid" />
                </div>
                <div className="content">
                  <h4>
                    <a href="service-details">Data Engineering </a>
                  </h4>
                  <p>
                    Seamless integration and processing of diverse energy data
                    sources.
                  </p>
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
                  <h4>
                    <a href="service-details">Monitoring & Alerting </a>
                  </h4>
                  <p>
                    Real-time analytics and predictive alerts for asset
                    performance.
                  </p>
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
                  <h4>
                    <a href="service-details">Diagnostics & Remediation</a>
                  </h4>
                  <p>
                    AI-driven fault detection, root cause analysis, and
                    automated fixes.
                  </p>
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
                  <h4>
                    <a href="service-details">Performance Optimization</a>
                  </h4>
                  <p>
                    Self-healing systems and AI-driven efficiency improvements.
                  </p>
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
                  <h4>
                    <a href="service-details">Energy Forecasting </a>
                  </h4>
                  <p>
                    Predict energy demand, reduce inefficiencies, and balance
                    grid loads.
                  </p>
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
                  <h4>
                    <a href="service-details">Content Marketing</a>
                  </h4>
                  <p>Comparison new entertain melancholy son themselves.</p>
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
            <div className="col-lg-8 text-center">
              <h3 className="title">
                Trusted by global industry leaders <br />
                <img src="/img/testimonial/author.png" className="img-fluid" />
                Here’s what they say about us!
              </h3>
            </div>
          </div>
          <div className="row section-gap">
            <div className="col-lg-12">
              <div className="testimonial-carousel">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="faq-caption">
                <h2 className="title">
                  Frequently Asked <br /> Questions (FAQ)
                </h2>
              </div>
            </div>
            <div className="col-lg-8">
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
                        How do AI-powered energy solutions work?
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
                          AI-powered energy solutions leverage Artificial
                          Intelligence in the energy industry to enhance grid
                          reliability, optimize energy use, and prevent
                          failures. These solutions use Digital Twins,
                          Distributed Systems, and Multi-Agent AI to analyze
                          real-time data, predict faults, and autonomously
                          optimize performance, reducing energy waste and
                          improving efficiency.
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
                        Does AI improve energy efficiency in large-scale infra?
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
                          AI for energy efficiency helps industries minimize
                          energy losses, enhance asset performance, and reduce
                          operational costs. By analyzing consumption patterns
                          and applying predictive analytics, AI dynamically
                          adjusts energy flows, ensures peak load balancing, and
                          improves the overall sustainability of power systems.
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
                        What is Reliability as a Service (RaaS)?
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
                          Our meshed operating system, built by experts in Cloud
                          Reliability, Digital Twins, and AI-powered automation,
                          delivers Reliability as a Service (RaaS). This means
                          energy plants and critical infrastructure can
                          autonomously detect, diagnose, and resolve issues with
                          minimal human intervention, ensuring continuous uptime
                          and optimized energy distribution.
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
                        How does AI support renewable energy systems?
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
                          Artificial intelligence for renewable energy systems
                          is critical for managing Solar PV, Wind Farms, Gas
                          Turbines, and Water Desalination plants. AI integrates
                          real-time weather forecasts, energy demand patterns,
                          and asset health data to stabilize energy output,
                          optimize storage, and improve efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-30">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Can AI reduce downtime and prevent failures?
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
                          Yes. Our AI-driven self-healing systems predict
                          failures before they happen, enabling proactive
                          diagnostics, real-time root cause analysis (RCA), and
                          automated remediation. This significantly reduces
                          downtime, enhances asset lifespan, and maintains an
                          uninterrupted energy supply.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-30">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        How does Elile AI ensure interoperability across energy
                        ecosystems?
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
                          Elile AI’s intelligent energy management system
                          seamlessly integrates with OEMs, EPCs, and O&M
                          partners, ensuring compatibility across diverse energy
                          assets. Our multi-agent AI architecture enables energy
                          operators to monitor, optimize, and automate processes
                          across hybrid infrastructures, from legacy grids to
                          modern AI-driven smart networks.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-30">
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        What industries can benefit from AI-powered energy
                        solutions?
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
                          Our AI-powered energy solutions cater to a wide range
                          of industries, including Data Centers, Industrial
                          Manufacturing, Petrochemical Plants, and Smart Cities.
                          Any industry reliant on energy-intensive operations
                          can benefit from our solutions to improve performance
                          and sustainability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-30">
                    <h2 className="accordion-header" id="headingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                      >
                        How does Elile leverage AI in energy industry?
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
                          Elile AI’s proprietary technology, ElectrOS, is an
                          advanced AI-driven operating system designed to
                          resolve challenges of the energy sector. It is
                          engineered to collect data, control systems, detect
                          faults and anomalies, optimize algorithms and manage
                          energy resources efficiently. With self-learning
                          algorithms and autonomous decision-making, it prevents
                          failures before they happen, making energy systems
                          future-ready.
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
