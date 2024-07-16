import React from 'react'
import Footer from '../componentas/Footer'
import NavbarAbout from '../componentas/NavbarAbout'
import Script from 'next/script'
import AboutHomeSection from '../componentas/AboutHomeSection'
import AboutaboutSection from '../componentas/AboutaboutSection'
import AboutTeamSection from '../componentas/AboutTeamSection'
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
        <AboutHomeSection/>
        {/* End Home Section */}
        {/* About Section */}
        <AboutaboutSection/>
        {/* End About Section */}
        {/* Divider */}
        <hr className="mt-0 mb-0" />
        {/* End Divider */}
        {/* Team Section */}
        <AboutTeamSection/>
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