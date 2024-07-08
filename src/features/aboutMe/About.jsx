import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBehance, FaLinkedin, FaGithub } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab, setScrollProgress, setTargetSection } from '../../app/actions';
import ScrollProgressBars from './components/ScrollProgressBars';
import './styles.css'
import Education from './Eduction/Education';
import Experience from './Eduction/Experience';

const About = () => {

  const dispatch = useDispatch();
  const scrollProgress = useSelector((state) => state.scroll.scrollProgress);
  const activeTab = useSelector((state) => state.scroll.activeTab);
  const targetSection = useSelector(state => state.scroll.targetSection);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;
      dispatch(setScrollProgress(progress));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  // 
  const handleTabClick = (tab) => {
    dispatch(setActiveTab(tab));
  };

  // 
  const handleNavigation = (sectionId) => {
    dispatch(setTargetSection(sectionId));
    document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
      <section className='container'>
        {/* About_hero */}

        <div className="col-lg-12">
          <div className="row">
            <div className="About_hero">
              
              <div className="col-lg-6">
                <div className="About-left ">
                  <div className="About_name">
                    <h6><span>Hey!</span> <img src="https://cliply.co/wp-content/uploads/2019/06/391906110_WAVING_HAND_400.png" alt="" className='hand' /> I'm Teja Ravada, </h6>
                    <h5><span>Front-End Developer</span>  based <br /> in India</h5>
                  </div>
                  <p>See bits and pieces of his coding work and website on</p>
                  <div className="About_icon d-flex gap-3">
                    <p><Link to="#" style={{ color: '#ff0066' }}>Linkedin</Link></p> <span className='dot'>-</span>
                    <p><Link to="#" style={{ color: '#0066ff' }}>Behance</Link></p> <span className='dot'>-</span>
                    <p><Link to="#" style={{ color: '#00ccff' }}>GitHub</Link></p>
                  </div>
                  <div className="About_Social">
                    <p>My Knowledge</p>
                    <h4>front-end developer, web-App & <br /> websites</h4>
                  </div>
                  <div className="About_Icons">
                    <p><Link to="#"><FaGithub /></Link></p>
                    <p><Link to="#"><FaLinkedin /></Link></p>
                    <p><Link to="#"><FaBehance /></Link></p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="About-right">
                  <div className="About-Cricle" onClick={(e) => { e.preventDefault(); handleNavigation('section1'); }} style={{ backgroundColor: '#ff0066' }}>
                    <h2><Link to="#section1">Info</Link></h2>
                  </div>
                  <div className="About-Cricle" onClick={(e) => { e.preventDefault(); handleNavigation('section2'); }} style={{ backgroundColor: '#0066ff' }}>
                    <h2><Link to="#section2">Educ</Link></h2>
                  </div>
                  <div className="About-Cricle" onClick={(e) => { e.preventDefault(); handleNavigation('section3'); }} style={{ backgroundColor: '#00ccff' }}>
                    <h2><Link to="#section3">Skills</Link></h2>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* About_info */}
        <div className="About_info" id="section1">

          <div className="About_name">
            <h6><span>Hey!</span> <img src="https://cliply.co/wp-content/uploads/2019/06/391906110_WAVING_HAND_400.png" alt="" className='hand' /> I'm Teja Ravada, </h6>
          </div>

          <div className="info_Text">

            <p>I began my professional journey in the field of 2D animation, where I accumulated eight years of diverse experience. My roles included working as a 2D animator, e-learning specialist, background artist, character designer, and Harmony specialist, which encompassed Harmony rigging. Additionally, I gained expertise in 3D modeling and 3D rigging. This multifaceted background allowed me to develop a strong foundation in both technical and creative aspects of animation and design. </p>

            <p>After eight years in animation, I decided to transition to frontend development, driven by my passion for technology and web development. I focused on mastering React, Bootstrap, and JavaScript, which are essential tools for modern web development. During the first two years of my new career, I concentrated on developing components and styling, as well as implementing various React and JavaScript functions. This period was crucial in building my foundational skills and understanding the intricacies of frontend development.</p>

            <p>For the past nine months, I have been working extensively with Redux and React. This phase of my career has allowed me to deepen my expertise in state management and advanced React functionalities. I have been involved in creating dynamic and responsive web applications, ensuring seamless user experiences through efficient state management and component interaction.</p>

            <p>My diverse background in animation and frontend development equips me with a unique perspective and a versatile skill set. I am excited to continue growing in the field of frontend development, leveraging my creative and technical abilities to contribute to innovative projects and deliver exceptional results.</p>
          </div>

        </div>

        <div className="About_Educ" id="section2">
          <div className="About_Top">
            <ul className='d-flex gap-3 align-items-center w-100 justify-content-center'>
              <li className={`btn ${activeTab === 'education' ? 'activebtn' : ''}`} onClick={() => handleTabClick('education')}>education</li>
              <li className={`btn ${activeTab === 'experience' ? 'activebtn' : ''}`} onClick={() => handleTabClick('experience')}>experience</li>
            </ul>
            {activeTab === 'education' && <Education />}
            {activeTab === 'experience' && <Experience />}
            <div className="Educ_Topi"></div>
          </div>
        </div>

        <div className="About_Skills" id="section3">
          <h2 className='heading'>Skills</h2>
          <div className="items">
            <ScrollProgressBars scrollProgress={scrollProgress}/>
          </div>
        </div>

      </section>
    </>
  )
}

export default About