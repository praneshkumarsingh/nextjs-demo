import React from "react";
import Link from "next/link";
import { Domains } from "../components/Domains";

const DomainDetails = () => {
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
                  <Link href="/">Home</Link> / Domains
                </nav>
                <h1 className="breadcumb-title">Domains</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-about">
        <div className="container">
          <Domains />
        </div>
      </section>

      <section className="cta-sec section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="cta-inner text-center">
                <h2>
                  Need a teammate engineered
                  <br /> or your business?
                </h2>
                <p className="desc">
                  Empower your operations with Agentic AI - autonomous, adaptive
                  <br />
                  teammates that learn and execute at scale.
                </p>
                <div className="mt-2">
                  <a className="default-btn" href="#!">
                    Get in Touch
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

export default DomainDetails;
