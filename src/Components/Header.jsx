import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjectData } from '../app/actions';
import { useDispatch, useSelector } from 'react-redux';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profiler from './Assets/ProtfolioImg.jpg';
import { GiHamburgerMenu } from "react-icons/gi";
import './Styles.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false); // State to manage open project sub-menu on mobile
    const dispatch = useDispatch();
    const projectData = useSelector((state) => state.scroll.projectData);
    const loading = useSelector((state) => state.scroll.loading);
    const error = useSelector((state) => state.scroll.error);

    useEffect(() => {
        dispatch(fetchProjectData()); // Dispatch the fetch action when the component mounts
    }, [dispatch]);

    const handleProjectsClick = () => {
        setIsProjectsOpen(!isProjectsOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsProjectsOpen(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>

            <header>
                <div className="navbarlinks" >
                    <div className="container navlinks " >
                        <Link to="/" className="logo">
                            <img src={profiler} alt="Profile" width={60} />
                            <div className="logotext">
                                <h1>Teja Ravada</h1>
                                <h2>I'M a frontend developer</h2>
                            </div>
                        </Link>

                        <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                            <li
                                className={`nav-pro position-relative ${isProjectsOpen ? 'open' : ''}`}
                                onClick={window.innerWidth <= 767 ? handleProjectsClick : undefined}
                            >
                                <Link to="/projects" onClick={window.innerWidth <= 767 ? (e) => e.preventDefault() : undefined}>Projects</Link>
                                <ul className={`project_hover position-absolute ${isProjectsOpen ? 'open' : ''}`}>
                                    {
                                        projectData && projectData.map(project => (
                                            <li key={project.id}>
                                                <Link className="navitems" to={`/projects/${project.pro_name}`} onClick={closeMobileMenu}>{project.pro_name}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                            <li><Link to="/about-me" onClick={closeMobileMenu}>About Me</Link></li>
                            <li><Link to="/contactUs" onClick={closeMobileMenu}>Contact Us</Link></li>
                        </ul>

                        <ul className="nav-icons">
                            <li><Link to="https://github.com/TejaRavada"><GitHubIcon /></Link></li>
                            <li><Link to="/"><LinkedInIcon /></Link></li>
                        </ul>

                        <div className="menu_mobile" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <GiHamburgerMenu />
                        </div>
                    </div>

                </div>

            </header>
            <div className={`nav-Mob ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="navbarOverlay" onClick={closeMobileMenu}>
                </div>
            </div>
        </>


    );
};

export default Header;
