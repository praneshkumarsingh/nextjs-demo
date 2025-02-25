import React from "react";
import "./page.css";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

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
                  <a href="https://wordpress.validthemes.net/dilabs">Home</a> /
                  About Us
                </nav>
                <h1 className="breadcumb-title">Our Ceo</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- Page Banner --------- */}

      <section className="about-ceo section-gap section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about-image custom-layout">
                <div className="image">
                  <img
                    src="https://elile.ai/assets/img/profile.jpg"
                    alt="About Me"
                    className="img-fluid"
                  />
                </div>
                <div className="about-content">
                  <h3 className="title">Dr. Muhammad Mehdi</h3>
                  <p className="desc">Founder & CEO of Elile AI </p>
                </div>
                <div className="about-social">
                  <ul className="list-unstyled">
                    <li>
                      <a href="https://x.com/drmuhamadmehdi" traget="_blank">
                        <BsTwitterX />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/dr-muhammad-mehdi01/"
                        target="_blank"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="about-details custom-layout text-start">
                <p className="desc">
                  Dr. Muhammad Mehdi is the Founder and CEO of Elile AI, a
                  sustainable and climate technology company specializing in
                  green data center solutions and AI-powered infrastructure.
                  Prior to Elile AI, Dr. Mehdi spent over 20 years working with
                  industry giants. He was GM, AI Media for Amazon Ad Tech, and
                  Head of AI at Microsoft Research, Autonomous AI team, and Head
                  of Microsoft Azure Cloud Reliability and Capacity Planning.
                </p>
                <p className="desc">
                  With a deep foundation in machine learning, artificial
                  intelligence, and data center management, Dr. Mehdi is a
                  pioneer in large language model (LLM) infrastructure. Notably,
                  he was the first architect to build the OpenAI infrastructure
                  within Microsoft, significantly shaping the AI and data center
                  landscape.
                </p>
                <p className="desc">
                  Dr. Mehdi focuses on eco-friendly AI systems and sustainable
                  computing, by optimizing power, cooling, and workload
                  orchestration in data centers. His commitment to climate tech
                  has driven Elile AI to innovate in power management systems,
                  digital twins, and advanced asset performance management,
                  particularly in renewable energy integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
