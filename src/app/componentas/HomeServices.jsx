import React from 'react'

function HomeServices() {
  return (
    <>
    <section className="page-section" id="services">
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-6 mb-md-60 mb-sm-30">
                <h2 className="section-caption mb-xs-10">Treatment Results</h2>
                <h3 className="section-title mb-30">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    Where Expertise Meets Innovation
                  </span>
                </h3>
                <div className="row">
                  <div className="col-lg-10">
                    <p
                      className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      At Shinora Skin and Dental Clinic, we take pride in our
                      unique approach that combines in-depth medical knowledge
                      with the latest technological advancements.
                    </p>
                  </div>
                </div>
                <ul
                  className="nav nav-tabs services-tabs wow fadeInUp"
                  data-wow-delay="0.55s"
                  role="tablist"
                >
                  <li role="presentation">
                    <a
                      href="#services-item-1"
                      className="active"
                      aria-controls="services-item-1"
                      role="tab"
                      aria-selected="true"
                      data-bs-toggle="tab"
                    >
                      Acne Transformation
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#services-item-2"
                      aria-controls="services-item-2"
                      role="tab"
                      aria-selected="false"
                      data-bs-toggle="tab"
                    >
                      Smile Brightening
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#services-item-3"
                      aria-controls="services-item-3"
                      role="tab"
                      aria-selected="false"
                      data-bs-toggle="tab"
                    >
                      Rejuvenated Radiance
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#services-item-4"
                      aria-controls="services-item-4"
                      role="tab"
                      aria-selected="false"
                      data-bs-toggle="tab"
                    >
                      Allignment Perfection
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#services-item-5"
                      aria-controls="services-item-5"
                      role="tab"
                      aria-selected="false"
                      data-bs-toggle="tab"
                    >
                      Hair Restoration Success
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-6 d-flex wow fadeInLeft"
                data-wow-delay="0.55s"
                data-wow-offset={275}
              >
                <div className="tab-content services-content">
                  {/* Tab Content */}
                  <div
                    className="tab-pane services-content-item show fade active"
                    id="services-item-1"
                    role="tabpanel"
                  >
                    <div className="container1" id="container1">
                      <img
                        src="images2/before-after/ance-1-before.png"
                        alt="Before"
                        className="before-image"
                      />
                      <img
                        src="images2/before-after/ance-1-after.png"
                        alt="After"
                        className="after-image"
                      />
                      <div className="slider" id="slider2" />
                    </div>
                  </div>
                  {/* End Tab Content */}
                  {/* Tab Content */}
                  <div
                    className="tab-pane services-content-item fade"
                    id="services-item-2"
                    role="tabpanel"
                  >
                    <div className="container1" id="container2">
                      <img
                        src="images2/before-after/whitening-before.jpeg"
                        alt="Before"
                        className="before-image"
                      />
                      <img
                        src="images2/before-after/whitening-after.jpeg"
                        alt="After"
                        className="after-image"
                      />
                      <div className="slider" id="slider2" />
                    </div>
                  </div>
                  {/* End Tab Content */}
                  {/* Tab Content */}
                  <div
                    className="tab-pane services-content-item fade"
                    id="services-item-3"
                    role="tabpanel"
                  >
                    <div className="container1" id="container3">
                      <img
                        src="images2/before-after/skin-white-before.png"
                        alt="Before"
                        className="before-image"
                      />
                      <img
                        src="images2/before-after/skin-white-after.png"
                        alt="After"
                        className="after-image"
                      />
                      <div className="slider" id="slider3" />
                    </div>
                  </div>
                  {/* End Tab Content */}
                  {/* Tab Content */}
                  <div
                    className="tab-pane services-content-item fade"
                    id="services-item-4"
                    role="tabpanel"
                  >
                    <div className="container1" id="container4">
                      <img
                        src="images2/before-after/dental-align-before.jpg"
                        alt="Before"
                        className="before-image"
                      />
                      <img
                        src="images2/before-after/dental-align-after.jpg"
                        alt="After"
                        className="after-image"
                      />
                      <div className="slider" id="slider4" />
                    </div>
                  </div>
                  {/* End Tab Content */}
                  {/* Tab Content */}
                  <div
                    className="tab-pane services-content-item fade"
                    id="services-item-5"
                    role="tabpanel"
                  >
                    <div className="container1" id="container5">
                      <img
                        src="images2/before-after/hair-restoration-before.jpg"
                        alt="Before"
                        className="before-image"
                      />
                      <img
                        src="images2/before-after/hair-restoration-after.jpg"
                        alt="After"
                        className="after-image"
                      />
                      <div className="slider" id="slider5" />
                    </div>
                  </div>
                  {/* End Tab Content */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Services Section */}
    </>
  )
}

export default HomeServices