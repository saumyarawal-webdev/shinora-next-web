import React from 'react'

function HomeService() {
  return (
    <>
    <section className="page-section" id="services">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                <h2 className="section-caption-border">Our Services</h2>
                <h3 className="mb-90 mb-sm-50">
                  At Shinora, we are offering services that cater to your skin,
                  hair, and dental health.
                </h3>
              </div>
            </div>
            {/* Nav tabs */}
            <ul
              className="nav nav-tabs tpl-alt-tabs mb-20 mb-xs-0 wow fadeInUp"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  href="#service-branding"
                  className="nav-link active"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="true"
                >
                  <div className="alt-tabs-icon">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="60px"
                      height="60px"
                      viewBox="0 0 260 254"
                      enableBackground="new 0 0 260 254"
                      xmlSpace="preserve"
                      style={{ stroke: "#014e4e", fill: "#014e4e" }}
                    >
                      <path
                        d="M128.2,73.69C112.718,34.242,94.73,10.247,88.861,3.006c-1.056-1.305-2.976-1.483-4.262-0.404l0,0
    c-1.204,1.01-1.429,2.771-0.517,4.052c11.7,16.436,34.576,58.912,34.576,97.834c0,28.503-9.329,42.739-9.258,55.892
    c0.056,10.395,8.417,18.821,18.801,18.821c8.162,0,17.555-6.309,19.356-17.846C149.744,147.344,143.607,112.948,128.2,73.69z
     M168.368,91.611c-5.379,0-10.456,2.359-13.929,6.471c-3.422,4.052-4.879,9.356-3.996,14.553c1.059,6.23,3.011,11.866,5.077,17.834
    c3.184,9.193,6.476,18.699,6.476,31.14c0,18.235-14.266,32.518-32.479,32.518c-18.212,0-32.477-14.284-32.477-32.518
    c0-12.17,3.492-21.534,6.87-30.588c2.292-6.146,4.458-11.951,5.538-18.4c0.87-5.19-0.595-10.488-4.02-14.534
    c-3.483-4.115-8.57-6.475-13.958-6.475H2v160.492h256V91.611H168.368z M163.466,105.706c1.223-1.449,3.01-2.279,4.902-2.279h77.816
    v34.797c-6.439,1.119-10.396,4.222-13.698,6.819c-3.489,2.743-6.011,4.726-11.587,4.726c-5.569,0-8.089-1.982-11.577-4.724
    c-4.11-3.231-9.225-7.253-18.889-7.253c-9.294,0-14.375,3.722-18.406,6.88c-1.409-6.706-3.446-12.595-5.342-18.068
    c-1.902-5.492-3.699-10.68-4.594-15.946C161.683,108.249,162.778,106.521,163.466,105.706z M91.471,103.427
    c1.905,0,3.706,0.836,4.939,2.293c0.69,0.816,1.788,2.543,1.386,4.948c-0.894,5.332-2.867,10.623-4.956,16.223
    c-2.022,5.421-4.195,11.253-5.7,17.889c-4.054-3.181-9.145-6.989-18.553-6.989c-9.659,0-14.772,4.021-18.881,7.253
    c-3.487,2.742-6.007,4.724-11.577,4.724c-5.57,0-8.089-1.982-11.577-4.724c-3.134-2.465-6.86-5.384-12.735-6.633v-34.984H91.471z
     M13.815,240.288v-89.535c1.948,0.845,3.551,2.099,5.431,3.578c4.109,3.232,9.222,7.253,18.881,7.253
    c9.66,0,14.773-4.021,18.881-7.253c3.487-2.742,6.007-4.724,11.577-4.724c5.574,0,8.093,1.98,11.579,4.719
    c1.53,1.202,3.189,2.497,5.158,3.659c-0.058,1.186-0.098,2.388-0.098,3.625c0,24.86,19.456,44.334,44.293,44.334
    c24.838,0,44.294-19.474,44.294-44.334c0-1.239-0.037-2.444-0.09-3.633c1.961-1.16,3.615-2.451,5.14-3.65
    c3.487-2.739,6.006-4.719,11.572-4.719c5.576,0,8.097,1.983,11.587,4.726c4.109,3.231,9.222,7.251,18.88,7.251
    c9.664,0,14.78-4.022,18.889-7.254c2.182-1.715,3.986-3.133,6.395-3.954v89.913H13.815z"
                      />
                    </svg>
                  </div>
                  Dermatological Care
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#service-ui-ux-design"
                  className="nav-link"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="false"
                >
                  <div className="alt-tabs-icon">
                    <svg
                      width="60px"
                      height="60px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                          .cls-1 {\n                            fill: none;\n                            stroke: #014e4e;\n                            stroke-miterlimit: 10;\n                            stroke-width: 1.91px;\n                          }\n                        "
                          }}
                        />
                      </defs>
                      <g id="dental">
                        <path
                          className="cls-1"
                          d="M1.5,8.18A6.68,6.68,0,0,1,12,2.7"
                        />
                        <path
                          className="cls-1"
                          d="M22.5,8.18A6.69,6.69,0,0,0,9.78,5.31"
                        />
                        <path
                          className="cls-1"
                          d="M22.5,8.18V9.6a17.35,17.35,0,0,1-1.32,6.63,17.27,17.27,0,0,1-3.75,5.61,2.25,2.25,0,0,1-3.82-1.25L13,16.54a1,1,0,0,0-2,0l-.62,4.05a2.25,2.25,0,0,1-3.82,1.25A17.27,17.27,0,0,1,1.5,9.6V8.18"
                        />
                        <line
                          className="cls-1"
                          x1={12}
                          y1="8.18"
                          x2="19.64"
                          y2="8.18"
                        />
                        <line
                          className="cls-1"
                          x1="15.82"
                          y1="4.36"
                          x2="15.82"
                          y2={12}
                        />
                      </g>
                    </svg>
                  </div>
                  Dental Care
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#service-animation"
                  className="nav-link"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="false"
                >
                  <div className="alt-tabs-icon">
                    <svg
                      version="1.1"
                      id="Uploaded to svgrepo.com"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="60px"
                      height="60px"
                      viewBox="0 0 32 32"
                      xmlSpace="preserve"
                    >
                      <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                        .blueprint_een {\n                          fill: #014e4e;\n                        }\n                      "
                        }}
                      />
                      <path
                        className="blueprint_een"
                        d="M15,14H3v3h12V14z M14,16H4v-1h10V16z M6,21h16v-3H6V21z M7,19h14v1H7V19z M22,29h7v-3h-7V29z M23,27
    h5v1h-5V27z M14,25h13v-3H14V25z M15,23h11v1H15V23z M31,5h-3V3c0-1.654-1.346-3-3-3s-3,1.346-3,3v2H10V3c0-1.654-1.346-3-3-3
    S4,1.346,4,3v2H1C0.448,5,0,5.448,0,6v25c0,0.552,0.448,1,1,1h30c0.552,0,1-0.448,1-1V6C32,5.448,31.552,5,31,5z M24,3
    c0-0.552,0.448-1,1-1s1,0.448,1,1v5c0,0.551-0.449,1-1,1s-1-0.449-1-1V3z M6,3c0-0.552,0.448-1,1-1s1,0.448,1,1v5
    c0,0.551-0.449,1-1,1S6,8.551,6,8V3z M30,30H2V12h28V30z M30,11H2V7h3v1c0,1.105,0.895,2,2,2s2-0.895,2-2V7h14v1
    c0,1.105,0.895,2,2,2s2-0.895,2-2V7h3V11z"
                      />
                    </svg>
                  </div>
                  Customized Treatment Plans
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#service-development"
                  className="nav-link"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="false"
                >
                  <div className="alt-tabs-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={48}
                      height={64}
                      viewBox="0 0 48 64"
                      aria-hidden="true"
                      style={{ stroke: "#014e4e" }}
                    >
                      <path d="M24.125 20c3.25 0 6.25 1.25 8.5 3.5s3.5 5.25 3.5 8.5-1.25 6.25-3.5 8.5-5.25 3.5-8.5 3.5-6.25-1.25-8.5-3.5-3.5-5.25-3.5-8.5 1.25-6.25 3.5-8.5 5.25-3.5 8.5-3.5zM24.125 42c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10zM17.25 10.375c-1.25 0.375-2.5 0.875-3.75 1.5 0.25 1 0.125 2 0 3-0.25 1.625-1 3.125-2.25 4.375-1.5 1.5-3.625 2.375-5.75 2.375-0.5 0-1.125 0-1.625-0.125-0.625 1.25-1.125 2.5-1.5 3.75 0.875 0.5 1.5 1.25 2.125 2.125 1 1.375 1.5 3 1.5 4.625s-0.5 3.25-1.5 4.625c-0.625 0.875-1.25 1.625-2.125 2.125 0.375 1.25 0.875 2.5 1.5 3.75 0.5-0.125 1.125-0.125 1.625-0.125 2.125 0 4.25 0.875 5.75 2.375 1.25 1.25 2 2.75 2.25 4.375 0.125 1 0.25 2 0 3 1.25 0.625 2.5 1.125 3.75 1.5 0.5-0.875 1.25-1.5 2.125-2.125 1.375-1 3-1.5 4.625-1.5s3.25 0.5 4.625 1.5c0.875 0.625 1.625 1.25 2.125 2.125 1.25-0.375 2.5-0.875 3.75-1.5-0.25-1-0.125-2 0-3 0.25-1.625 1-3.125 2.25-4.375 1.5-1.5 3.625-2.375 5.75-2.375 0.5 0 1.125 0 1.625 0.125 0.625-1.25 1.125-2.5 1.5-3.75-0.875-0.5-1.5-1.25-2.125-2.125-1-1.375-1.5-3-1.5-4.625s0.5-3.25 1.5-4.625c0.625-0.875 1.25-1.625 2.125-2.125-0.375-1.25-0.875-2.5-1.5-3.75-0.5 0.125-1.125 0.125-1.625 0.125-2.125 0-4.25-0.875-5.75-2.375-1.25-1.25-2-2.75-2.25-4.375-0.125-1-0.25-2 0-3-1.25-0.625-2.5-1.125-3.75-1.5-0.5 0.875-1.25 1.5-2.125 2.125-1.375 1-3 1.5-4.625 1.5s-3.25-0.5-4.625-1.5c-0.875-0.625-1.625-1.25-2.125-2.125zM29.75 8v0c2.5 0.625 5 1.625 7.125 3-1 2.25-0.625 5 1.25 6.875 1.25 1.25 2.75 1.75 4.375 1.75 0.875 0 1.75-0.125 2.5-0.5 1.375 2.125 2.375 4.625 3 7.125-2.375 0.875-4 3.125-4 5.75s1.75 4.875 4 5.75c-0.625 2.5-1.625 5-3 7.125-0.75-0.375-1.625-0.5-2.5-0.5-1.625 0-3.125 0.5-4.375 1.75-1.875 1.875-2.25 4.625-1.25 6.875-2.125 1.375-4.625 2.375-7.125 3-0.875-2.25-3.125-4-5.75-4s-4.875 1.75-5.75 4c-2.5-0.625-5-1.625-7.125-3 1-2.25 0.625-5-1.25-6.875-1.25-1.25-2.75-1.75-4.375-1.75-0.875 0-1.75 0.125-2.5 0.5-1.375-2.125-2.375-4.625-3-7.125 2.25-0.875 4-3.125 4-5.75s-1.625-4.875-4-5.75c0.625-2.5 1.625-5 3-7.125 0.75 0.375 1.625 0.5 2.5 0.5 1.625 0 3.125-0.5 4.375-1.75 1.875-1.875 2.25-4.625 1.25-6.875 2.125-1.375 4.625-2.375 7.125-3 0.875 2.375 3.125 4 5.75 4s4.875-1.625 5.75-4z" />
                    </svg>
                  </div>
                  State-of-the-Art Technology
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  href="#service-photography"
                  className="nav-link"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="false"
                >
                  <div className="alt-tabs-icon">
                    <svg
                      width="60px"
                      height="60px"
                      viewBox="0 0 48 48"
                      id="Layer_1"
                      version="1.1"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                        .st0 {\n                          fill: #014e4e;\n                        }\n                      "
                        }}
                      />
                      <path
                        className="st0"
                        d="M7.25,41.5h23.5c0.276,0,0.5-0.224,0.5-0.5V7c0-0.276-0.224-0.5-0.5-0.5H7.25c-0.276,0-0.5,0.224-0.5,0.5v34  C6.75,41.276,6.974,41.5,7.25,41.5z M7.75,7.5h22.5v33H7.75V7.5z"
                      />
                      <path
                        className="st0"
                        d="M9.625,16.875h5.5c0.276,0,0.5-0.224,0.5-0.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-5.5c-0.276,0-0.5,0.224-0.5,0.5  v5.5C9.125,16.651,9.349,16.875,9.625,16.875z M10.125,11.375h4.5v4.5h-4.5V11.375z"
                      />
                      <path
                        className="st0"
                        d="M27.75,10.375H19c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h8.75c0.276,0,0.5-0.224,0.5-0.5  S28.026,10.375,27.75,10.375z"
                      />
                      <path
                        className="st0"
                        d="M27.75,14.75H19c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h8.75c0.276,0,0.5-0.224,0.5-0.5  S28.026,14.75,27.75,14.75z"
                      />
                      <path
                        className="st0"
                        d="M27.75,19.125H9.625c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H27.75c0.276,0,0.5-0.224,0.5-0.5  S28.026,19.125,27.75,19.125z"
                      />
                      <path
                        className="st0"
                        d="M27.75,23.5H9.625c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H27.75c0.276,0,0.5-0.224,0.5-0.5  S28.026,23.5,27.75,23.5z"
                      />
                      <path
                        className="st0"
                        d="M27.75,27.875H9.625c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H27.75c0.276,0,0.5-0.224,0.5-0.5  S28.026,27.875,27.75,27.875z"
                      />
                      <path
                        className="st0"
                        d="M27.75,32.25H9.625c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H27.75c0.276,0,0.5-0.224,0.5-0.5  S28.026,32.25,27.75,32.25z"
                      />
                      <path
                        className="st0"
                        d="M27.75,36.625H9.625c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5H27.75c0.276,0,0.5-0.224,0.5-0.5  S28.026,36.625,27.75,36.625z"
                      />
                      <path
                        className="st0"
                        d="M40.75,22.048c0.276,0,0.5-0.224,0.5-0.5v-5.594c0-1.983-1.49-3.607-3.407-3.856V9.173  c0-1.172-0.953-2.125-2.125-2.125s-2.125,0.953-2.125,2.125v3.042c-0.516,0.255-0.875,0.782-0.875,1.396v1.24v20.5  c0,0.057,0.015,0.111,0.033,0.162c0.003,0.008,0,0.017,0.003,0.025l1.893,4.692c0.177,0.439,0.597,0.723,1.07,0.723c0,0,0,0,0,0  c0.473,0,0.894-0.284,1.071-0.722c0,0,0,0,0,0l1.893-4.692c0.003-0.008,0.001-0.017,0.003-0.025  c0.018-0.051,0.033-0.104,0.033-0.162v-20.5v-1.24c0-0.073-0.012-0.142-0.021-0.213c0.919,0.489,1.553,1.445,1.553,2.556v5.594  C40.25,21.824,40.474,22.048,40.75,22.048z M33.718,15.351h4v19.5h-4V15.351z M37.718,14.351h-4v-0.74  c0-0.31,0.252-0.563,0.563-0.563h2.875c0.31,0,0.563,0.252,0.563,0.563V14.351z M34.593,9.173c0-0.62,0.505-1.125,1.125-1.125  s1.125,0.505,1.125,1.125v2.875h-2.25V9.173z M35.862,39.855c-0.032,0.08-0.096,0.097-0.144,0.097c-0.047,0-0.111-0.017-0.143-0.097  l-1.616-4.005h3.519L35.862,39.855z"
                      />
                    </svg>
                  </div>
                  A Commitment to Education
                </a>
              </li>
            </ul>
            {/* End Nav tabs */}
            {/* Tab panes */}
            <div className="tab-content tpl-tabs-cont">
              {/* Service Item */}
              <div
                className="tab-pane fade show active"
                id="service-branding"
                role="tabpanel"
              >
                <div className="row">
                  <div
                    className="col-lg-4 mb-md-40 mb-xs-30 wow linesAnimIn"
                    data-splitting="lines"
                  >
                    <blockquote className="mt-0 mb-0">
                      <p className="mb-20 mb-sm-10">
                        Excellence in Skin Health and Beauty
                      </p>
                    </blockquote>
                  </div>
                  <div
                    className="col-md-6 col-lg-4 mb-sm-30 wow linesAnimIn"
                    data-splitting="lines"
                  >
                    Our dermatological services are spearheaded by Dr. Bhavarth
                    Kalaria, a specialist in dermatology, cosmetology, and
                    trichology. We offer a range of treatments, including but not
                    limited to, acne treatment, skin rejuvenation, anti-aging
                    therapies, hair loss treatments, and scalp disorders
                    management.
                  </div>
                  <div
                    className="col-md-6 col-lg-4 wow linesAnimIn"
                    data-splitting="lines"
                  >
                    Utilizing the latest in medical technology, our goal is to
                    provide effective solutions that enhance and maintain the
                    natural beauty and health of your skin and hair.
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              {/* Service Item */}
              <div
                className="tab-pane fade"
                id="service-ui-ux-design"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-4 mb-md-40 mb-xs-30">
                    <blockquote className="mt-0 mb-0">
                      <p>Comprehensive Dentistry with a Gentle Touch</p>
                    </blockquote>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-sm-30">
                    Led by Dr. Chandani Kalaria, our dental services focus on
                    providing comprehensive care that ranges from preventive
                    dentistry and oral hygiene to cosmetic dentistry and
                    restorative treatments.
                  </div>
                  <div className="col-md-6 col-lg-4">
                    Whether you're looking for a routine check-up, teeth
                    whitening, dental implants, or advanced cosmetic procedures,
                    our clinic is equipped to offer the highest standard of dental
                    care in a comfortable and welcoming environment.
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              {/* Service Item */}
              <div
                className="tab-pane fade"
                id="service-animation"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-4 mb-md-40 mb-xs-30">
                    <blockquote className="mt-0 mb-0">
                      <p>Tailored to Meet Individual Needs</p>
                    </blockquote>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-sm-30">
                    We believe in the importance of a personalized approach to
                    treatment. Each patient's care plan is custom-tailored to fit
                    their specific needs and preferences, ensuring optimal
                    outcomes and patient satisfaction.
                  </div>
                  <div className="col-md-6 col-lg-4">
                    Our team takes the time to discuss all available options and
                    provide detailed consultations to help you make informed
                    decisions about your care.
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              {/* Service Item */}
              <div
                className="tab-pane fade"
                id="service-development"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-4 mb-md-40 mb-xs-30">
                    <blockquote className="mt-0 mb-0">
                      <p>Innovation in Healthcare</p>
                    </blockquote>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-sm-30">
                    Shinora Skin and Dental Clinic is committed to staying at the
                    forefront of medical and dental technology. Our clinic is
                    equipped with cutting-edge diagnostic and treatment tools that
                    allow us to provide advanced and efficient care.
                  </div>
                  <div className="col-md-6 col-lg-4">
                    From digital imaging and laser dentistry to the latest in
                    dermatological treatments, we invest in technology that
                    enhances patient care and results.
                  </div>
                </div>
              </div>
              {/* End Service Item */}
              {/* Service Item */}
              <div
                className="tab-pane fade"
                id="service-photography"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-lg-4 mb-md-40 mb-xs-30">
                    <blockquote className="mt-0 mb-0">
                      <p>Empowering Our Patients</p>
                    </blockquote>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-sm-30">
                    We believe that an informed patient is an empowered patient.
                    Our team is dedicated to educating our patients about their
                    health and treatment options.
                  </div>
                  <div className="col-md-6 col-lg-4">
                    We provide resources and guidance to help you understand your
                    conditions, treatments, and preventive care measures, ensuring
                    that you are an active participant in your healthcare journey.
                  </div>
                </div>
              </div>
              {/* End Service Item */}
            </div>
            {/* End Tab panes */}
          </div>
        </section>
        {/* End Services Section */}
    </>
  )
}

export default HomeService