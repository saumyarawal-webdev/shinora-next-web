"use client";
import IndexHead from "./componentas/IndexHead";
import Loader from "./componentas/Loader";
import Script from "next/script";
import Footer from "./componentas/Footer";
import NavbarHome from "./componentas/NavbarHome";
import HomeHero from "./componentas/HomeHero";
import HomeAbout from "./componentas/HomeAbout";
import HomeTeamSection from "./componentas/HomeTeamSection";
import HomeService from "./componentas/HomeService";
import HomeSplit from "./componentas/HomeSplit";
import HomeServices from "./componentas/HomeServices";
import HomeFeature from "./componentas/HomeFeature";
import HomeBlog from "./componentas/HomeBlog";
import HomeNewsLetter from "./componentas/HomeNewsLetter";
import HomeContact from "./componentas/HomeContact";
import HomeScript from "./componentas/HomeScript";




export default function Home() {





  return (
    <>
    {/* Google tag (gtag.js) */}
    <meta charSet="UTF-8" />
    <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Best Dermatologist &amp; Dentist of Ahmedabad | Shinora</title>
    <meta
      name="description"
      content="Looking for expert skin care and best dentist in ahmedabad? Shinora Clinic offers top-notch dermatology services near you. Book your appointment now!"
    />
    <meta
      name="keyword"
      content=" best dermatologist in Ahmedabad, skin specialist near me, best dermatologist near me, best skin doctor near me, best dermatologist Sindhubhavan, best skin doctor in Ahmedabad, best skin specialist doctor in Ahmedabad"
    />
    <meta name="robots" content="index,follow" />
    <meta name="contact" content="+91 889 933 0033" />
    <meta name="distribution" content="Global" />
    <meta name="rating" content="General" />
    <meta name="revisit-after" content="1 days" />
    <meta name="geo.placename" content="Ahmedabad, India" />
    <meta name="geo.placename" content="Gujarat, India" />
    <meta
      name="author"
      content="Shinora -  Skin & Dental Clinic, appointment@shinora.in"
    />
    <meta
      name="og:title"
      content="Best Dermatologist in Ahmedabad | Skin Specialist - Shinora"
    />
    <meta
      name="og:description"
      content="Looking for expert skin care? Shinora Clinic offers top-notch dermatology services near you. Book your appointment now!"
    />
    <meta property="og:image" content="" />
    <meta name="og:email" content="appointment@shinora.in" />
    <meta name="og:phone_number" content="+91 889 933 0033" />
    <meta name="og:url" content="https://www.shinora.in/" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="" />
    <meta
      name="twitter:title"
      content="Best Dermatologist in Ahmedabad | Skin Specialist - Shinora"
    />
    <meta
      name="twitter:description"
      content="Looking for expert skin care? Shinora Clinic offers top-notch dermatology services near you. Book your appointment now!"
    />
    {/* Favicon */}
    <link
      rel="icon"
      href="images/favicon/favicon.ico"
      type="image/png"
      sizes="any"
    />
    <link rel="icon" href="images/favicon/favicon.ico" type="image/svg+xml" />
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
    <link rel="stylesheet" href="css/before-after.css" />
    <style
      dangerouslySetInnerHTML={{
        __html:
          '\n      @font-face {\n        font-family: BlackMango;\n        src: url(./webfonts/black-mango/BlackMango-Medium.ttf);\n      }\n      @font-face {\n        font-family: Plus Jakarta Sans;\n        src: url(./webfonts/plus-jakatra/PlusJakartaSans-Regular.ttf);\n      }\n      h1,\n      h3 {\n        font-family: Plus Jakarta Sans;\n        font-size: 45px;\n      }\n\n      p {\n        font-family: "Plus Jakarta Sans", sans-serif;\n      }\n    '
      }}
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n      @keyframes fadeIn {\n        0% {\n          opacity: 0;\n        }\n        100% {\n          opacity: 1;\n        }\n      }\n\n      #home {\n        animation: fadeIn 3s ease-in-out;\n        background-size: cover;\n        background-position: center;\n        transition: background-image 3s ease-in-out;\n      }\n\n      .background-div {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        background-size: cover;\n        background-position: center;\n        transition: opacity 3s ease-in-out;\n        filter: brightness(30%);\n      }\n\n      #bg1 {\n        opacity: 1;\n      }\n      #bg2 {\n        opacity: 0;\n      }\n    "
      }}
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n      .nav-scrolled a {\n        color: #055d5b !important; /* Change this color to whatever you want for the scrolling state */\n      }\n    "
      }}
    />
    {/* Page Loader */}
    {/* <div className="page-loader">
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
      <NavbarHome/>
      {/* End Navigation Panel */}
      <main id="main">
        {/* Home Section */}
        <HomeHero/>
        {/* End Home Section */}
        {/* About Section */}
        <HomeAbout/>
        {/* End About Section */}
        {/* Divider */}
        <hr className="mt-0 mb-0" />
        {/* End Divider */}
        {/* Team Section */}
        <HomeTeamSection/>
        {/* End Team Section */}
        {/* Divider */}
        <hr className="mt-0 mb-0" />
        {/* End Divider */}
        {/* Services Section */}
        <HomeService/>
        {/* End Services Section */}
        {/* Split Section */}
        <HomeSplit/>
        {/* End Split Section */}
        {/* Services Section */}
        <HomeServices/>
        {/* End Services Section */}
        {/* Divider */}
        <hr className="mt-0 mb-0" />
        {/* End Divider */}
        {/* Features Section */}
        <HomeFeature/>
        {/* End Features Section */}
        {/* Testimonials Section */}
        {/* <section class="page-section overflow-hidden">
      <div class="container">
        <div class="row mb-90 mb-sm-50">
          <div
            class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center"
          >
            <h2
              class="section-title-strong mb-40"
              style="font-family: Plus Jakarta Sans"
            >
              Patients <span class="font-alt">Stories</span>
            </h2>
            <p class="mb-0">
              Etiam et arcu nec quam laoreet hendrerit eget sed velit. Fusce
              convallis elit at ex sodales, quis maximus augue hendrerit.
              Phasellus eget turpis vel nibh convallis vulputate.
              Pellentesque efficitur augue ac ex maximus, eget viverra sem
              aliquam. Mauris egestas, lectus sed accumsan varius.
            </p>
          </div>
        </div> */}
        {/* Testimonials Carousel */}
        {/* <div class="wow fadeInUp">
          <div class="testimonials-slider-3 slider-strong"> */}
        {/* Testimonials item */}
        {/* <div class="testimonials-3-item">
              <div class="testimonials-3-icon">
                <i class="icon-quotation-mark"></i>
              </div>
              <blockquote class="testimonials-3-text">
                <p class="mb-0">
                  Beautifull template, and easy to customize. Optimization
                  and structure are verry good for SEO basics. Quick,
                  courteous, and extremely helpful!
                </p>
                <footer class="testimonials-3-author pt-30 clearfix">
                  <div class="testimonials-3-author-img float-start">
                    <img
                      width="44"
                      height="44"
                      src="images/demo-strong/user-1.jpg"
                      alt="Image description is here"
                    />
                  </div>
                  <div class="overflow-hidden">
                    Thomas Johnson
                    <div class="small">UI/UX designer</div>
                  </div>
                </footer>
              </blockquote>
            </div> */}
        {/* End Testimonials item */}
        {/* Testimonials item */}
        {/* <div class="testimonials-3-item">
              <div class="testimonials-3-icon">
                <i class="icon-quotation-mark"></i>
              </div>
              <blockquote class="testimonials-3-text">
                <p class="mb-0">
                  This is template is so beautiful and has such wonderful
                  new options. It is updated often which gives me even more
                  quality.
                </p>
                <footer class="testimonials-3-author pt-30 clearfix">
                  <div class="testimonials-3-author-img float-start">
                    <img
                      width="44"
                      height="44"
                      src="images/demo-strong/user-2.jpg"
                      alt="Image description is here"
                    />
                  </div>
                  <div class="overflow-hidden">
                    Alice Watson
                    <div class="small">3D artist</div>
                  </div>
                </footer>
              </blockquote>
            </div> */}
        {/* End Testimonials item */}
        {/* Testimonials item */}
        {/* <div class="testimonials-3-item">
              <div class="testimonials-3-icon">
                <i class="icon-quotation-mark"></i>
              </div>
              <blockquote class="testimonials-3-text">
                <p class="mb-0">
                  A remarkable model, everything has been thought out with
                  talent, the design, the responsiveness, the various
                  adaptations.
                </p>
                <footer class="testimonials-3-author pt-30 clearfix">
                  <div class="testimonials-3-author-img float-start">
                    <img
                      width="44"
                      height="44"
                      src="images/demo-strong/user-3.jpg"
                      alt="Image description is here"
                    />
                  </div>
                  <div class="overflow-hidden">
                    Peter Braun
                    <div class="small">Business owner</div>
                  </div>
                </footer>
              </blockquote>
            </div> */}
        {/* End Testimonials item */}
        {/* Testimonials item */}
        {/* <div class="testimonials-3-item">
              <div class="testimonials-3-icon">
                <i class="icon-quotation-mark"></i>
              </div>
              <blockquote class="testimonials-3-text">
                <p class="mb-0">
                  Beautifull template, and easy to customize. Optimization
                  and structure are verry good for SEO basics. Quick,
                  courteous, and extremely helpful!
                </p>
                <footer class="testimonials-3-author pt-30 clearfix">
                  <div class="testimonials-3-author-img float-start">
                    <img
                      width="44"
                      height="44"
                      src="images/demo-strong/user-1.jpg"
                      alt="Image description is here"
                    />
                  </div>
                  <div class="overflow-hidden">
                    Thomas Johnson
                    <div class="small">UI/UX designer</div>
                  </div>
                </footer>
              </blockquote>
            </div> */}
        {/* End Testimonials item */}
        {/* Testimonials item */}
        {/* <div class="testimonials-3-item">
              <div class="testimonials-3-icon">
                <i class="icon-quotation-mark"></i>
              </div>
              <blockquote class="testimonials-3-text">
                <p class="mb-0">
                  This is template is so beautiful and has such wonderful
                  new options. It is updated often which gives me even more
                  quality.
                </p>
                <footer class="testimonials-3-author pt-30 clearfix">
                  <div class="testimonials-3-author-img float-start">
                    <img
                      width="44"
                      height="44"
                      src="images/demo-strong/user-2.jpg"
                      alt="Image description is here"
                    />
                  </div>
                  <div class="overflow-hidden">
                    Alice Watson
                    <div class="small">3D artist</div>
                  </div>
                </footer>
              </blockquote>
            </div> */}
        {/* End Testimonials item */}
        {/* Testimonials item */}
        {/* <div class="testimonials-3-item">
              <div class="testimonials-3-icon">
                <i class="icon-quotation-mark"></i>
              </div>
              <blockquote class="testimonials-3-text">
                <p class="mb-0">
                  A remarkable model, everything has been thought out with
                  talent, the design, the responsiveness, the various
                  adaptations.
                </p>
                <footer class="testimonials-3-author pt-30 clearfix">
                  <div class="testimonials-3-author-img float-start">
                    <img
                      width="44"
                      height="44"
                      src="images/demo-strong/user-3.jpg"
                      alt="Image description is here"
                    />
                  </div>
                  <div class="overflow-hidden">
                    Peter Braun
                    <div class="small">Business owner</div>
                  </div>
                </footer>
              </blockquote>
            </div> */}
        {/* End Testimonials item */}
        {/* </div>
        </div> */}
        {/* End Testimonials Carousel */}
        {/* </div>
    </section> */}
        {/* End Testimonials Section */}
        {/* Divider */}
        <hr className="mt-0 mb-0" />
        {/* End Divider */}
        {/* Blog Section */}
          <HomeBlog/>
        {/* End Blog Section */}
        {/* Newsletter Section */}
          <HomeNewsLetter/>
        {/* End Newsletter Section */}
        {/* Contact Section */}
        <HomeContact/>
        {/* End Contact Section */}
      </main>
      <Footer/>
    </div>
    {/* End Page Wrap */}
    {/* JS */}
    <HomeScript/>
    <Script src="js/jquery.min.js"></Script>
    <Script src="js/bootstrap.bundle.min.js"></Script>
    <Script src="js/plugins.js"></Script>
    <Script src="js/jquery.ajaxchimp.min.js"></Script>
    <Script src="js/contact-form.js"></Script>
    <Script src="js/all.js"></Script>
    <Script src="js/before-after.js"></Script>
    <Script src="js/homeInd.js"></Script>
    {/* End JS */}
    
  </>
  
  );
}
