import React from 'react'

function AboutTeamSection() {
  return (
    <>
    <section className="page-section" id="team">
          <div className="container">
            <div className="row mb-70 mb-sm-50">
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
                <h2 className="section-title mb-30 mb-sm-20">
                  <span className="text-gray">Our</span> Team
                  <span className="text-gray">.</span>
                </h2>
                <div className="text-gray">
                  Meet our dedicated team of experts at Shinora Skin and Dental
                  Clinic. Each member brings a wealth of knowledge and specialized
                  skills to deliver exceptional patient care.
                </div>
              </div>
            </div>
            <div className="row mt-n40">
              {/* Team item */}
              <div className="col-md-4 mt-40">
                <div className="team-item">
                  <div className="team-item-image">
                    <img
                      src="images2/team/dr-bhavarth-2.jpeg"
                      className="wow scaleOutIn"
                      data-wow-duration="1.2s"
                      alt="Image Description"
                    />
                    <div className="team-item-detail">
                      <div className="team-social-links">
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Facebook</div>
                          <i className="fa-facebook-f" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Twitter</div>
                          <i className="fa-twitter" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Pinterest</div>
                          <i className="fa-pinterest-p" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-item-descr">
                    <div className="team-item-name">Dr. Bhavarth V. Kalaria</div>
                    <div className="team-item-role">M.B.B.S. D.V.D. (F.A.M)</div>
                  </div>
                </div>
              </div>
              {/* End Team item */}
              {/* Team item */}
              <div className="col-md-4 mt-40">
                <div className="team-item">
                  <div className="team-item-image">
                    <img
                      src="images2/team/dr-lipi-2.jpeg"
                      className="wow scaleOutIn"
                      data-wow-duration="1.2s"
                      alt="Image Description"
                    />
                    <div className="team-item-detail">
                      <div className="team-social-links">
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Facebook</div>
                          <i className="fa-facebook-f" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Twitter</div>
                          <i className="fa-twitter" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Pinterest</div>
                          <i className="fa-pinterest-p" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-item-descr">
                    <div className="team-item-name">Dr. Lipi B. Kalaria</div>
                    <div className="team-item-role">B.P.T. P.G.D.C.C</div>
                  </div>
                </div>
              </div>
              {/* End Team item */}
              {/* Team item */}
              <div className="col-md-4 mt-40">
                <div className="team-item">
                  <div className="team-item-image">
                    <img
                      src="images2/team/dr-chandni-2.jpeg"
                      className="wow scaleOutIn"
                      data-wow-duration="1.2s"
                      alt="Image Description"
                    />
                    <div className="team-item-detail">
                      <div className="team-social-links">
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Facebook</div>
                          <i className="fa-facebook-f" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Twitter</div>
                          <i className="fa-twitter" />
                        </a>
                        <a href="#" target="_blank" rel="noopener nofollow">
                          <div className="visually-hidden">Pinterest</div>
                          <i className="fa-pinterest-p" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-item-descr">
                    <div className="team-item-name">Dr. Chandni P. Kalaria</div>
                    <div className="team-item-role">B.D.S. F.A.A.D</div>
                  </div>
                </div>
              </div>
              {/* End Team item */}
            </div>
          </div>
        </section>
    </>
  )
}

export default AboutTeamSection