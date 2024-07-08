import React, { useEffect } from 'react';
import { fetchProjectData } from '../../../app/actions';
import { CiGrid42 } from "react-icons/ci";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles.css';

const Project_Details = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const projectData = useSelector((state) => state.scroll.projectData);
    const loading = useSelector((state) => state.scroll.loading);
    const error = useSelector((state) => state.scroll.error);

    useEffect(() => {
        if (!projectData.length) {
            dispatch(fetchProjectData());
        }
    }, [dispatch, projectData.length]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const project = projectData.flatMap(card => card.items).find(item => item.id === parseInt(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="projectDetails">
                <div className="container">

                    <div className="pro_details">
                        <div className="tittle mt-5 mb-5">
                            <h2>{project.tagline}</h2>
                        </div>
                        <div className="image_btn">
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {project.images && project.images.map((img, index) => (
                                        <div className="slide" key={index}>
                                            <img src={img} alt={project.projectName} />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                            <Link to={project.Link} className='btn mt-5 mb-5' target="_blank" rel="noopener noreferrer">Live Preview <CiGrid42 /></Link>
                        </div>

                        <div className="product_text mt-3">
                            {/*  */}
                            <h3 className='mt-3 mb-3'>{project.sub_Content1}</h3>
                            {Array.isArray(project.para1) ? (
                                project.para1.map((paragraph, index) => (
                                    <p className='item_line' key={index}>{paragraph}</p>
                                ))
                            ) : (
                                <p className='item_line'>{project.para1}</p>
                            )}

                            {/* 1 */}
                            <h4 className='mt-3 mb-3'>{project.sub_Content2}</h4>
                            <div className="image_context">
                                <img src={project.image2} alt="" />
                            </div>
                            {Array.isArray(project.para2) ? (
                                project.para2.map((paragraph, index) => (
                                    <p className='item_line' key={index}>{paragraph}</p>
                                ))
                            ) : (
                                <p className='item_line'>{project.para2}</p>
                            )}

                            {/* 2 */}
                            <h4>{project.sub_Content3}</h4>
                            {Array.isArray(project.para3) ? (
                                project.para3.map((paragraph, index) => (
                                    <p className='item_line' key={index}>{paragraph}</p>
                                ))
                            ) : (
                                <p className='item_line'>{project.para3}</p>
                            )}

                            {/* 3 */}
                            <h4>{project.sub_Content4}</h4>
                            {Array.isArray(project.para4) ? (
                                project.para4.map((paragraph, index) => (
                                    <p className='item_line' key={index}>{paragraph}</p>
                                ))
                            ) : (
                                <p className='item_line'>{project.para4}</p>
                            )}

                            {/* 4 */}
                            <h4>{project.sub_Content5}</h4>
                            {Array.isArray(project.para5) ? (
                                project.para5.map((paragraph, index) => (
                                    <p className='item_line' key={index}>{paragraph}</p>
                                ))
                            ) : (
                                <p className='item_line'>{project.para5}</p>
                            )}

                            {/* 5 */}
                            <h4>{project.sub_Content6}</h4>
                            <div className="image_context">
                                <img src={project.image3} alt="" />
                            </div>
                            <p>{project.para6}</p>

                            {/* 6 */}
                            <h4>{project.sub_Content7}</h4>
                            <p>{project.para7}</p>

                            {/* 7 */}
                            <h4>{project.sub_Content8}</h4>
                            <p>{project.para8}</p>

                            {/* 8 */}
                            <h4>{project.sub_Content9}</h4>
                            {Array.isArray(project.para9) ? (
                                project.para9.map((paragraph, index) => (
                                    <p className='item_line' key={index}>{paragraph}</p>
                                ))
                            ) : (
                                <p className='item_line'>{project.para9}</p>
                            )}

                            {/* 9 */}
                            <h4>{project.sub_Content10}</h4>
                            <p>{project.para10}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project_Details