import React, { useState } from 'react'
import HeroBan from './Components/HeroBan'
import './Styles.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Education from '../aboutMe/Eduction/Education'
import Experience from '../aboutMe/Eduction/Experience'
import { setActiveTab } from '../../app/actions'
import { useDispatch, useSelector } from 'react-redux'
import ProjectHome from './Components/Projects'
import Topice_card from './Components/Topice_card'
import ProgressBar from './Components/progress_bar'

const Home = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.scroll.activeTab);

  const handleTabClick = (tab) => {
    dispatch(setActiveTab(tab));
  };
  return (
    <>
      <div className="">
        <HeroBan />
        <ProjectHome />
        <About />
        <div className="About_Educ mt-5 mb-5">
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
        <Topice_card/>
        <ProgressBar/>
        <Contact />
      </div>
    </>
  )
}

export default Home