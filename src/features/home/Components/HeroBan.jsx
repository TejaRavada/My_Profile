import React from 'react';
import { Link } from 'react-router-dom';
import Profiler from '../Assets/ProtfolioImg.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdCloseCircle } from "react-icons/io";
import { setText, openModal, closeModal, downloadWordFile } from '../../../app/actions';
import ResumeComp from './Resume/ResumeComp';
import Modal from 'react-modal';
Modal.setAppElement('#root'); // This is important for accessibility

const HeroBan = () => {

    const dispatch = useDispatch();
    const text = useSelector((state) => state.scroll.text);
    const modalIsOpen = useSelector((state) => state.scroll.modalIsOpen);

    const handleButtonClick = () => {
        dispatch(setText('I am here'));
    };

  const handleDownload = () => {
    dispatch(downloadWordFile());
  };

    return (
        <div className="container mb-5">
            <div className="hero">
                <div className="col-lg-12">
                    <div className="row ">
                        <div className="hero_left col-lg-6">
                            <div className="btnText d-flex justify-content-between w-100 mb-5 mt-5">
                                <p style={{ fontFamily: "Salsa", color: '#6aff65', fontWeight: '300', fontSize: "20px", textTransform: "capitalize" }}>{text}</p>
                                <button onClick={(handleButtonClick)}className='btn'>
                                    View
                                </button>
                            </div>
                            <h2>Hello, i'm</h2>
                            <h1>Teja Ravada</h1>
                            <h2>I'M a frontend developer</h2>
                            <div className="icons d-flex gap-3">
                                <Link to="/"><GitHubIcon /></Link>
                                <Link to="/"><LinkedInIcon /></Link>
                            </div>

                            <div className="links_Ban btnText d-flex justify-content-center w-100 gap-3 mb-5 mt-5">
                                <Link to="/">
                                    <p className='btn' onClick={handleDownload}>Get my Resume</p>
                                </Link>

                                <Link to="#" onClick={() => dispatch(openModal())}>
                                    <p className='btn' >See my Resume</p>
                                </Link>
                                <Modal isOpen={modalIsOpen} onRequestClose={() => dispatch(closeModal())} contentLabel="Place Information" className="modalContent container">
                                    <div className="close">
                                        <a onClick={() => dispatch(closeModal())}className=''><IoMdCloseCircle /></a>
                                    </div>
                                    < ResumeComp />
                                </Modal>
                            </div>
                        </div>
                        <div className="hero_right col-lg-6">
                            <div className="image-container">
                                <img src={Profiler} alt="" className='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBan;
