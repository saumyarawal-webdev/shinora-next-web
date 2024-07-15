import React from 'react'

function HomeAbout() {
  return (
    <>
    {/* About Section */}
    <section className="page-section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                <h2 className="section-caption-border">About Shinora</h2>
                <h3 className="mb-90 mb-sm-50">
                  A Confluence of Dermatology, Cosmetic Care, and Dental Expertise
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 mb-xs-50">
                <div className="call-action-4-images">
                  <div className="call-action-4-image-1">
                    <img
                      src="images2/section-1.jpg"
                      alt="Image description"
                      className="wow scaleOutIn"
                      data-wow-duration="1.2s"
                    />
                  </div>
                  <div className="call-action-4-image-2">
                    <img
                      src="images2/section-2.jpg"
                      alt="Image description"
                      className="wow scaleOutIn"
                      data-wow-duration="1.2s"
                      data-wow-offset={0}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-8 col-lg-6 col-xl-4 offset-xl-1 mt-n10">
                <div className="wow linesAnimIn" data-splitting="lines">
                  <p className="mt-0 mb-40">
                    At Shinora Skin and Dental Clinic, we unite the specialized
                    skills of Dr. Bhavarth Kalaria, Dr. Lipi Kalaria and Dr.
                    Chandani Kalaria to offer a holistic approach to skin, hair,
                    and dental care. Founded with the vision to blend clinical
                    expertise with personalized care.
                  </p>
                  <p className="mb-40">
                    Together, they have created a space where advanced medical
                    care meets comfort and elegance, offering state-of-the-art
                    treatments in dermatology and dentistry under one roof.
                    Shinora Skin and Dental Clinic is committed to excellence,
                    with a focus on providing bespoke treatments that cater to the
                    unique needs of each patient.
                  </p>
                </div>
                <div className="local-scroll wow fadeInUp" data-wow-offset={0}>
                  <a
                    href="strong-about.html"
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                    style={{ backgroundColor: "#014e4e" }}
                  >
                    <span>
                      Learn More
                      <span className="visually-hidden">About Us</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 offset-xl-1 d-none d-lg-block">
                <div className="round overflow-hidden">
                  <img
                    src="images2/section-3.jpg"
                    alt="Image description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
    </>
  )
}

export default HomeAbout