import React from 'react'

function Footer() {
  return (
    <>
    {/* Footer */}
    <footer
        className="footer-1 light-content"
        style={{ backgroundColor: "#014e4e" }}
      >
        <div className="container">
          <div className="page-section">
            <div className="row">
              {/* Copyright */}
              <div className="col-lg-3 text-center text-lg-start mb-md-50">
                © Shinora 2023.
              </div>
              {/* End Copyright */}
              {/* Social Links */}
              <div className="col-lg-6 footer-social-links text-center mb-md-40">
                <a
                  href="#"
                  title="Facebook"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span className="visually-hidden">Facebook</span>
                  <i className="fa-facebook-f" />
                </a>
                <a
                  href="#"
                  title="Twitter"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span className="visually-hidden">Youtube</span>
                  <i className="fa-youtube" />
                </a>
                <a
                  href="#"
                  title="Instagram"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span className="visually-hidden">Instagram</span>
                  <i className="fa-instagram" />
                </a>
                <a
                  href="#"
                  title="Behance"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span className="visually-hidden">Behance</span>
                  <i className="fa-behance" />
                </a>
                <a
                  href="#"
                  title="Dribbble"
                  rel="noopener nofollow"
                  target="_blank"
                >
                  <span className="visually-hidden">Dribbble</span>
                  <i className="fa-dribbble" />
                </a>
              </div>
              {/* End Social Links */}
              <div className="col-lg-3 text-center text-lg-end local-scroll">
                <a href="#top" className="fw-top-link">
                  <span className="fw-top-link-underline">Back to top</span>
                  <span className="icon ms-1">
                    <i className="icon-arrow-up size-17" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* Footer Text */}
          <div className="footer-text text-center opacity-75 mt-n10 pb-50">
            Created By:
            <div className="small">
              <a href="https://ignitax.com/" target="_blank">
                IGNITAX
              </a>
            </div>
          </div>
          {/* End Footer Text */}
        </div>
      </footer>
      {/* End Footer */}
    </>
  )
}

export default Footer