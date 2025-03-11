import React from "react";
import "./page.css";
import Link from "next/link";

const ServiceDetail = () => {
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
      <section className="service-about section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="choose-us-style-two">
                <h2 className="title mb-5">
                  Grow business <br /> with creative <br /> ideas
                </h2>
                <ul className="check-list-item">
                  <li>
                    <h4>Professional Agency</h4>
                    <p>
                      Consectetur adipisci velitsed quia non numquam eius
                      tempralabore et dolore magnam aliquam quaerat seperate.
                    </p>
                  </li>
                  <li>
                    <h4>Solutions Provider</h4>
                    <p>
                      Know more about digital direct response than virtually any
                      digital marketing agency in the industry same as
                      distribution.
                    </p>
                  </li>
                </ul>
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
        </div>
      </section>

      <section className="whyChooseSec section-gap mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="whyChoose-caption me-3">
                <h2 className="title mb-4">Why Choose Us ?</h2>
                <p className="desc">
                  Embark on a journey of visual innovation as you delve into the
                  realm of the AI Image Generator. This revolutionary tool
                  harnesses the prowess of advanced algorithms to breathe life
                  into your imagination.
                </p>
                <p className="desc">
                  Unleash your creativity and witness the power of AI Image
                  Generator as it transforms ideas into mesmerizing images.
                  Generate Your Image
                </p>
                <div className="whyChoose-btn mt-5">
                  <a className="default-btn" href="#!">
                    Explore More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Excellent Support
                </h3>
                <p>
                  Amet id urna ipsum donec amet. Diam sapien a convallis
                  vestibulum condimentum sit. Elementum sodales scelerisque.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Excellent Support
                </h3>
                <p>
                  Amet id urna ipsum donec amet. Diam sapien a convallis
                  vestibulum condimentum sit. Elementum sodales scelerisque.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Excellent Support
                </h3>
                <p>
                  Amet id urna ipsum donec amet. Diam sapien a convallis
                  vestibulum condimentum sit. Elementum sodales scelerisque.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Excellent Support
                </h3>
                <p>
                  Amet id urna ipsum donec amet. Diam sapien a convallis
                  vestibulum condimentum sit. Elementum sodales scelerisque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benfit-sec section-bg section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h2 className="title">
                  Powerful AI Features Built for <br />
                  Marketing
                </h2>
              </div>
            </div>
          </div>
          <div className="benfit-inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="benfit-content me-5">
                  <p className="desc">
                    Sit dui ligula viverra eget volutpat mauris. Nibh sagittis
                    viverra et rhoncus bibendum luctus. Tristique interdum
                    cursus dictum gravida sed feugiat morbi. Id est sed urna
                    maecenas est placerat aliquam et quis. Feugiat vitae justo
                    mi justo nunc senectus sapien non.
                  </p>
                  <p className="desc">
                    Sit dui ligula viverra eget volutpat mauris. Nibh sagittis
                    viverra et rhoncus bibendum luctus. Tristique interdum
                    cursus dictum gravida sed feugiat morbi. Id est sed urna
                    maecenas est placerat aliquam et quis. Feugiat vitae justo
                    mi justo nunc senectus sapien non. Tristique tellus ac proin
                    integer. Vitae elementum vitae sem arcu. Lorem aliquam.
                  </p>
                  <p className="desc">
                    Sit dui ligula viverra eget volutpat mauris. Nibh sagittis
                    viverra et rhoncus bibendum luctus. Tristique interdum
                    cursus dictum gravida sed feugiat morbi.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="benfit-list">
                  <ul className="list-unstyled">
                    <li>
                      <div className="icon">
                        <img src="/check.svg" />
                      </div>
                      <div className="text">
                        <h3>
                          Quis sit in id egestas turpis vitae tristique senectus
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="/check.svg" />
                      </div>
                      <div className="text">
                        <h3>
                          Neque eleifend amet ut vel fusce facilisis nulla
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="/check.svg" />
                      </div>
                      <div className="text">
                        <h3>
                          Nulla at diam cursus lorem nunc facilisis non
                          phasellus
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <img src="/check.svg" />
                      </div>
                      <div className="text">
                        <h3>
                          Nullam faucibus facilisis nunc turpis adipiscing
                        </h3>
                      </div>
                    </li>
                    <li className="mb-0">
                      <div className="icon">
                        <img src="/check.svg" />
                      </div>
                      <div className="text">
                        <h3>
                          Quis sit in id egestas turpis vitae tristique senectus
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-sec section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-inner text-center">
                <h2>
                  Ready to revolutionize
                  <br /> our service?
                </h2>
                <p className="desc">
                  Optimize your impact this holiday season with an AI-driven,
                  <br />
                  multichannel marketing strategy.
                </p>
                <div className="mt-2">
                  <a className="default-btn" href="#!">
                    Explore More
                  </a>
                  <a className="default-btn style-two ms-4" href="/about">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
