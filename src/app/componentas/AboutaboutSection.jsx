import React from 'react'

function AboutaboutSection() {
  return (
    <>
    <section className="page-section" id="about">
          <div className="container position-relative">
            <div className="row mb-xs-40">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                <p
                  className="section-descr mb-40 mb-sm-20 wow fadeInUp"
                  data-wow-offset={0}
                >
                  Our vision is to create a world where every individual can
                  access the best in skin and dental care, empowering them to look
                  and feel their best. At Shinora, we believe in holistic health -
                  that true beauty comes from within and that everyone deserves to
                  shine.
                </p>
                <div className="local-scroll wow fadeInUp" data-wow-delay="0.12s">
                  <a
                    href="fancy-services.html"
                    className="link-hover-anim"
                    data-link-animate="y"
                  >
                    View our Treatments <i className="mi-arrow-right size-24" />
                  </a>
                </div>
              </div>
            </div>
            {/* Images Composition */}
            <div className="row">
              <div className="col-sm-4 mb-xs-50">
                <div className="me-xl-4 pe-sm-2">
                  <div className="composition-1">
                    <div className="composition-1-image-1">
                      <img
                        src="images/demo-fancy/section-image-1.jpg"
                        alt="Image Description"
                      />
                    </div>
                    <div className="composition-1-image-2">
                      <img
                        src="images/demo-fancy/section-image-2.jpg"
                        alt="Image Description"
                      />
                    </div>
                    <div
                      className="composition-1-decoration-1"
                      data-rellax-y=""
                      data-rellax-speed="-0.5"
                      data-rellax-percentage="0.65"
                    >
                      <img src="images/demo-fancy/decoration-1.svg" alt="" />
                    </div>
                    <div
                      className="composition-1-decoration-2"
                      data-rellax-y=""
                      data-rellax-speed="0.5"
                      data-rellax-percentage="0.2"
                    >
                      <img src="images/demo-fancy/decoration-2.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-xs-50">
                <div className="ms-xl-5 ps-sm-2 me-xl-4 pe-sm-2 pe-xl-3">
                  <div className="composition-2">
                    <div className="composition-2-image-1 mt-xs-0">
                      <img
                        src="images/demo-fancy/section-image-3.jpg"
                        alt="Image Description"
                      />
                    </div>
                    <div className="composition-2-image-2">
                      <img
                        src="images/demo-fancy/section-image-4.jpg"
                        alt="Image Description"
                      />
                    </div>
                    <div
                      className="composition-2-decoration"
                      data-rellax-y=""
                      data-rellax-speed="0.5"
                      data-rellax-percentage="0.2"
                    >
                      <img src="images/demo-fancy/decoration-3.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="ms-xl-4 ps-sm-2">
                  <div className="composition-3">
                    <div className="composition-3-image-1">
                      <img
                        src="images/demo-fancy/section-image-6.jpg"
                        alt="Image Description"
                      />
                    </div>
                    <div className="composition-3-image-2">
                      <img
                        src="images/demo-fancy/section-image-5.jpg"
                        alt="Image Description"
                      />
                    </div>
                    <div
                      className="composition-3-decoration-1"
                      data-rellax-y=""
                      data-rellax-speed="0.5"
                      data-rellax-percentage="0.7"
                    >
                      <img src="images/demo-fancy/decoration-4.svg" alt="" />
                    </div>
                    <div
                      className="composition-3-decoration-2"
                      data-rellax-y=""
                      data-rellax-speed="-0.5"
                      data-rellax-percentage="0.5"
                    >
                      <img src="images/demo-fancy/decoration-5.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Images Composition */}
          </div>
        </section>
    </>
  )
}

export default AboutaboutSection