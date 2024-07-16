import React from 'react'

function ContactUscontactSection() {
  return (
    <>
    <section className="page-section" id="contact">
  <div className="container position-relative wow fadeInUp" data-wow-delay={0}>
    <div className="row">
      {/* Left Column */}
      <div className="col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1">
        <h3 className="section-title mb-50 mb-sm-30">
          We’re open to talk.
        </h3>
        {/* Contact Information */}
        <div className="row">
          <div className="col-md-11">
            {/* Address */}
            <div className="contact-item mb-30 mb-sm-20">
              <div className="ci-icon">
                <i className="mi-location" />
              </div>
              <h4 className="ci-title visually-hidden">Our Address</h4>
              <div className="ci-text">
                402, Soham Pristine, Behind Times Square Grand, Sindhu
                Bhavan Marg, Ahmedabad, Gujarat 380054
              </div>
              <div>
                <a href="https://maps.app.goo.gl/9nf19TFn1EKV3JBN6" className="link-hover-anim" data-link-animate="y" rel="nofollow noopener" target="_blank">See Map <i className="mi-arrow-right size-18" /></a>
              </div>
            </div>
            {/* End Address */}
            {/* Email */}
            <div className="contact-item mb-30 mb-sm-20">
              <div className="ci-icon">
                <i className="mi-email" />
              </div>
              <h4 className="ci-title visually-hidden">Our Email</h4>
              <div className="ci-text">appointment@shinora.in</div>
              <div>
                <a href="mailto:appointment@shinora.in" className="link-hover-anim" data-link-animate="y">Say Hello <i className="mi-arrow-right size-18" /></a>
              </div>
            </div>
            {/* End Email */}
            {/* Phone */}
            <div className="contact-item">
              <div className="ci-icon">
                <i className="mi-mobile" />
              </div>
              <h4 className="ci-title visually-hidden">Call Us</h4>
              <div className="ci-text">
                +91 889 933 0033
                <div className="small">(Monday-Friday: 10am to 7pm)</div>
              </div>
              <div>
                <a href="tel:+918899330033 " className="link-hover-anim" data-link-animate="y">Call now <i className="mi-arrow-right size-18" /></a>
              </div>
            </div>
            {/* End Phone */}
          </div>
        </div>
        {/* End Contact Information */}
      </div>
      {/* End Left Column */}
      {/* Right Column */}
      <div className="col-lg-8 col-xl-7 offset-xl-1">
        <div className="position-relative">
          {/* Decorative Image */}
          <div className="decoration-11 d-none d-xl-block">
            <img src="images2/clinic.png" width={225} height={250} alt />
          </div>
          {/* End Decorative Image */}
          <div className="box-shadow round p-4 p-sm-5">
            <h4 className="h3 mb-30">Ask us about your problem</h4>
            {/* Contact Form */}
            <form className="form contact-form" id="contact_form">
              <div className="row">
                <div className="col-md-6">
                  {/* Name */}
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" className="input-lg round form-control" placeholder="Enter your name" pattern=".{3,100}" required aria-required="true" />
                  </div>
                  {/* End Name */}
                </div>
                <div className="col-md-6">
                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="input-lg round form-control" placeholder="Enter your email" pattern=".{5,100}" required aria-required="true" />
                  </div>
                  {/* End Email */}
                </div>
              </div>
              <div className="col-md-6">
                {/* Phone Number */}
                <div className="form-group">
                  <label htmlFor="email">Phone Number</label>
                  <input type="text" name="phone" id="phone" className="input-lg round form-control" placeholder="Enter your phone number" pattern=".{5,100}" required aria-required="true" />
                </div>
                {/* End Email */}
              </div>
              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" className="input-lg round form-control" style={{height: 120}} placeholder="Enter your message" defaultValue={""} />
              </div>
              <div className="row">
                <div className="col-md-6 col-xl-5">
                  {/* Send Button */}
                  <div className="pt-3">
                    <button className="btn btn-mod btn-large btn-round btn-hover-anim" id="submit" aria-controls="result" style={{backgroundColor: '#014e4e'}}>
                      <span>Submit</span>
                    </button>
                  </div>
                  {/* End Send Button */}
                </div>
                <div className="col-md-6 col-xl-7 d-flex align-items-center">
                  {/* Inform Tip */}
                  <div className="form-tip w-100 pt-3 mt-sm-20">
                    <i className="icon-info size-16" />
                    All the fields are required. By sending the form you
                    agree to the <a href="#">Terms &amp; Conditions</a> and
                    <a href="#">Privacy Policy</a>.
                  </div>
                  {/* End Inform Tip */}
                </div>
              </div>
              <div id="result" role="region" aria-live="polite" aria-atomic="true" />
            </form>
            {/* End Contact Form */}
          </div>
        </div>
      </div>
      {/* End Right Column */}
    </div>
  </div>
</section>
{/* End Contact Section */}

    </>
  )
}

export default ContactUscontactSection