import React from 'react'
import SubBlogConInfo from './SubBlogConInfo'
import BlogAddContent from './BlogAddContent'
import BlogPrevNext from './BlogPrevNext'
function Blog1Section() {
  return (
    <section className="page-section">
    <div className="container relative">
      <div className="row">
        {/* Content */}
        <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
          {/* Post */}
          <div className="blog-item mb-80 mb-xs-40">
            <div className="blog-item-body">
              <div className="mb-40 mb-xs-30">
                <img
                  src="images2/blog/blog-1.jpg"
                  alt="Image Description"
                />
              </div>
              <h3>Introduction</h3>
              <p>
                Welcome to Shinora Skin and Dental Care, a premier
                healthcare facility located in the vibrant city of
                Ahmedabad, Gujarat. Nestled in the bustling area of
                Sindhubhavan Road, our clinic is committed to providing
                top-notch dermatological and dental services to our valued
                patients. Led by a team of experienced and compassionate
                healthcare professionals, including Dr. Bhavarth Kalaria,
                Dr. Lipi Kalaria, and Dr. Chandni Kalaria, we strive to
                deliver personalized care and exceptional results in a warm
                and welcoming environment.
              </p>
              <h3>About Shinora Skin and Dental Care</h3>
              <p>
                At Shinora Skin and Dental Care, we understand the
                importance of holistic healthcare that addresses both your
                skin and dental needs. Our state-of-the-art facility is
                equipped with cutting-edge technology and modern amenities
                to ensure that you receive the highest standard of care.
              </p>
              <h3>Meet Our Expert Team</h3>
              <ul style={{ listStyleType: 'disc' }}>
                <li>
                  <b>Dr. Bhavarth Kalaria (Dermatologist)</b>
                </li>
                <p>
                  With years of experience in dermatology, Dr. Bhavarth
                  Kalaria is dedicated to helping patients achieve healthy,
                  radiant skin. He specializes in a wide range of
                  dermatological treatments, from acne management to
                  anti-aging procedures, using the latest techniques and
                  advancements in the field.
                </p>
                <li>
                  <b>Dr. Lipi Kalaria (Dermatologist)</b>
                </li>
                <p>
                  Dr. Lipi Kalaria shares Dr. Bhavarth's passion for
                  skincare and is committed to providing personalized
                  solutions for various skin concerns. Her expertise lies in
                  cosmetic dermatology, including laser treatments, chemical
                  peels, and injectables, aimed at enhancing your natural
                  beauty and confidence.
                </p>
                <li>
                  <b>Dr. Chandni Kalaria (Dentist)</b>
                </li>
                <p>
                  As a skilled dentist, Dr. Chandni Kalaria focuses on
                  promoting oral health and wellness for patients of all
                  ages. She offers a comprehensive range of dental services,
                  including preventive care, restorative treatments, and
                  cosmetic dentistry, to help you achieve a beautiful and
                  healthy smile.
                </p>
              </ul>
              <h3>Our Services</h3>
              <p>
                At Shinora Skin and Dental Care, we offer a wide array of
                services tailored to meet your specific needs, including:
              </p>
              <ul style={{ listStyleType: 'disc' }}>
                <li>Dermatological consultations and treatments</li>
                <li>Acne management and scar revision</li>
                <li>Anti-aging and rejuvenation therapies</li>
                <li>Dental check-ups and cleanings</li>
                <li>Fillings, crowns, and bridges</li>
                <li>Teeth whitening and cosmetic dentistry</li>
              </ul>
              <h3>Conclusion</h3>
              <p>
                At Shinora Skin and Dental Care, your health and
                satisfaction are our top priorities. Whether you're seeking
                skincare solutions or dental care, you can trust our
                experienced team to provide personalized treatment plans and
                exceptional service every step of the way. We invite you to
                experience the difference at Shinora and look forward to
                serving you and your family for all your healthcare needs.
              </p>
              <SubBlogConInfo/>
            </div>
          </div>
          {/* End Post */}
          {/* Add Comment */}
          <BlogAddContent/>
          {/* End Add Comment */}
          {/* Prev/Next Post */}
          <BlogPrevNext/>
          {/* End Prev/Next Post */}
        </div>
        {/* End Content */}
      </div>
    </div>
  </section>
  )
}

export default Blog1Section