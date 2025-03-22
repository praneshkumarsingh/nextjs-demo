import React from "react";
import "./page.css";

const page = () => {
  return (
    <>
      <section
        className="breadcrumb-area custom-breadcrumb bg-gray bg-cover"
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
                  <a href="/">Home</a> / Contact Us
                </nav>
                <h1 className="breadcumb-title">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-area section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-xl-6">
              <div className="inner_section-area mb-50 text-center">
                <h2 className="title mb-5">No challenge, too big for us!</h2>
              </div>
            </div>
          </div>
          <div className="contact-top">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 mb-30 tp_fade_left"
                data-fade-from="left"
              >
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-message"></i>
                  </div>
                  <div className="contact-content">
                    <h4 className="contact-content-title">Let's meet</h4>
                    <p>
                      Monday - Friday | 10 AM - 5 PM <br />
                      Abu Dhabi Office
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mb-30 tp_fade_left"
                data-fade-from="left"
                data-delay=".6"
              >
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className="contact-content">
                    <h4 className="contact-content-title">Talk to us!</h4>
                    <a href="tel:+16174707070">+1 617.470.7070</a>
                    {/* <a href="tel:+239-555-0108">+239-555-0108</a> */}
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mb-30 tp_fade_left"
                data-fade-from="left"
                data-delay=".9"
              >
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-envelope-open"></i>
                  </div>
                  <div className="contact-content">
                    <h4 className="contact-content-title">Write to us</h4>
                    <a href="mailto:info@elile.ai ">info@elile.ai</a>
                    <a href="mailto:investinenergy@elile.ai">
                      investinenergy@elile.ai
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-bottom">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-bottom-left">
                  <div className="inner_section-area mb-50">
                    <h2 className="title mb-4">
                      Connect to explore
                      <br /> advanced AI solutions!
                    </h2>
                  </div>
                  <div className="contact-map tp_fade_right">
                    <div className="faq-content">
                      <div className="accordion" id="Expp">
                        <div className="accordion-item mb-4">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Dubai
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#Expp"
                          >
                            <div className="accordion-body p-3">
                              <p>
                                ElectrOS AI- FZCO, Dubai Technology Entrepreneur
                                Campus (DTEC), PO BOX # 341173, A5 Building,
                                Dubai Digital Park, Dubai Silicon Oasis, Dubai,
                                United Arab Emirates
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-4">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Abu Dhabi
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#Expp"
                          >
                            <div className="accordion-body p-3">
                              <p>
                                ELILE SOFTWARE TECHNOLOGIES - L.L.C - S.P.C, Al
                                Hisn W7_01, First Abu Dhabi Bank Building, Abu
                                Dhabi Municipality, Abu Dhabi
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-4">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Washington
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#Expp"
                          >
                            <div className="accordion-body p-3">
                              <p className="mb-3">
                                Elile AI Corporation, 2331 130th Ave NE, Suite
                                110-M, Bellevue WA 98005
                              </p>
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21516.63841179046!2d-122.18972318639415!3d47.61485973617184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906c1b7ab8536b%3A0x5ce49d96bdecadc5!2sAUE!5e0!3m2!1sen!2sin!4v1742496714287!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              ></iframe>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed py-3"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              Delaware
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#Expp"
                          >
                            <div className="accordion-body p-3">
                              <p className="mb-3">
                                Elile AI Corporation, 251 Little Falls Drive,
                                Wilmington, DE 19808
                              </p>

                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.0421917003673!2d-75.6254295245508!3d39.76116109527945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fe0b3ff36ac7%3A0x55af8d24780e66d6!2sCSC%20Headquarters!5e0!3m2!1sen!2sin!4v1742496496534!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                allowFullScreen=""
                                loading="lazy"
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 tp_fade_left">
                <div className="contact-form mt-40 mt-lg-0">
                  <h3 className="contact-form-title">
                    Please fill out the form!
                  </h3>
                  <form action="#">
                    <div className="row">
                      <div className="col-xl-6 col-lg-12 col-md-6">
                        <div className="contact-form-item mb-4">
                          <input type="text" placeholder="Fast Name" />
                          <i className="fa-regular fa-user"></i>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-12 col-md-6">
                        <div className="contact-form-item mb-4">
                          <input type="text" placeholder="Last Name" />
                          <i className="fa-regular fa-user"></i>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="contact-form-item mb-4">
                          <input type="email" placeholder="Your Email" />
                          <i className="fa-regular fa-envelope"></i>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="contact-form-item mb-4">
                          <input type="text" placeholder="Phone Number" />
                          <i className="fa-solid fa-phone"></i>
                        </div>
                      </div>
                      {/* <div className="col-12">
                                        <div className="contact-form-item">
                                            <select name="select" className="subject-option has-nice-select  mb-25">
                                                <option value="1">Subject</option>
                                                <option value="2">Subject 2</option>
                                                <option value="3">Subject 3</option>
                                                <option value="4">Subject 4</option>
                                            </select>
                                        </div>
                                    </div>  */}
                      <div className="col-12">
                        <div className="contact-form-item mb-4">
                          <textarea
                            name="message"
                            placeholder="Type your message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="contact-form-item pt-10">
                          <button type="submit">Gaset In Touch</button>
                        </div>
                      </div>
                    </div>
                  </form>
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
