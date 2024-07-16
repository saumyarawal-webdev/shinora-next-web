import React from 'react'

function BlogMainBlogSection() {
  return (
    <section className="page-section" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-md-90 mb-sm-50">
              <h2 className="section-caption-border">Our Blogs</h2>
              <h3 className="section-title-strong mb-40">
                Shinora <span className="font-alt">Blogs</span>
              </h3>
              <p className="mb-40">
                Explore our blogs for insightful articles, expert advice, and
                the latest trends in skin and dental care. Our posts are
                designed to educate and empower you on your journey to optimal
                health. Stay informed with the trusted professionals at Shinora
                Clinic.
              </p>
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
                  <a href="blog-3.html">
                    <img
                      src="images2/blog/blog-3 -thumb.jpg"
                      alt="Image Description"
                    />
                  </a>
                </div>
                <h3 className="post-prev-2-title">
                  <a href="blog-3.html">
                    Understanding Cavities: Causes, Symptoms, and Prevention
                  </a>
                </h3>
                <div className="post-prev-2-info">May 2, 2024</div>
              </div>
            </div>
            {/* End Post Item */}
            {/* Post Item */}
            <div
              className="post-prev-2 col-md-6 col-lg-4"
              data-rellax-y=""
              data-rellax-speed={-1}
              data-rellax-percentage="0.37"
            >
              <div className="mt-140 mt-md-0">
                <div className="post-prev-2-img">
                  <a href="blog-4.html">
                    <img
                      src="images2/blog/blog-4-thumb.jpg"
                      alt="Image Description"
                    />
                  </a>
                </div>
                <h3 className="post-prev-2-title">
                  <a href="blog-4.html">
                    Understanding Dehydrated Skin: Insights
                  </a>
                </h3>
                <div className="post-prev-2-info">May 7, 2024</div>
              </div>
            </div>
            {/* End Post Item */}
            {/* Post Item */}
            <div className="post-prev-2 col-md-6 col-lg-4">
              <div className="post-prev-2-img">
                <a href="blog-5.html">
                  <img
                    src="images2/blog/blog-5-Thumb.jpg"
                    alt="Image Description"
                  />
                </a>
              </div>
              <h3 className="post-prev-2-title">
                <a href="blog-5.html">Top 5 Diet Tips for Healthy Skin</a>
              </h3>
              <div className="post-prev-2-info">May 10, 2024</div>
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
                  <a href="blog-6.html">
                    <img
                      src="images2/blog/blog-6-thumb.jpg"
                      alt="Image Description"
                    />
                  </a>
                </div>
                <h3 className="post-prev-2-title">
                  <a href="blog-6.html">
                    5 Essential Facts About Teeth Whitening You Should Know
                  </a>
                </h3>
                <div className="post-prev-2-info">May 15, 2024</div>
              </div>
            </div>
            {/* End Post Item */}
            {/* Post Item */}
            <div
              className="post-prev-2 col-md-6 col-lg-4"
              data-rellax-y=""
              data-rellax-speed={-1}
              data-rellax-percentage="0.37"
            >
              <div className="mt-140 mt-md-0">
                <div className="post-prev-2-img">
                  <a href="blog-7.html">
                    <img
                      src="images2/blog/blog-7-thumb.jpg"
                      alt="Image Description"
                    />
                  </a>
                </div>
                <h3 className="post-prev-2-title">
                  <a href="blog-7.html">Must-Know Facts About Invisalign</a>
                </h3>
                <div className="post-prev-2-info">May 17, 2024</div>
              </div>
            </div>
            {/* End Post Item */}
          </div>
          {/* End Blog Grid */}
        </div>
      </section>
  )
}

export default BlogMainBlogSection