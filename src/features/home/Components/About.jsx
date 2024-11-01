import React from 'react';
import Aboutimg from '../Assets/aboutImg.jpg'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { downloadWordFile } from '../../../app/actions';

const About = () => {
  const dispatch = useDispatch();
  const handleDownload = () => {
    dispatch(downloadWordFile());
  };
  return (
    <section className='container-fluid aboutFull'>
      <div className="col-lg-12">
        <div className='about container'>
          <div className="row">

            <div className="about_img col-lg-6">
              <img src={Aboutimg} alt="" className='w-100' />
            </div>

            <div className="about_text col-lg-6">
              <h2 className='heading'>About us</h2>
              <h4>Who I am</h4>
              <p>I began my career in 2D animation, spending eight years working as a 2D animator, e-learning specialist, background artist, character designer, and Harmony specialist, including Harmony rigging. Additionally, I gained experience in 3D modeling and 3D rigging. This diverse experience allowed me to develop a strong foundation in both creative and technical aspects. </p>

              <p>After eight years, I transitioned to frontend development, focusing on React, Bootstrap, and JavaScript. For the first Five years, I concentrated on components and styling, as well as implementing various React and JavaScript functions. This period was essential in building my foundational skills and understanding the intricacies of frontend development.</p>

              <p>For the past nine months, I have been working extensively with Redux and React, deepening my expertise in state management and advanced React functionalities. My unique background in animation and frontend development equips me with a versatile skill set and a creative perspective, enabling me to contribute effectively to innovative projects.</p>

              <div className="btnText d-flex w-100 gap-3 mb-5 mt-5 rightBtn">
                <Link to="/">
                  <p className='btn' onClick={handleDownload}>See my Resume</p>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About