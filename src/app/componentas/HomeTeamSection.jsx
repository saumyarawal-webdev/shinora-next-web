import React from 'react'

function HomeTeamSection() {
  return (
    <>
    {/* Team Section */}
    <section className="page-section" id="team">
          <div className="container">
            <div className="row">
              {/* Left Column */}
              <div className="col-xl-5 d-flex align-items-center team-1-column-sticky mb-lg-90 mb-sm-50">
                <div>
                  <h2 className="section-caption-border">Our Team</h2>
                  <h3 className="mb-40">Meet the team of our experts</h3>
                  <p className="mb-40">
                    Meet our dedicated team of experts at Shinora Skin and Dental
                    Clinic. Each member brings a wealth of knowledge and
                    specialized skills to deliver exceptional patient care. Get to
                    know the faces behind our trusted professional services and
                    see how they're committed to your health and wellness.
                  </p>
                  <div className="local-scroll">
                    <a
                      href="about.html"
                      className="btn btn-mod btn-large btn-round btn-hover-anim"
                      style={{ backgroundColor: "#014e4e" }}
                    >
                      <span>View More</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* End Left Column */}
              {/* Right Column */}
              <div className="col-xl-6 offset-xl-1">
                <div className="row mb-n30 masonry">
                  {/* Team Item */}
                  <div className="col-sm-6 mb-30">
                    <div className="team-1-item round">
                      <h4 className="team-1-title">
                        Dr. Bhavarth V. <br />
                        Kalaria
                      </h4>
                      <div className="team-1-image">
                        <img
                          src="images2/team/dr-bhavarth.jpeg"
                          alt="Image Description"
                        />
                      </div>
                      <h5 className="team-1-role">M.B.B.S. D.V.D. (F.A.M)</h5>
                      <p className="team-1-descr">
                        Consultant Dermatologist, <br /> Cosmetic Surgeon, <br />
                        Trichologist
                      </p>
                      <div className="team-1-social-links">
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Facebook</div>
                          <i className="fa-facebook-f" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Twitter</div>
                          <i className="fa-instagram" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Behance</div>
                          <i className="fa-linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Team Item */}
                  {/* Team Item */}
                  <div className="col-sm-6 mb-30 mt-140 mt-xs-0 pt-140 pt-xs-0">
                    <div className="team-1-item round">
                      <h4 className="team-1-title">
                        Dr. Lipi B.
                        <br />
                        Kalaria
                      </h4>
                      <div className="team-1-image">
                        <img
                          src="images2/team/dr-lipi.jpeg"
                          alt="Image Description"
                        />
                      </div>
                      <h5 className="team-1-role">B.P.T. P.G.D.C.C</h5>
                      <p className="team-1-descr">
                        Consultant Cosmetologist, <br />
                        Dietitian
                      </p>
                      <div className="team-1-social-links">
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Facebook</div>
                          <i className="fa-facebook-f" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Instagram</div>
                          <i className="fa-instagram" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">LinkedIn</div>
                          <i className="fa-linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Team Item */}
                  {/* Team Item */}
                  <div className="col-sm-6 mb-30">
                    <div className="team-1-item round">
                      <h4 className="team-1-title">
                        Dr. Chandni P.
                        <br />
                        Kalaria
                      </h4>
                      <div className="team-1-image">
                        <img
                          src="images2/team/dr-chandani.jpeg"
                          alt="Image Description"
                        />
                      </div>
                      <h5 className="team-1-role">B.D.S. F.A.A.D</h5>
                      <p className="team-1-descr">
                        Consultant Dental Surgeon, <br />
                        Aesthetic Dentist
                      </p>
                      <div className="team-1-social-links">
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Facebook</div>
                          <i className="fa-facebook-f" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Instagram</div>
                          <i className="fa-instagram" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Linkedin</div>
                          <i className="fa-linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Team Item */}
                </div>
              </div>
              {/* End Right Column */}
            </div>
          </div>
        </section>
        {/* End Team Section */}
    </>
  )
}

export default HomeTeamSection