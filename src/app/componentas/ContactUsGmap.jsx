import React from 'react'

function ContactUsGmap() {
  return (
   <>
   <div className="google-map">
        <a href="#" className="map-section">
          <div className="map-toggle wow fadeInUpShort" aria-hidden="true">
            <div className="mt-icon">
              <i className="mi-location" />
            </div>
            <div className="mt-text">
              <div className="mt-open">
                Open the map <i className="mt-open-icon" />
              </div>
              <div className="mt-close">
                Close the map <i className="mt-close-icon" />
              </div>
            </div>
          </div>
        </a>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14685.710091241592!2d72.498416!3d23.0447828!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bb0579cadd1%3A0x29a1e2b5a40c7568!2sShinora%20Skin%20%26%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1712757606104!5m2!1sen!2sin"
          width={600}
          height={450}
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        />
      </div>

   </>
  )
}

export default ContactUsGmap