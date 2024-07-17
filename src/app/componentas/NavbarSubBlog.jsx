import React from 'react'

function NavbarSubBlog() {
  return (
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
                  
                  style={{ color: "#ddbc93" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="about.html" style={{ color: "#ddbc93" }} >
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
                <a href="blog-main.html" style={{ color: "#ddbc93" }} className="active">
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
  )
}

export default NavbarSubBlog