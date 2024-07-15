import React from 'react'

function HomeFeature() {
  return (
    <>
    <section className="page-section overflow-hidden">
          {/* Marquee Text Line */}
          <div className="marquee marquee-style-5 mt-n40 mt-sm-n20 mt-xs-0 mb-80 mb-sm-60">
            <div
              className="marquee-track marquee-animation-3"
              style={{ fontFamily: "Plus Jakarta Sans" }}
            >
              <h2 className="visually-hidden">
                Why Choose Shinora Skin and Dental Clinic?
              </h2>
              <div aria-hidden="true">
                Why Choose Shinora Skin and Dental Clinic?
              </div>
              <div aria-hidden="true">
                Why Choose Shinora Skin and Dental Clinic?
              </div>
              <div aria-hidden="true">
                Why Choose Shinora Skin and Dental Clinic?
              </div>
              <div aria-hidden="true">
                Why Choose Shinora Skin and Dental Clinic?
              </div>
              <div aria-hidden="true">
                Why Choose Shinora Skin and Dental Clinic?
              </div>
            </div>
          </div>
          {/* End Marquee Text Line */}
          <div className="container">
            <div className="row mb-100 mb-sm-80">
              <div className="col-sm-7 col-md-5">
                <div className="circle overflow-hidden">
                  <img src="images2/section-4.jpg" alt="Image Description" />
                </div>
              </div>
            </div>
            {/* Features Grid */}
            <div className="row">
              <div className="col-11 col-lg-10 offset-1 px-md-4">
                <div className="row gx-huge">
                  {/* Features Item */}
                  <div className="col-md-6 mb-100 mb-md-60">
                    <div className="position-relative">
                      <div className="features-1-icon">
                        <img src="images2/skin-1.png" alt="" />
                      </div>
                      <h3 className="mb-40">
                        Personalized Care <br />
                        Approach
                      </h3>
                      <hr className="mt-0 mb-30 black" />
                      <p className="features-1-descr mb-0">
                        At Shinora, we understand that each patient is unique. Our
                        treatments are tailored to meet your individual needs,
                        ensuring that you receive the most effective care. Our
                        team, takes the time to listen to your concerns and craft
                        personalized treatment plans that address your specific
                        health and beauty goals.
                      </p>
                    </div>
                  </div>
                  {/* End Features Item */}
                  {/* Features Item */}
                  <div className="col-md-6 mt-n140 mt-sm-0 mb-100 mb-md-60">
                    <div className="position-relative">
                      <div className="features-1-icon">
                        <img src="images2/dental-1.png" alt="" />
                      </div>
                      <h3 className="mb-40">
                        Advanced Medical <br />
                        Expertise
                      </h3>
                      <hr className="mt-0 mb-30 black" />
                      <p className="features-1-descr mb-0">
                        With a combined expertise in dermatology, cosmetology,
                        trichology, and dentistry, our clinic is at the forefront
                        of medical science. We're committed to providing the
                        highest quality of care, utilizing the latest advancements
                        in medical treatments and technologies to ensure the best
                        possible outcomes for our patients.
                      </p>
                    </div>
                  </div>
                  {/* End Features Item */}
                  {/* Features Item */}
                  <div className="col-md-6 mb-md-60">
                    <div className="position-relative">
                      <div className="features-1-icon">
                        <img src="images2/holistic.png" alt="" />
                      </div>
                      <h3 className="mb-40">
                        Holistic Health <br />
                        Focus
                      </h3>
                      <hr className="mt-0 mb-30 black" />
                      <p className="features-1-descr mb-0">
                        Our approach goes beyond treating symptoms. We focus on
                        your overall health and wellbeing, integrating
                        preventative care and education into our practice. Our
                        goal is to not only enhance your appearance but to improve
                        your health and quality of life, making sure you feel as
                        good as you look.
                      </p>
                    </div>
                  </div>
                  {/* End Features Item */}
                  {/* Features Item */}
                  <div className="col-md-6 mt-n140 mt-sm-0 mb-0">
                    <div className="position-relative">
                      <div className="features-1-icon">
                        <img src="images2/patient-care.png" alt="" />
                      </div>
                      <h3 className="mb-40">
                        Exceptional Patient
                        <br />
                        Experience
                      </h3>
                      <hr className="mt-0 mb-30 black" />
                      <p className="features-1-descr mb-0">
                        From the moment you step into Shinora Skin and Dental
                        Clinic, you'll experience the highest level of care and
                        comfort. Our clinic is designed to be a welcoming space
                        where your needs are met with professionalism and
                        compassion. Plus, our dedicated support team is here to
                        ensure a seamless experience, from scheduling appointments
                        to aftercare follow-ups.
                      </p>
                    </div>
                  </div>
                  {/* End Features Item */}
                </div>
              </div>
            </div>
            {/* End Features Grid */}
          </div>
        </section>
    </>
  )
}

export default HomeFeature