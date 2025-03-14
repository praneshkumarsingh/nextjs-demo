import React from "react";
import "./page.css";
import { Journey } from "../components/Journey";
import { Capability } from "../components/Capability";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* ----------- Page Banner --------- */}
      <section
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
                  <Link href="/">Home</Link> / About Us
                </nav>
                <h1 className="breadcumb-title">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------- About Banner --------- */}
      <section className="about-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-thumb">
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
              <div className="about-info">
                <h2 className="title">
                  Powering the future with AI
                  <br /> For precision & performance
                </h2>
                <p className="desc">
                  Built by industry-leading experts in distributed systems,
                  cloud reliability, and AI-driven infrastructure, our
                  technology goes beyond traditional models, delivering
                  real-time intelligence, predictive maintenance, and
                  self-optimizing operations. We seamlessly integrate with OEMs,
                  EPCs, and O&M partners, ensuring scalable AI solutions that
                  drive autonomous decision-making across mission-critical
                  environments.
                </p>
                <div className="about-grid-info">
                  <Link href="/about" className="btn-round-animation">
                    Discover More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <ul className="list-info-item list-unstyled">
                    <li>
                      <h4>
                        <Link href="/">
                          Solar PV
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <Link href="/">
                          Wind Farms
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <Link href="/">
                          Gas Turbines
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <Link href="/">
                          Reverse Osmosis
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <Link href="/">
                          Data Centers
                          <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------- Journey Banner --------- */}
      <section className="journey-area">
        <div className="container">
          <div className="row mb-5 align-items-end">
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
              <div className="h4_section-area mb-20">
                <h2 className="title tp_title_slideup mb-0">
                  Our growth and milestones <br />
                  over the years
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-4 col-sm-3">
              <div className="journey-navigation  tp_fade_left">
                <div className="journey-prev">
                  <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className="journey-next">
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper journey-active mt-5">
            <div className="swiper-wrapper">
              <Journey />
            </div>
          </div>
        </div>
      </section>
      {/* ----------- Our Feature Banner --------- */}
      <section className="feature-style-one-area section-gap">
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-4 col-md-6 ">
              <div className="feature-style-one cont">
                <div className="info">
                  <h4>Mission & Vision</h4>
                  <p>
                    We are on a mission to drive AI-powered autonomy, ensuring
                    self-optimizing operations across industries. We enable
                    predictive intelligence, real-time decision-making, and
                    autonomous infrastructure management. Our vision is to build
                    self-sustaining, adaptive, and agentic industrial
                    ecosystems, where AI future-proofs critical operations for
                    generations to come.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="feature-style-one cont">
                <div className="info">
                  <h4>Asset Management</h4>
                  <p>
                    Go beyond reactive maintenance with AI-powered asset
                    intelligence! Our system integrates digital twins at its
                    core, delivering real-time insights, predictive risk
                    analysis, and remote monitoring. By transforming raw data
                    into actionable intelligence, we optimize industrial assets
                    for peak performance, maximum uptime, and long-term
                    operational resilience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="feature-style-one cont">
                <div className="info">
                  <h4>AI for Industrial Resilience </h4>
                  <p>
                    Our AI enables real-time decision-making, decentralized
                    control, and multi-agent collaboration for self-sustaining
                    operations. By integrating predictive intelligence with
                    autonomous execution, we minimize human reliance while
                    ensuring seamless adaptability, proactive issue resolution,
                    fault resilience, and peak system performance across
                    critical industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------- Capability Banner --------- */}
      <section className="capability-area section-gap">
        <div className="container">
          <div className="case-carousel swiper">
            <div className="heading-left">
              <div className="row justify-content-center text-center">
                <div className="col-xl-5 col-lg-6">
                  <div className="content-left">
                    <h2 className="title">Our core capabilities</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-wrapper">
              <Capability />
            </div>
          </div>
        </div>
      </section>
      {/* ----------- Team Banner --------- */}
      <section className="our-team section-gap">
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
            <div className="col-xl-4 col-md-6 mb-4">
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
                        <i className="fa-solid fa-binoculars"></i>
                        <ul>
                          <li className="facebook">
                            <Link href="#">
                              <i className="fa-brands fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li className="twitter">
                            <Link href="#">
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                          <li className="youtube">
                            <Link href="#">
                              <i className="fa-brands fa-twitter"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <Link href="#">
                        <i className="fa-solid fa-envelope"></i>
                      </Link>
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/our-ceo">Dr Muhammad M Mehdi</Link>
                      </h4>
                      <span>Founder & CEO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
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
                        <i className="fa-solid fa-binoculars"></i>
                        <ul>
                          <li className="linkedin">
                            <Link href="#">
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <Link href="#">
                        <i className="fa-solid fa-envelope"></i>
                      </Link>
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/">Tazia Mehdi</Link>
                      </h4>
                      <span>Director of Operations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
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
                        <i className="fa-solid fa-binoculars"></i>
                        <ul>
                          <li className="linkedin">
                            <Link href="#">
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <Link href="#">
                        <i className="fa-solid fa-envelope"></i>
                      </Link>
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/">Emma Perot</Link>
                      </h4>
                      <span>IP Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <div className="team-style-one">
                <div className="thumb">
                  <img
                    decoding="async"
                    src="/img/team/4.jpg"
                    alt="Dilabs"
                    className="img-fluid"
                  />
                  <div className="team-info">
                    <div className="team-social">
                      <div className="share-link">
                        <i className="fa-solid fa-binoculars"></i>
                        <ul>
                          <li className="linkedin">
                            <Link href="#">
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <Link href="#">
                        <i className="fa-solid fa-envelope"></i>
                      </Link>
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/">Sanket Mangrulkar</Link>
                      </h4>
                      <span>Chief Financial Officer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <div className="team-style-one">
                <div className="thumb">
                  <img
                    decoding="async"
                    src="/img/team/5.jpg"
                    alt="Dilabs"
                    className="img-fluid"
                  />
                  <div className="team-info">
                    <div className="team-social">
                      <div className="share-link">
                        <i className="fa-solid fa-binoculars"></i>
                        <ul>
                          <li className="linkedin">
                            <Link href="#">
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <Link href="#">
                        <i className="fa-solid fa-envelope"></i>
                      </Link>
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/">Ali Wahab</Link>
                      </h4>
                      <span>Software Engineer </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <div className="team-style-one">
                <div className="thumb">
                  <img
                    decoding="async"
                    src="/img/team/6.jpg"
                    alt="Dilabs"
                    className="img-fluid"
                  />
                  <div className="team-info">
                    <div className="team-social">
                      <div className="share-link">
                        <i className="fa-solid fa-binoculars"></i>
                        <ul>
                          <li className="linkedin">
                            <Link href="#">
                              <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <Link href="#">
                        <i className="fa-solid fa-envelope"></i>
                      </Link>
                    </div>
                    <div className="content">
                      <h4>
                        <Link href="/">Tugba H. Soner</Link>
                      </h4>
                      <span>Director of Product</span>
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
};
export default page;
