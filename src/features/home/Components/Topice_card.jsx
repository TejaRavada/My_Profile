import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectData } from '../../../app/actions';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Topice_card = () => {

    const dispatch = useDispatch();
    const projectData = useSelector((state) => state.scroll.projectData);
    const loading = useSelector((state) => state.scroll.loading);
    const error = useSelector((state) => state.scroll.error);

    useEffect(() => {
        dispatch(fetchProjectData()); // Dispatch the fetch action when the component mounts
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <>
            <div className="catSliderSection">
                <ul className='container'>
                    <Slider {...settings} className='cat_slider_main'>
                        {
                            projectData && projectData.map((project, index) => (
                                <li key={project.id} className='item'>
                                    <Link className="info" to={`/projects/${project.pro_name}`}>{project.pro_name}</Link>
                                </li>
                            ))
                        }
                    </Slider>
                </ul>
            </div>
        </>
    )
}

export default Topice_card