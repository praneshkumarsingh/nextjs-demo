import React from "react";
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
                  <Link href="/">Home</Link> / AI-Driven Adaptive Systems
                </nav>
                <h1 className="breadcumb-title">AI-Driven Adaptive Systems</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyChooseSec section-gap mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="whyChoose-caption me-5">
                <h2 className="title mb-4">
                  Adaptive AI for evolving industries
                </h2>
                <p className="desc">
                  Industries operate in dynamic environments where static AI
                  models fall short. Elile’s adaptive AI ecosystems evolve in
                  real-time, learning from changing conditions, optimizing
                  operations, and ensuring intelligent automation that enhances
                  efficiency, resilience, and sustainability, without the need
                  for constant human intervention.
                </p>
                <p className="desc">
                  Powered by reinforcement learning and self-evolving neural
                  networks, our AI autonomously refines decision pathways,
                  adapts to new data streams, and continuously optimizes complex
                  industrial workflows.
                </p>
                <div className="whyChoose-btn mt-5">
                  <Link className="default-btn" href="#!">
                    Book A Call
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Self-Optimizing AI Models
                </h3>
                <p>
                  Continuously refines strategies and performance based on
                  real-time operational data.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Predictive Adaptation
                </h3>
                <p>
                  Anticipates and adjusts system controls dynamically to sustain
                  peak efficiency.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Real-Time Environmental Sensing
                </h3>
                <p>
                  Leverages IoT and edge data for context-aware decision-making
                  and automation.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Reinforcement Learning Integration
                </h3>
                <p>
                  AI-driven models evolve autonomously through feedback loops
                  and real-world interactions.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Intelligent Load Management
                </h3>
                <p>
                  Optimizes energy distribution, workload balancing, and
                  resource utilization efficiently.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Enhanced Decision Automation
                </h3>
                <p>
                  Reduces complexity with AI-driven, self-learning control
                  systems that adapt instantly.
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
