import React from 'react'
import Footer from '../componentas/Footer'
import NavbarAbout from '../componentas/NavbarAbout'
import Script from 'next/script'
function About() {
  return (

    <>
    {/* Change the value of lang="en" attribute if your website's language is not English.
  You can find the code of your language here - https://www.w3schools.com/tags/ref_language_codes.asp */}
    {/* Google tag (gtag.js) */}
    <title>Shinora — Skin &amp; Dental Clinic</title>
    <meta name="description" content="Shinora — Skin & Dental Clinic" />
    <meta charSet="utf-8" />
    <meta
      name="author"
      content="https://themeforest.net/user/bestlooker/portfolio"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {/* Favicon */}
    <link rel="icon" href="images/favicon.png" type="image/png" sizes="any" />
    <link rel="icon" href="images/favicon.svg" type="image/svg+xml" />
    {/* CSS */}
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/style-responsive.css" />
    <link rel="stylesheet" href="css/vertical-rhythm.min.css" />
    <link rel="stylesheet" href="css/magnific-popup.css" />
    <link rel="stylesheet" href="css/owl.carousel.css" />
    <link rel="stylesheet" href="css/splitting.css" />
    <link rel="stylesheet" href="css/YTPlayer.css" />
    <link rel="stylesheet" href="css/demo-strong/demo-strong.css" />
    {/* Google Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com/" />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    {/* Page Loader */}
    {/* <div className="page-loader color">
      <div className="loader">Loading...</div>
    </div> */}
    {/* End Page Loader */}
    {/* Skip to Content */}
    <a href="#main" className="btn skip-to-content">
      Skip to Content
    </a>
    {/* End Skip to Content */}
    {/* Page Wrap */}
    <div className="page" id="top">
      {/* Navigation Panel */}
     <NavbarAbout/>

      {/* End Navigation Panel */}
      <main id="main">
        {/* Home Section */}
        <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
          {/* Background Shape */}
          <div className="bg-shape-1 wow fadeIn">
            <img src="images/demo-fancy/bg-shape-1.svg" alt="" />
          </div>
          {/* End Background Shape */}
          <div className="container position-relative pt-10 pt-sm-40 text-center">
            <div className="row">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <h1 className="hs-title-10 mb-10">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    About<span>&nbsp;</span>
                    <span className="mark-decoration-3-wrap">  Shinora
                      <b
                        className="mark-decoration-3 wow scalexIn"
                        data-wow-delay="0.5s"
                      />
                    </span>
                  </span>
                </h1>
                <p
                  className="section-descr mb-0 wow fadeIn"
                  data-wow-delay="0.2s"
                >
                  Your Partner in Oral Health and Beauty.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End Home Section */}
        {/* About Section */}
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
        {/* End About Section */}
        {/* Divider */}
        <hr className="mt-0 mb-0" />
        {/* End Divider */}
        {/* Team Section */}
        <section className="page-section" id="team">
          <div className="container">
            <div className="row mb-70 mb-sm-50">
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                <h2 className="section-title mb-30 mb-sm-20">
                  <span className="text-gray">Our</span> Team
                  <span className="text-gray">.</span>
                </h2>
                <div className="text-gray">
                  Meet our dedicated team of experts at Shinora Skin and Dental
                  Clinic. Each member brings a wealth of knowledge and specialized
                  skills to deliver exceptional patient care.
                </div>
              </div>
            </div>
            <div className="row mt-n40">
              {/* Team item */}
              <div className="col-md-4 mt-40">
                <div className="team-item">
                  <div className="team-item-image">
                    <img
                      src="images2/team/dr-bhavarth-2.jpeg"
                      className="wow scaleOutIn"
                      data-wow-duration="1.2s"
                      alt="Image Description"
                    />
                    <div className="team-item-detail">
                      <div className="team-social-links">
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Facebook</div>
                          <i className="fa-facebook-f" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Twitter</div>
                          <i className="fa-twitter" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Pinterest</div>
                          <i className="fa-pinterest-p" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-item-descr">
                    <div className="team-item-name">Dr. Bhavarth V. Kalaria</div>
                    <div className="team-item-role">M.B.B.S. D.V.D. (F.A.M)</div>
                  </div>
                </div>
              </div>
              {/* End Team item */}
              {/* Team item */}
              <div className="col-md-4 mt-40">
                <div className="team-item">
                  <div className="team-item-image">
                    <img
                      src="images2/team/dr-lipi-2.jpeg"
                      className="wow scaleOutIn"
                      data-wow-duration="1.2s"
                      alt="Image Description"
                    />
                    <div className="team-item-detail">
                      <div className="team-social-links">
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Facebook</div>
                          <i className="fa-facebook-f" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Twitter</div>
                          <i className="fa-twitter" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Pinterest</div>
                          <i className="fa-pinterest-p" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-item-descr">
                    <div className="team-item-name">Dr. Lipi B. Kalaria</div>
                    <div className="team-item-role">B.P.T. P.G.D.C.C</div>
                  </div>
                </div>
              </div>
              {/* End Team item */}
              {/* Team item */}
              <div className="col-md-4 mt-40">
                <div className="team-item">
                  <div className="team-item-image">
                    <img
                      src="images2/team/dr-chandni-2.jpeg"
                      className="wow scaleOutIn"
                      data-wow-duration="1.2s"
                      alt="Image Description"
                    />
                    <div className="team-item-detail">
                      <div className="team-social-links">
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Facebook</div>
                          <i className="fa-facebook-f" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Twitter</div>
                          <i className="fa-twitter" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Pinterest</div>
                          <i className="fa-pinterest-p" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-item-descr">
                    <div className="team-item-name">Dr. Chandni P. Kalaria</div>
                    <div className="team-item-role">B.D.S. F.A.A.D</div>
                  </div>
                </div>
              </div>
              {/* End Team item */}
            </div>
          </div>
        </section>
        {/* End Team Section */}
        {/* Divider */}
        <hr className="mt-0 mb-0" />
        {/* End Divider */}
      </main>
      {/* Footer */}
      <Footer/>
      {/* End Footer */}
    </div>
    {/* End Page Wrap */}
    {/* JS */}
    <Script src="js/jquery.min.js"></Script>
    <Script src="js/bootstrap.bundle.min.js"></Script>
    <Script src="js/plugins.js"></Script>
    <Script src="js/jquery.ajaxchimp.min.js"></Script>
    <Script src="js/contact-form.js"></Script>
    <Script src="js/all.js"></Script>
    {/* End JS */}
    {/* Mirrored from resonance.bestlooker.pro/fancy-about.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 18 Mar 2024 06:19:34 GMT */}
  </>
  
  )
}

export default About