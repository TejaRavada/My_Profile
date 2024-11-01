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

            <p>I began my professional journey in the field of 2D animation, where I accumulated six years of diverse experience. My roles included working as a 2D animator, e-learning specialist, background artist, character designer, and Harmony specialist, which encompassed Harmony rigging. Additionally, I gained expertise in 3D modeling and 3D rigging. This multifaceted background allowed me to develop a strong foundation in both technical and creative aspects of animation and design. </p>

            <p>After six years in animation, I decided to transition to frontend development, driven by my passion for technology and web development. I focused on mastering React, Bootstrap, and JavaScript, which are essential tools for modern web development. During the first two years of my new career, I concentrated on developing components and styling, as well as implementing various React and JavaScript functions. This period was crucial in building my foundational skills and understanding the intricacies of frontend development.</p>

            <p>Passionate UI/UX designer and frontend developer with 5 years of experience in creating visually appealing and user-friendly websites and applications. Proficient in HTML, CSS, JavaScript, React, and design tools like Figma and Adobe Illustrator. Adept at translating complex requirements into user-centered designs and functional web interfaces. Transitioned to UI/UX design and front-end development after a 7-year career in 2D animation, bringing a unique blend of creative design skills and technical expertise to the role. Recently learned full-stack Java development to expand my technical skill set.</p>

            <p>UI/UX Design and Frontend Development: Developed and maintained responsive web applications using modern technologies. Collaborated with UI/UX designers to create seamless user experiences.</p>

            <p>Animation and E-Learning Projects: Created, designed, and delivered products in animation, including e-learning projects for secondary schooling and biopics such as 'Bio pic of Sri Jayatheertharu' and 'Metro LTD,' as well as nursery rhymes.</p>
            
            <p>Adaptability and Continuous Learning: Self-motivated, creative, and a quick learner. Willing to adapt to new challenges and technologies, continuously expanding knowledge in both design and development.</p>

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