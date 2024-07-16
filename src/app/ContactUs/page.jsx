import React from 'react'
import NavbarAbout from '../componentas/NavbarAbout'
import Loader from '../componentas/Loader'
import ContactUsHomeSection from '../componentas/ContactUsHomeSection'
import ContactUscontactSection from '../componentas/ContactUscontactSection'
import ContactUsGmap from '../componentas/ContactUsGmap'
import Footer from '../componentas/Footer'
import Script from 'next/script'
import ContactUsScript from '../componentas/ContactUsScript'
import ContactUsHead from '../componentas/ContactUsHead'
function page() {
  return (
    <>
    
      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TGZDYJMBNS"></Script>
      <Script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TGZDYJMBNS');
      `}}></Script> */}
      <title>Shinora - Skin & Dental Clinic</title>
      <meta name="description" content="Shinora &mdash; Skin & Dental Clinic" />
      <meta charSet="utf-8" />
      <meta name="author" content="https://themeforest.net/user/bestlooker/portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/splitting/dist/splitting.css"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/splitting/dist/splitting-cells.css"
          rel="stylesheet"
        />
      <link rel="icon" href="images/favicon.png" type="image/png" sizes="any" />
      <link rel="icon" href="images/favicon.svg" type="image/svg+xml" />

      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/style-responsive.css" />
      <link rel="stylesheet" href="css/vertical-rhythm.min.css" />
      <link rel="stylesheet" href="css/magnific-popup.css" />
      <link rel="stylesheet" href="css/owl.carousel.css" />
      <link rel="stylesheet" href="css/splitting.css" />
      <link rel="stylesheet" href="css/YTPlayer.css" />
      <link rel="stylesheet" href="css/demo-strong/demo-strong.css" />

      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
   
    <div className="appear-animate">
        <Loader/>
        {/* Skip to Content */}
<a href="#main" className="btn skip-to-content">Skip to Content</a>
{/* End Skip to Content */}
{/* Page Wrap */}
<div className="page" id="top">
  <NavbarAbout/>
  <main id="main">
{/* Home Section Start */}
<ContactUsHomeSection/>
{/* Home Section End */}

{/* Contact Section Start */}
<ContactUscontactSection/>
{/* Contact Section End  */}

{/* Divider */}
<hr className="mt-0 mb-0" />
{/* End Divider */}

{/* Google Map Start */}
<ContactUsGmap/>
{/* Google Map End  */}
  </main>
<Footer/>
  </div>
{/* Start JS */}
<ContactUsScript/>
<Script src="js/jquery.min.js"></Script>
    <Script src="js/bootstrap.bundle.min.js"></Script>
    <Script src="js/plugins.js"></Script>
    <Script src="js/jquery.ajaxchimp.min.js"></Script>
    <Script src="js/contact-form.js"></Script>
    <Script src="js/all.js"></Script>
{/* End JS */}
         
    </div>
    </>
   
  )
}

export default page