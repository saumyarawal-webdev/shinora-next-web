import React from 'react'

function HomeContact() {
  return (
    <>
    <section className="page-section" id="contact">
          <div className="container">
            <div className="row mb-90 mb-sm-50">
              <div className="col-lg-5 col-xl-4 mb-md-90 mb-sm-50 wow fadeInUp">
                <h2 className="section-title-strong mb-40">
                  Visit <span className="font-alt">Shinora Clinic</span>
                </h2>
                <p className="mb-0">
                  Experience personalized care and advanced treatments at Shinora
                  Skin and Dental Clinic. Our state-of-the-art facility in
                  Ahmedabad is equipped to provide the latest in dermatological
                  and dental solutions. Contact Us today and take the first step
                  towards a healthier, more confident you.
                </p>
              </div>
              <div className="col-lg-7 offset-xl-1">
                <div className="round overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4273888196485!2d72.49584107617177!3d23.044787715497176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bb0579cadd1%3A0x29a1e2b5a40c7568!2sShinora%20Skin%20%26%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1711978416365!5m2!1sen!2sin"
                    width={750}
                    height={400}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay="0.27s">
              {/* Contact Info */}
              <div className="col-lg-5 col-xl-4 mb-md-90 mb-sm-50">
                <div className="contact-2">
                  {/* Contact Info Item */}
                  <div className="contact-2-item">
                    <div className="contact-2-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={44}
                        height={64}
                        viewBox="0 0 44 64"
                        aria-hidden="true"
                        style={{ fill: "#014e4e" }}
                      >
                        <path d="M42 42c2 2 3.25 4.375 0 8.25-3.125 3.75-5.25 3.75-8 3.75-3 0-7.25-1.75-11.625-5-4-2.875-5.75-4.25-9.75-8.375-4.25-4.375-6.875-8-9.875-13.375-3.375-6.25-3-9.25-2.25-11.5 0.5-1.5 1.75-3 3.5-4.125l0.125-0.125c0.75-0.5 2.25-1.5 4-1.5 1.625 0 3 0.75 4.25 2.25l0.125 0.125c1.375 1.75 3 3.875 4 5.875 1.25 2.625 1.25 4.75-0.125 6.625-1.125 1.5-1.5 2.375-1.5 2.875s0.625 1.125 1.625 2.25l0.125 0.125c2 2.25 2.5 2.875 3.25 3.625 0.125 0.125 0.375 0.25 0.5 0.375l0.25 0.25c0.875 0.875 1.375 1.5 3.625 3.5l0.125 0.125c0.875 0.75 1.125 1 1.5 1 0.625 0 2-0.875 3.625-1.875 0.5-0.375 1.375-0.625 2.125-0.625 3.375 0 8.5 3.625 10.375 5.5z" />
                      </svg>
                    </div>
                    <div className="contat-2-intro">
                      <h4 className="contact-2-title">
                        Call <span className="font-alt">us</span>
                      </h4>
                      <div className="contact-2-text">
                        <a href="tel:+918899330033">+91 889 933 0033 </a>
                      </div>
                    </div>
                  </div>
                  {/* End Contact Info Item */}
                  {/* Contact Info Item */}
                  <div className="contact-2-item">
                    <div className="contact-2-icon">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width={48}
                        height={64}
                        viewBox="0 0 48 64"
                        aria-hidden="true"
                        style={{ fill: "#014e4e" }}
                      >
                        <path d="M48 48h-48v-30.25l16.375 12.5-8.5 9.625 0.25 0.25 9.875-8.75 6 4.625 6-4.625 9.875 8.75 0.25-0.25-8.5-9.625 16.375-12.5v30.25zM47 16l-23 17.5-23-17.5h46z" />
                      </svg>
                    </div>
                    <div className="contat-2-intro">
                      <h4 className="contact-2-title">
                        Say <span className="font-alt">hello</span>
                      </h4>
                      <div className="contact-2-text">
                        <a href="mailto:appointment@shinora.in">
                          appointment@shinora.in
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Contact Info Item */}
                  {/* Contact Info Item */}
                  <div className="contact-2-item">
                    <div className="contact-2-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={64}
                        viewBox="0 0 40 64"
                        aria-hidden="true"
                        style={{ fill: "#014e4e" }}
                      >
                        <path d="M20 4c11 0 20 8.875 20 19.625 0 14.75-20 36.375-20 36.375s-20-21.625-20-36.375c0-10.75 9-19.625 20-19.625zM20 30.625c4 0 7.125-3.125 7.125-7s-3.125-7-7.125-7-7.125 3.125-7.125 7 3.125 7 7.125 7z" />
                      </svg>
                    </div>
                    <div className="contat-2-intro">
                      <h4 className="contact-2-title">
                        Visit <span className="font-alt">us</span>
                      </h4>
                      <div className="contact-2-text">
                        <a href="#">
                          402, Soham Pristine, behind Times Square Grand, off
                          Sindhu Bhavan Marg, PRL Colony, Thaltej, Ahmedabad,
                          Gujarat 380054
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Contact Info Item */}
                </div>
              </div>
              {/* End Contact Info */}
              {/* Contact Form */}
              <div className="col-lg-7 offset-xl-1">
                <form className="form contact-form" id="contact_form">
                  <div className="row">
                    <div className="col-md-6">
                      {/* Name */}
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="input-lg round form-control"
                          placeholder="Enter your name"
                          pattern=".{3,100}"
                          required=""
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      {/* Email */}
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="input-lg round form-control"
                          placeholder="Enter your email"
                          pattern=".{5,100}"
                          required=""
                          aria-required="true"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      className="input-lg round form-control"
                      style={{ height: 130 }}
                      placeholder="Enter your message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      {/* Inform Tip */}
                      <div className="form-tip pt-20 pt-sm-0">
                        <i className="icon-info size-16" />
                        All the fields are required.
                        {/* By sending the form you
                    agree to the <a href="#">Terms & Conditions</a> and
                    <a href="#">Privacy Policy</a>. */}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      {/* Send Button */}
                      <div className="text-end pt-20">
                        <button
                          type="submit"
                          id="submit_btn"
                          aria-controls="result"
                          className="submit_btn btn btn-mod btn-large btn-round btn-hover-anim align-middle"
                          style={{ backgroundColor: "#014e4e" }}
                        >
                          <span> Send Message </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    id="result"
                    role="region"
                    aria-live="polite"
                    aria-atomic="true"
                  />
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
    </>
  )
}

export default HomeContact