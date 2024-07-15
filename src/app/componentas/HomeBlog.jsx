import React from 'react'

function HomeBlog() {
  return (
    <>
            <section className="page-section" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mb-md-90 mb-sm-50">
                <h2 className="section-caption-border">Our Blog</h2>
                <h3 className="section-title-strong mb-40">
                  Latest <span className="font-alt">News</span>
                </h3>
                <p className="mb-40">
                  Explore our blog for insightful articles, expert advice, and the
                  latest trends in skin and dental care. Our posts are designed to
                  educate and empower you on your journey to optimal health. Stay
                  informed with the trusted professionals at Shinora Clinic.
                </p>
                <div className="local-scroll">
                  <a
                    href="blog-1.html"
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                  >
                    <span>View Blog</span>
                  </a>
                </div>
              </div>
            </div>
            {/* Blog Grid */}
            <div className="row gy-4">
              {/* Post Item */}
              <div
                className="post-prev-2 col-md-6 col-lg-4"
                data-rellax-y=""
                data-rellax-speed={-1}
                data-rellax-percentage="0.37"
              >
                <div className="mt-140 mt-md-0">
                  <div className="post-prev-2-img">
                    <a href="blog-1.html">
                      <img
                        src="images2/blog/blog-1-thumb.jpg"
                        alt="Image Description"
                      />
                    </a>
                  </div>
                  <h3 className="post-prev-2-title">
                    <a href="blog-1.html">
                      Welcome to Shinora Skin and Dental Care
                    </a>
                  </h3>
                  <div className="post-prev-2-info">May 3, 2024</div>
                </div>
              </div>
              {/* End Post Item */}
              {/* Post Item */}
              <div className="post-prev-2 col-md-6 col-lg-4">
                <div className="post-prev-2-img">
                  <a href="blog-2.html">
                    <img
                      src="images2/blog/blog-2-thumb.jpg"
                      alt="Image Description"
                    />
                  </a>
                </div>
                <h3 className="post-prev-2-title">
                  <a href="blog-2.html">
                    Unveiling the Secret to Glowing Skin During Menopause
                  </a>
                </h3>
                <div className="post-prev-2-info">May 2, 2024</div>
              </div>
              {/* End Post Item */}
              {/* Post Item */}
              <div
                className="post-prev-2 col-md-6 col-lg-4"
                data-rellax-y=""
                data-rellax-speed={1}
                data-rellax-percentage="0.37"
              >
                <div className="mt-n140 mt-md-0">
                  <div className="post-prev-2-img">
                    <a href="strong-blog-single.html">
                      <img
                        src="images2/blog/blog-3 -thumb.jpg"
                        alt="Image Description"
                      />
                    </a>
                  </div>
                  <h3 className="post-prev-2-title">
                    <a href="strong-blog-single.html">
                      Understanding Cavities: Causes, Symptoms, and Prevention
                    </a>
                  </h3>
                  <div className="post-prev-2-info">May 2, 2024</div>
                </div>
              </div>
              {/* End Post Item */}
            </div>
            {/* End Blog Grid */}
          </div>
        </section>
    </>
  )
}

export default HomeBlog