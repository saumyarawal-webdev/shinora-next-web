import React from 'react'
import Script from 'next/script'
import Loader from '../componentas/Loader'
import NavbarAbout from '../componentas/NavbarAbout'
import BlogMainHome from '../componentas/BlogMainHome'
import BlogMainBlogSection from '../componentas/BlogMainBlogSection'
import Footer from '../componentas/Footer'
function page() {
  return (
    <>
  {/* Google tag (gtag.js) */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Best Dermatologist in Ahmedabad | Skin Specialist - Shinora</title>
  <meta
    name="description"
    content="Looking for expert skin care? Shinora Clinic offers top-notch dermatology services near you. Book your appointment now!"
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
  <Loader/>
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
      <BlogMainHome/>
      {/* End Home Section */}
      {/* Blog Section */}
      <BlogMainBlogSection/>
      {/* End Blog Section */}
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
    <Script src="js/before-after.js"></Script>
  {/* End JS */}
  {/* Mirrored from resonance.bestlooker.pro/strong-multi-page.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 18 Mar 2024 06:18:38 GMT */}
</>

  )
}

export default page