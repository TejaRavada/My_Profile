import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Styles.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer_in">
        <div className="icons_Right">
          <ul>
            <Link to="/"><li><GitHubIcon /></li></Link>
            <Link to="/"><li><LinkedInIcon /></li></Link>
          </ul>
        </div>
        <div className="copyright">
          <p>© 2024 Teja Ravada</p>
        </div>
      </div>
    </div>
  )
}

export default Footer