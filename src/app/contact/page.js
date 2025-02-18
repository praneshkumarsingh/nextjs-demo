import React from "react";
import "./page.css";

const page = () => {
  return (
    <>
      <div
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
            <div className="breadcrum-shape">
              <img src="/img/breadcrumb.png" alt="Dilabs" />
            </div>
            <div className="row">
              <div className="col-lg-8 ">
                <nav className="woocommerce-breadcrumb" aria-label="Breadcrumb">
                  <a href="https://wordpress.validthemes.net/dilabs">Home</a> /
                  Contact Us
                </nav>
                <h1 className="breadcumb-title">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="contact-area section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-xl-6">
              <div className="inner_section-area mb-50 text-center">
                <h2 className="title mb-5">
                  Engage in conversation with skilled engineers.
                </h2>
              </div>
            </div>
          </div>
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
                  <h4 className="contact-content-title">Chat with us.</h4>
                  <p>Monday - Friday : 9am to 6pm.</p>
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
                  <h4 className="contact-content-title">Give us a call</h4>
                  <a href="tel:+480-555-0103">+480-555-0103</a>
                  <a href="tel:+239-555-0108">+239-555-0108</a>
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
                  <h4 className="contact-content-title">Email with us.</h4>
                  <a href="mailto:support.young@example.com">
                    support.young@example.com
                  </a>
                  <a href="mailto:bill.robert@example.com">
                    bill.robert@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-bottom section-gap">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-bottom-left">
                  <div className="inner_section-area mb-50">
                    <h2 className="title mb-4">
                      Connect with & ignite <br /> the conversation!
                    </h2>
                  </div>
                  <div className="contact-map tp_fade_right">
                    <div className="faq-content">
                      <div className="accordion" id="Expp">
                        <div className="accordion-item mb-30">
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
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14599.593481274613!2d90.42342665!3d23.8222127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1701453167946!5m2!1sen!2sbd"
                                width="600"
                                height="250"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              ></iframe>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-30">
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
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14599.593481274613!2d90.42342665!3d23.8222127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1701453167946!5m2!1sen!2sbd"
                                width="600"
                                height="450"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              ></iframe>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mb-30">
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
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14599.593481274613!2d90.42342665!3d23.8222127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1701453167946!5m2!1sen!2sbd"
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
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14599.593481274613!2d90.42342665!3d23.8222127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1701453167946!5m2!1sen!2sbd"
                                width="600"
                                height="450"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
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
                  <h3 className="contact-form-title">Fillup the form</h3>
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
                          <button type="submit">Set In Touch</button>
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
