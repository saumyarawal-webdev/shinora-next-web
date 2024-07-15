import React from 'react'

function HomeNewsLetter() {
  return (
    <>
    <section
          className="page-section bg-dark-1 light-content"
          style={{ backgroundImage: "url(images2/footer-bg-1.png)" }}
        >
          <div className="container position-relative">
            <div className="row">
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 wow fadeInUp">
                <h2
                  className="section-title text-center mb-40"
                  style={{ fontSize: "xx-large" }}
                >
                  Your Gateway to Better
                  <span className="font-alt"> &nbsp; Skin and Dental</span> Health
                </h2>
                <form id="mailchimp" className="form newsletter-strong">
                  <div className="d-sm-flex justify-content-center">
                    <div className="local-scroll">
                      <a
                        href="https://wa.me/918899330033"
                        target="_blank"
                        className="btn btn-mod btn-large btn-round btn-hover-anim"
                        style={{ backgroundColor: "#038f8f" }}
                      >
                        <span>Chat Now</span>
                      </a>
                    </div>
                  </div>
                  <div
                    id="subscribe-result"
                    role="region"
                    aria-live="polite"
                    aria-atomic="true"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default HomeNewsLetter