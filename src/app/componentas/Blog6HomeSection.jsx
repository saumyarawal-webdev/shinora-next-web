import React from 'react'

function Blog6HomeSection() {
  return (
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
                5 Essential Facts About Teeth Whitening You Should Know
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
                  <span className="visually-hidden">Date:</span> May 15, 2024
                </a>
              </div>
              <div className="d-inline-block me-3">
                <a href="#">
                  <i className="mi-user size-16" />
                  <span className="visually-hidden">Author:</span>Dr. Chandni
                  Kalaria
                </a>
              </div>
              <div className="d-inline-block me-3">
                <i className="mi-folder size-16" />
                <span className="visually-hidden">Categories:</span>
                <a href="#">Dental Care</a>, <a href="#">Oral Health</a>
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
  )
}

export default Blog6HomeSection