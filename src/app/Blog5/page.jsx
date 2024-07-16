import React from 'react'
import Footer from '../componentas/Footer'
import Loader from '../componentas/Loader'
import NavbarScrollEffect from '../componentas/NavbarScrollEffect'
import Script from 'next/script'
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
      <nav className="main-nav transparent stick-fixed wow-menubar">
        <div className="main-nav-sub full-wrapper">
          {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
                If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
                image size for support of retina screens. See details in the template documentation. *) */}
          <div className="nav-logo-wrap local-scroll">
            <a href="index.html" className="logo font-alt">
              <img
                src="images2/logo-2.png"
                alt="Your Company Logo"
                width={190}
                height={50}
              />
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="mobile-nav" role="button" tabIndex={0}>
            <i className="mobile-nav-icon" />
            <span className="visually-hidden">Menu</span>
          </div>
          {/* Main Menu */}
          <div className="inner-nav desktop-nav">
            <ul className="clearlist local-scroll">
              <li>
                <a
                  href="index.html"
                  className="active"
                  style={{ color: "#ddbc93" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="about.html" style={{ color: "#ddbc93" }}>
                  About
                </a>
              </li>
              {/* Item With Sub */}
              <li>
                <a href="#" className="mn-has-sub" style={{ color: "#ddbc93" }}>
                  Skin Care <i className="mi-chevron-down" />
                </a>
                {/* Sub Megamenu */}
                <ul className="mn-sub mn-has-multi">
                  <li className="mn-sub-multi">
                    <ul>
                      <li>
                        <a
                          href="skincare/laser-hair-remove.html"
                          target="_blank"
                          className="nav-link"
                        >
                          Laser Hair Removal
                        </a>
                      </li>
                      <li>
                        <a href="/skincare/hair-transplant.html" target="_blank">
                          Hair Transplant
                        </a>
                      </li>
                      <li>
                        <a href="/skincare/botox.html" target="_blank">
                          Botox
                        </a>
                      </li>
                      <li>
                        <a href="/skincare/filler.html" target="_blank">
                          Filler
                        </a>
                      </li>
                      <li>
                        <a href="/skincare/threads.html" target="_blank">
                          Threads
                        </a>
                      </li>
                      <li>
                        <a href="/skincare/tatto-removal.html" target="_blank">
                          Laser Tattoo Removal
                        </a>
                      </li>
                      <li>
                        <a href="/skincare/hollywood-facial.html" target="_blank">
                          Hollywood Facial
                        </a>
                      </li>
                      <li>
                        <a
                          href="/skincare/vampire-face-lift.html"
                          target="_blank"
                        >
                          Vampire Face Lift
                        </a>
                      </li>
                      <li>
                        <a href="/skincare/acne-treatments.html" target="_blank">
                          Acne Treatments
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mn-sub-multi">
                    <ul>
                      <li>
                        <a href="/skincare/acne-scar.html" target="_blank">
                          Acne Scars Treatments
                        </a>
                      </li>
                      <li>
                        <a
                          href="/skincare//stretch-marks-reduction.html"
                          target="_blank"
                        >
                          Stretch Marks Reduction
                        </a>
                      </li>
                      <li>
                        <a
                          href="/skincare/prp_for_facial_rejuvenation.html"
                          target="_blank"
                        >
                          PRP for Facial Rejuvenation
                        </a>
                      </li>
                      <li>
                        <a
                          href="/skincare/prp_for_hair_restoration.html"
                          target="_blank"
                        >
                          PRP for Hair Restoration
                        </a>
                      </li>
                      <li>
                        <a href="/skincare/hydra-facial.html" target="_blank">
                          Hydrafacial
                        </a>
                      </li>
                      <li>
                        <a href="/skincare/chemical-peels.html" target="_blank">
                          Chemical Peels
                        </a>
                      </li>
                      <li>
                        <a href="/skincare//oxygeneo-facial.html" target="_blank">
                          Oxygeneo Facial
                        </a>
                      </li>
                      <li>
                        <a
                          href="/skincare/warts-and-mole-removal.html"
                          target="_blank"
                        >
                          Warts and Mole Removal
                        </a>
                      </li>
                      <li>
                        <a href="/skincare/derma-planning.html" target="_blank">
                          Dermaplaning
                        </a>
                      </li>
                      <li>
                        <a
                          href="/skincare//surgical-scar-reduction.html"
                          target="_blank"
                        >
                          Surgical Scar Reduction
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mn-sub-multi">
                    <ul>
                      <li>
                        <a
                          href="/skincare/microneedling-facial-restoration.html"
                          target="_blank"
                        >
                          Microneedling Rf for Facial Restoration
                        </a>
                      </li>
                      <li>
                        <a
                          href="/skincare/microneedling-deep-acne-scar.html"
                          target="_blank"
                        >
                          Microneedling Rf for Deep Acne Scars
                        </a>
                      </li>
                      <li>
                        <a href="/skincare/beared-shaping.html" target="_blank">
                          Beard Shaping
                        </a>
                      </li>
                      <li>
                        <a href="/skincare/tanning-removal.html" target="_blank">
                          Tanning Removal
                        </a>
                      </li>
                      <li>
                        <a
                          href="/skincare/shinora_iv_therapies.html"
                          target="_blank"
                        >
                          Shinora IV Therapies
                        </a>
                      </li>
                      <li>
                        <a href="/skincare/microblading.html" target="_blank">
                          Microblading
                        </a>
                      </li>
                      <li>
                        <a href="/skincare/melasma.html" target="_blank">
                          Melasma
                        </a>
                      </li>
                      <li>
                        <a href="/skincare/freckles.html" target="_blank">
                          Freckles
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* End Sub Megamenu */}
              </li>
              {/* End Item With Sub */}
              {/* Item With Sub */}
              <li>
                <a href="#" className="mn-has-sub" style={{ color: "#ddbc93" }}>
                  Dental Care <i className="mi-chevron-down" />
                </a>
                {/* Sub Megamenu */}
                <ul className="mn-sub mn-has-multi">
                  <li className="mn-sub-multi">
                    <ul>
                      <li>
                        <a
                          href="/dentalcare/digital_imp_sys.html"
                          target="_blank"
                        >
                          Digital Impression System with Intraoral Scanner
                        </a>
                      </li>
                      <li>
                        <a href="/dentalcare/digital_x_ray.html" target="_blank">
                          Digital X-ray
                        </a>
                      </li>
                      <li>
                        <a
                          href="/dentalcare/ultrasonic_scaling.html"
                          target="_blank"
                        >
                          Ultra Sonic Scaling
                        </a>
                      </li>
                      <li>
                        <a
                          href="/dentalcare/natural_tooth_coloured.html"
                          target="_blank"
                        >
                          Natural Tooth Coloured
                        </a>
                      </li>
                      <li>
                        <a
                          href="/dentalcare/composite-filling.html"
                          target="_blank"
                        >
                          Composite Filling
                        </a>
                      </li>
                      <li>
                        <a href="/dentalcare/root-canal.html" target="_blank">
                          Root Canal Treatment
                        </a>
                      </li>
                      <li>
                        <a
                          href="/dentalcare/dental_extraction.html"
                          target="_blank"
                        >
                          Dental Extraction
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mn-sub-multi">
                    <ul>
                      <li>
                        <a
                          href="dentalcare/prosthetic_crown_bridge.html"
                          target="_blank"
                        >
                          Prosthetic Crown &amp; Bridge
                        </a>
                      </li>
                      <li>
                        <a href="/dentalcare/periodontal.html" target="_blank">
                          Periodontal Treatment
                        </a>
                      </li>
                      <li>
                        <a href="/dentalcare/gum-surgery.html" target="_blank">
                          Gum Surgery
                        </a>
                      </li>
                      <li>
                        <a
                          href="dentalcare/orthodontic-treatment.html"
                          target="_blank"
                        >
                          Orthodontic Treatment
                        </a>
                      </li>
                      <li>
                        <a
                          href="dentalcare/flexible-dentures.html"
                          target="_blank"
                        >
                          Flexible Dentures
                        </a>
                      </li>
                      <li>
                        <a
                          href="dentalcare/pediatric-dentistry.html"
                          target="_blank"
                        >
                          Pediatric Dentistry
                        </a>
                      </li>
                      <li>
                        <a href="dentalcare/laser-dentistry.html" target="_blank">
                          Laser Dentistry
                        </a>
                      </li>
                      <li>
                        <a href="dentalcare/dental-implant.html" target="_blank">
                          Dental Implants
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mn-sub-multi">
                    <ul>
                      <li>
                        <a
                          href="dentalcare/invisible-aligners.html"
                          target="_blank"
                        >
                          Invisible Aligners
                        </a>
                      </li>
                      <li>
                        <a href="dentalcare/smile-designing.html" target="_blank">
                          Smile Designing
                        </a>
                      </li>
                      <li>
                        <a
                          href="dentalcare/asthetic-dentistry.html"
                          target="_blank"
                        >
                          Aesthetic Dentistry
                        </a>
                      </li>
                      <li>
                        <a
                          href="dentalcare/veneer_lamination.html"
                          target="_blank"
                        >
                          Veneers/Laminates
                        </a>
                      </li>
                      <li>
                        <a href="dentalcare/inlay_onlay.html" target="_blank">
                          Inlay/Onlay
                        </a>
                      </li>
                      <li>
                        <a href="dentalcare/tooth_jewellery.html" target="_blank">
                          Tooth Jewellery
                        </a>
                      </li>
                      <li>
                        <a href="dentalcare/teeth_whitening.html" target="_blank">
                          Teeth Whitening
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                {/* End Sub Megamenu */}
              </li>
              {/* End Item With Sub */}
              <li>
                <a href="blog-main.html" style={{ color: "#ddbc93" }}>
                  Blog
                </a>
              </li>
              <li>
                <a href="contact-us.html" style={{ color: "#ddbc93" }}>
                  Exclusive Offer
                </a>
              </li>
            </ul>
            {/* <ul class="items-end clearlist local-scroll">
          <li>
            <a href="contact-us.html" class="opacity-1 no-hover">
              <span
                class="link-hover-anim"
                data-link-animate="y"
                style="color: #ddbc93"
                ><span
                  class="icon-ellipse me-1"
                  style="color: #ddbc93"
                ></span>
                Say hello</span
              >
            </a>
          </li>
        </ul> */}
          </div>
          {/* End Main Menu */}
        </div>
      </nav>
      {/* End Navigation Panel */}
      <main id="main">
        {/* Home Section */}
        <section
          className="page-section bg-dark-alpha-30 light-content parallax-5"
          style={{ backgroundImage: "url(images/demo-strong/section-bg-1.jpg)" }}
          id="home"
        >
          <div className="container position-relative pt-sm-30">
            {/* Home Section Content */}
            <div className="home-content text-center">
              <h1 className="section-title-medium mb-0">
                <span className="wow charsAnimIn" data-splitting="chars">
                  Top 5 Diet Tips for Healthy Skin
                </span>
              </h1>
              {/* Author, Categories, Comments */}
              <div
                className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="d-inline-block me-3">
                  <a href="#">
                    <i className="mi-clock size-16" />
                    <span className="visually-hidden">Date:</span> May 10, 2024
                  </a>
                </div>
                <div className="d-inline-block me-3">
                  <a href="#">
                    <i className="mi-user size-16" />
                    <span className="visually-hidden">Author:</span>Dr. Bhavarth
                    Kalaria
                  </a>
                </div>
                <div className="d-inline-block me-3">
                  <i className="mi-folder size-16" />
                  <span className="visually-hidden">Categories:</span>
                  <a href="#">Skin Care</a>, <a href="#">Dermatologist</a>
                </div>
                <div className="d-inline-block me-3">
                  <a href="#">
                    <i className="mi-message size-16" /> 0 Comments
                  </a>
                </div>
              </div>
              {/* End Author, Categories, Comments */}
            </div>
            {/* End Home Section Content */}
          </div>
        </section>
        {/* End Home Section */}
        {/* Section */}
        <section className="page-section">
          <div className="container relative">
            <div className="row">
              {/* Content */}
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                {/* Post */}
                <div className="blog-item mb-80 mb-xs-40">
                  <div className="blog-item-body">
                    <div className="mb-40 mb-xs-30">
                      <img
                        src="images2/blog/blog-5.jpg"
                        alt="Image Description"
                      />
                    </div>
                    <h3>Introduction</h3>
                    <p>
                      Healthy skin starts from the inside out. At Shinora Clinic,
                      Dr. Bhavarth Kalaria emphasizes the profound impact of diet
                      on skin health. With decades of experience in dermatology
                      and a keen interest in nutritional science, Dr. Kalaria
                      shares his expert advice on how the right foods can enhance
                      your skin's health and appearance.
                    </p>
                    <h3>Understanding the Role of Diet in Skin Health</h3>
                    <p>
                      The skin, being the body's largest organ, mirrors the
                      quality of nutrition we ingest. It responds visibly to both
                      beneficial nutrients and harmful dietary choices.
                      Understanding this relationship can empower you to make
                      dietary choices that promote vibrant, healthy skin.
                    </p>
                    <h3>
                      Dr. Bhavarth Kalaria's Top 5 Diet Tips for Healthy Skin:
                    </h3>
                    <ol>
                      <li>
                        <b>Eat the Rainbow of Fresh Produce: </b>
                        <p>
                          The various colors in fruits and vegetables represent
                          different nutrients and antioxidants essential for skin
                          health. Dr. Kalaria recommends making fresh produce a
                          major part of your diet. These foods are rich in
                          vitamins and antioxidants that help combat free radicals
                          and reduce inflammation, which can lead to skin problems
                          such as acne or premature aging.
                        </p>
                      </li>
                      <li>
                        <b>Prioritize Healthy Fats:</b>
                        <p>
                          Not all fats are created equal. Omega-3 fatty acids
                          found in foods like salmon, flaxseeds, and walnuts, are
                          anti-inflammatory and help maintain the skin’s
                          integrity, preventing dryness and blemishes. Dr. Kalaria
                          advises incorporating these healthy fats into your diet
                          to support skin health and overall wellness.
                        </p>
                      </li>
                      <li>
                        <b>Choose Low-Glycemic Foods: </b>
                        <p>
                          Foods high in sugar and simple carbohydrates can trigger
                          insulin spikes and exacerbate skin conditions like acne.
                          Opting for low-glycemic foods such as whole grains,
                          legumes, and most fruits and vegetables can help
                          maintain stable blood sugar levels and reduce
                          inflammation.
                        </p>
                      </li>
                      <li>
                        <b>Incorporate Antioxidant-Rich Foods: </b>
                        <p>
                          Antioxidants play a critical role in protecting the skin
                          from environmental stressors like UV rays and pollution.
                          Foods rich in antioxidants, such as berries, nuts, and
                          green leafy vegetables, can help shield the skin from
                          damage and support its natural repair systems.
                        </p>
                      </li>
                      <li>
                        <b>Stay Hydrated: </b>
                        <p>
                          Hydration is crucial for maintaining skin moisture and
                          elasticity. Drinking adequate amounts of water
                          throughout the day helps flush out toxins and ensures
                          that nutrients are efficiently distributed throughout
                          the body, including the skin.
                        </p>
                      </li>
                    </ol>
                    <h3>The Impact of Diet on Specific Skin Conditions</h3>
                    <p>
                      Dr. Kalaria notes that dietary adjustments can particularly
                      benefit conditions like eczema, rosacea, and psoriasis,
                      which are often linked to systemic inflammation. By reducing
                      inflammatory foods and increasing intake of skin-supporting
                      nutrients, many patients see significant improvements in
                      their skin condition.
                    </p>
                    <h3>Conclusion</h3>
                    <p>
                      The connection between diet and skin health is undeniable.
                      By following Dr. Kalaria's top diet tips, you can feed your
                      skin from within, promoting not only a healthier complexion
                      but also overall well-being. Remember, your dietary choices
                      are powerful tools that can help you achieve and maintain
                      healthy skin.
                    </p>
                    <h3>Contact Information</h3>
                    <p>
                      <b>Shinora Skin and Dental Care Clinic</b>
                    </p>
                    <p>
                      402, Soham Pristine, behind Times Square Grand, off Sindhu
                      Bhavan Marg, PRL Colony, Thaltej, Ahmedabad, Gujarat 380054
                    </p>
                    <p>Phone: +91 889 933 0033</p>
                    <p>Email: appointment@shinora.in</p>
                    <p>Website: www.shinora.in</p>
                  </div>
                </div>
                {/* End Post */}
                {/* Add Comment */}
                <div className="mb-80 mb-xs-40">
                  <h4 className="blog-page-title">Leave a comment</h4>
                  {/* Form */}
                  <form method="post" action="#" id="form" className="form">
                    <div className="row mb-30 mb-md-20">
                      <div className="col-md-6 mb-md-20">
                        {/* Name */}
                        <label htmlFor="name">Name *</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="input-lg round form-control"
                          placeholder="Enter your name"
                          maxLength={100}
                          required=""
                          aria-required="true"
                        />
                      </div>
                      <div className="col-md-6">
                        {/* Email */}
                        <label htmlFor="email">Email *</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="input-lg round form-control"
                          placeholder="Enter your email"
                          maxLength={100}
                          required=""
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div className="mb-30 mb-md-20">
                      {/* Website */}
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        name="website"
                        id="website"
                        className="input-lg round form-control"
                        placeholder="Enter your website"
                        maxLength={100}
                      />
                    </div>
                    {/* Comment */}
                    <div className="mb-30 mb-md-20">
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        name="comment"
                        id="comment"
                        className="input-lg round form-control"
                        rows={6}
                        placeholder="Enter your comment"
                        maxLength={400}
                        defaultValue={""}
                      />
                    </div>
                    {/* Send Button */}
                    <button
                      type="submit"
                      className="submit_btn btn btn-mod btn-large btn-round btn-hover-anim"
                    >
                      <span>Send Comment</span>
                    </button>
                    {/* Inform Tip */}
                    <div className="form-tip bg-gray-light-1 round mt-30 p-3">
                      * - these fields are required. By sending the form you agree
                      to the <a href="#">Terms &amp; Conditions</a> and
                      <a href="#">Privacy Policy</a>.
                    </div>
                  </form>
                  {/* End Form */}
                </div>
                {/* End Add Comment */}
                {/* Prev/Next Post */}
                <div className="clearfix mt-40">
                  <a href="blog-4.html" className="blog-item-more left">
                    <i className="mi-chevron-left" />
                    &nbsp;Prev post
                  </a>
                  <a href="blog-6.html" className="blog-item-more right">
                    Next post&nbsp;
                    <i className="mi-chevron-right" />
                  </a>
                </div>
                {/* End Prev/Next Post */}
              </div>
              {/* End Content */}
            </div>
          </div>
        </section>
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