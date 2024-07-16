import React from 'react'

function ContactUsHomeSection() {
  return (
    <>
    <section className="page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden">
  {/* Background Shape */}
  <div className="bg-shape-1 wow fadeIn">
    <img src="images/demo-fancy/bg-shape-1.svg" alt />
  </div>
  {/* End Background Shape */}
  <div className="container position-relative pt-10 pt-sm-40 text-center">
    <div className="row">
      <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
        <h1 className="hs-title-10 mb-10">
          <span className="wow charsAnimIn" data-splitting="chars">
            Ask
            <span className="mark-decoration-3-wrap">Us<b className="mark-decoration-3 wow scalexIn" data-wow-delay="0.5s" /></span>
          </span>
        </h1>
        <p className="section-descr mb-0 wow fadeIn" data-wow-delay="0.2s">
          Please fill following form to ask us any question about your
          problem we will contact you soon.
        </p>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default ContactUsHomeSection