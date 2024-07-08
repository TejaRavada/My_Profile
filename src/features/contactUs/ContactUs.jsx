import React from 'react'
import './styles.css'
const ContactUs = () => {
  return (
    <section className='container'>
      <div className='contact'>
        <div className="contactFull">

          <div className="contact_Left">
            <div className="contact_head">
              <div className='box'> </div>
              <h2>Let's talk</h2>
            </div>

            <form className="contactFrom_From "
              action="https://formspree.io/f/xkndybka"
              method="POST"
            >

              <label htmlFor="">Name :</label>
              <input
                type="text"
                // placeholder='Name'
                className='col'
                name="Name"
                required
                autoComplete='off'
              // value=''
              />

              <label htmlFor="">Email :</label>
              <input
                type="text"
                // placeholder='Your Email'
                className='col'
                name="Email"
                required
                autoComplete='off'
              // value=''
              />

              <label htmlFor="">Subject :</label>
              <input
                type="text"
                // placeholder='Subject'
                className='col'
                name="Subject"
                required
                autoComplete='off'
              // value=''
              />

              <textarea
                placeholder='Write a message'
                name="message"
                required
                autoComplete='off'
              // value=''
              ></textarea>

              <div className="rightBtn mt-3 mb-3">
                <input
                  type='submit'
                  value='Send Message'
                  className='btn'
                />

              </div>

            </form>

          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactUs