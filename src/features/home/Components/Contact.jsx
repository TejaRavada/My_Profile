import React from 'react'

const Contact = () => {
  return (
    <section className='container'>
      <div className='contacthome'>
        <div className="contactFull">
          <h2 className='heading' >Get in Touch</h2>
          <form className="contactFrom_From "
            action="https://formspree.io/f/xkndybka"
            method="POST">

            <input
              type="text"
              placeholder='Name'
              className='col'
              name="Name"
              required
              autoComplete='off'
            // value=''
            />
            <input
              type="text"
              placeholder='Your Email'
              className='col'
              name="Email"
              required
              autoComplete='off'
            // value=''
            />
            {/* <textarea name="" id="" placeholder='Message'></textarea> */}
            <div className="rightBtn">
              <input
                type='submit'
                value='Send Message'
                className='btn'
              />
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact