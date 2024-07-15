import React from 'react'

function HomeHero() {
  return (
    <>
    {/* Home Section */}
    <section
          className="home-section bg-dark-alpha-30 light-content parallax-5"
          id="home"
        >
          <div
            id="bg1"
            className="background-div"
            style={{ backgroundImage: "url(images2/home-bg/001.jpg)" }}
          />
          <div id="bg2" className="background-div" />
          <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
            {/* Home Section Content */}
            <div className="home-content text-center">
              <h1
                className="hs-title-7 mb-40"
                style={{ fontFamily: "BlackMango" }}
              >
                <span className="wow charsAnimIn-1" data-splitting="chars">
                  Shinora
                  <span
                    className="font-alt"
                    style={{ fontFamily: "Plus Jakarta Sans" }}
                  >
                    Skin &amp; Dental Clinic
                  </span>
                </span>
              </h1>
              <div className="row">
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                  <hr
                    className="white mt-0 mb-30 wow scalexIn"
                    data-wow-delay="0.85s"
                  />
                  <div className="row wow fadeInUpShort" data-wow-delay="1.35s">
                    <div className="col-sm-6 col-md-7 text-center text-sm-start mb-xs-30">
                      <p
                        className="mb-0"
                        style={{
                          fontFamily: "PlusJakartaSans",
                          fontSize: "x-large"
                        }}
                      >
                        Shinora Skin &amp; Dental Clinic, your premier destination
                        for advanced skin and dental care.
                      </p>
                    </div>
                    <div className="col-sm-6 col-md-5 text-center text-sm-end local-scroll">
                      <a
                        href="contact-us.html"
                        className="btn btn-mod btn-large btn-round btn-hover-anim"
                        style={{ backgroundColor: "#014e4e" }}
                      >
                        <span>Exclusive Offer</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Home Section Content */}
            {/* Scroll Down */}
            <div
              className="local-scroll scroll-down-wrap-4 wow fadeInUp"
              data-wow-offset={0}
            >
              <div className="full-wrapper text-end">
                <a href="#about" className="scroll-down-4">
                  <i className="icon-arrow-down" />
                </a>
              </div>
            </div>
            {/* End Scroll Down */}
            {/* Status */}
            <div
              className="hs-status uppercase wow fadeInUp"
              data-wow-offset={0}
              style={{ color: "#ddbc93" }}
            >
              Based in Ahmedabad, India
            </div>
            {/* End Status */}
          </div>
        </section>
        {/* End Home Section */}
    </>
  )
}

export default HomeHero