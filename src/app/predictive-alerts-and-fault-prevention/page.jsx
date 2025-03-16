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
                  <Link href="/">Home</Link> / Predictive Alerts & Fault
                  Prevention
                </nav>
                <h1 className="breadcumb-title">
                  Predictive Alerts & Fault Prevention{" "}
                </h1>
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
                <h2 className="title mb-4">AI-Driven Risk Mitigation</h2>
                <p className="desc">
                  Elile’s predictive intelligence prevents failures before they
                  happen. By analyzing real-time data streams, detecting
                  anomalies, and enabling proactive interventions, our
                  AI-powered fault prevention systems enhance operational
                  reliability, reduce unplanned downtime, and extend asset
                  lifespan.
                </p>
                <p className="desc">
                  Leveraging time-series forecasting and probabilistic
                  modelling, our AI anticipates vulnerabilities before
                  escalation. Deep learning processes high-frequency sensor data
                  to detect deviations, while multi-agent AI networks
                  synchronize predictive maintenance across assets.
                  Reinforcement learning continuously enhances fault detection,
                  adapting dynamically to evolving conditions.
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
                  Real-Time Fault Prediction
                </h3>
                <p>
                  Continuously scans system data to detect anomalies, leveraging
                  predictive modelling for proactive failure mitigation.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  AI-Powered Root Cause Analysis
                </h3>
                <p>
                  Identifies hidden failure patterns with advanced machine
                  learning, enabling precise diagnostics and faster resolution.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Automated Response Triggers
                </h3>
                <p>
                  Instant AI-driven alerts activate mitigation protocols,
                  preventing cascading system failures and costly breakdowns.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Self-Correcting Mechanisms
                </h3>
                <p>
                  Autonomous AI adjustments optimize asset performance in real
                  time, reducing long-term maintenance interventions.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Failure Risk Optimization
                </h3>
                <p>
                  Predicts, prioritizes, and mitigates risks by dynamically
                  adjusting operational parameters to prevent asset degradation.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Multi-Layered Protection
                </h3>
                <p>
                  Integrates real-time analytics, historical failure modelling,
                  and anomaly detection to enhance system resilience and
                  longevity.
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
