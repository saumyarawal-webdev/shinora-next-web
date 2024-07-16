import React from 'react'
import Script from 'next/script'
import NavbarScrollEffect from '../componentas/NavbarScrollEffect'
import NavbarSubBlog from '../componentas/NavbarSubBlog'
import Blog2HomeSection from '../componentas/Blog2HomeSection'
import Blog2Section from '../componentas/Blog2Section'
import Footer from '../componentas/Footer'
function page() {
  return (
   <>
  {/* Change the value of lang="en" attribute if your website's language is not English.
You can find the code of your language here - https://www.w3schools.com/tags/ref_language_codes.asp */}
  {/* Google tag (gtag.js) */}
  <title>Shinora — Skin &amp; Dental Clinic</title>
  <meta name="description" content="Shinora — Skin & Dental Clinic" />
  <meta charSet="utf-8" />
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
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n      @font-face {\n        font-family: BlackMango;\n        src: url(./webfonts/black-mango/BlackMango-Medium.ttf);\n      }\n      @font-face {\n        font-family: Plus Jakarta Sans;\n        src: url(./webfonts/plus-jakatra/PlusJakartaSans-Regular.ttf);\n      }\n      h1,\n      h3 {\n        font-family: Plus Jakarta Sans;\n        font-size: 45px;\n      }\n\n      p {\n        font-family: "Plus Jakarta Sans", sans-serif;\n      }\n    '
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      .nav-scrolled a {\n        color: #055d5b !important; /* Change this color to whatever you want for the scrolling state */\n      }\n    "
    }}
  />
  {/* Page Loader */}
  <div className="page-loader">
    <div className="loader">Loading...</div>
  </div>
  {/* End Page Loader */}
  {/* Skip to Content */}
  <a href="#main" className="btn skip-to-content">
    Skip to Content
  </a>
  {/* End Skip to Content */}
  {/* Page Wrap */}
  <div className="page" id="top">
    {/* Navigation Panel */}
    <NavbarSubBlog/>
    {/* End Navigation Panel */}
    <main id="main">
      {/* Home Section */}
     <Blog2HomeSection/>
      {/* End Home Section */}
      {/* Section */}
      <Blog2Section/>
      {/* End Section */}
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
  <NavbarScrollEffect/>
  <Script src="js/jquery.min.js"></Script>
    <Script src="js/bootstrap.bundle.min.js"></Script>
    <Script src="js/plugins.js"></Script>
    <Script src="js/jquery.ajaxchimp.min.js"></Script>
    <Script src="js/contact-form.js"></Script>
    <Script src="js/all.js"></Script>
  {/* End JS */}
  {/* Mirrored from resonance.bestlooker.pro/strong-blog-single.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 18 Mar 2024 06:19:44 GMT */}
</>
)
}
export default page