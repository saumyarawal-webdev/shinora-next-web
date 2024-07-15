import React from 'react'

function HomeSplit() {
  return (
   <>
   <section className="pt-30">
          <div className="container" />
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="split-column-left bg-dark-1 light-content position-relative d-flex align-items-center">
                {/* Decorative Dots */}
                <div className="position-absolute top-0 end-0 pt-2 pe-2 opacity-02">
                  <img src="images/demo-strong/decoration.svg" alt="" />
                </div>
                {/* End Decorative Dots */}
                <div>
                  <h3 className="mb-30">Ready to Embrace Your Best Self?</h3>
                  <p className="mb-50">
                    Whether you're seeking to rejuvenate your skin, enhance your
                    smile, or simply maintain your health, we're here to guide you
                    every step of the way. Our clinic combines the latest in
                    medical technology with a warm, patient-centered approach,
                    ensuring that your journey with us is both effective and
                    comforting.
                  </p>
                  <div className="local-scroll">
                    <a
                      href="strong-contact.html"
                      className="btn btn-mod btn-large btn-round btn-hover-anim"
                      style={{ backgroundColor: "#014e4e" }}
                    >
                      <span>View More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-stretch mt-n30 mt-md-0 mb-30 mb-md-0">
              <div
                className="split-image-right"
                data-rellax-y=""
                data-rellax-speed="0.5"
                data-rellax-percentage="0.5"
              >
                <img src="images2/team/team.jpeg" alt="Image Description" />
              </div>
            </div>
          </div>
        </section>
   </>
  )
}

export default HomeSplit