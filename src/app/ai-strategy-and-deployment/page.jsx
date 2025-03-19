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
                  <Link href="/">Home</Link> / AI Strategy & Deployment
                </nav>
                <h1 className="breadcumb-title">AI Strategy & Deployment</h1>
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
                <h2 className="title mb-4">End-to-end AI Implementation</h2>
                <p className="desc">
                  Deploying AI is not just about technology - it’s about
                  strategic implementation, understanding your exact business
                  needs, scalability, and real-world impact. Elile develops
                  custom AI frameworks that integrate LLMs, multi-agent
                  intelligence, and advanced automation to transform your
                  industrial, business and enterprise ecosystems.
                </p>
                <p className="desc">
                  Our AI deployment ensures seamless adaptation across hybrid
                  cloud, edge computing, and distributed environments, enabling
                  scalable, future-ready solutions with built-in governance and
                  ethical AI compliance.
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
                  Custom AI Frameworks
                </h3>
                <p>
                  Tailored architectures engineered for enterprise-scale AI
                  adoption, optimization, and cross-domain adaptability.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  LLM & Multi-Agent Integration
                </h3>
                <p>
                  Strategic deployment of LLMs and intelligent agent networks
                  for real-time industrial automation and decision intelligence.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Seamless Deployment Pipelines
                </h3>
                <p>
                  Effortless AI integration into legacy, cloud-native, and
                  hybrid infrastructures without operational disruptions.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Hybrid Cloud & Edge AI Support
                </h3>
                <p>
                  Optimized AI processing across centralized cloud platforms,
                  decentralized networks, and edge computing environments for
                  real-time decision-making.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Scalability for Future Growth
                </h3>
                <p>
                  AI-powered predictive models, generative intelligence, and
                  self-optimizing systems dynamically evolve to meet expanding
                  industrial demands.
                </p>
              </div>
              <div className="whyChooseSec-box">
                <h3>
                  <img src="/img/unique.svg" className="img-fluid"></img>
                  Enterprise AI Governance
                </h3>
                <p>
                  Ensures transparent, ethical AI deployment with built-in
                  compliance, security, and regulatory adherence frameworks.
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
                  Powerful AI Features Built for Marketing
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
