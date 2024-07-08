import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles.css';

const Project_card = ({ selectedCategory }) => {

    const projectData = useSelector((state) => state.scroll.projectData);
    const loading = useSelector((state) => state.scroll.loading);
    const error = useSelector((state) => state.scroll.error);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const filteredProjects = projectData.filter(project => project.pro_name === selectedCategory);

    return (
        <>
            <div className="cards">
                {
                    filteredProjects && filteredProjects.map(card => (
                        card.items && card.items.map(item => (
                            <Link to={`/project/${item.id}`} key={item.id} className="card">
                                <div className="card" key={item.id}>
                                    <img src={item.proImg} alt={item.projectName} />
                                    <div className="card_text">
                                        <h4>{item.projectName}</h4>
                                        <p>{item.tagline}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ))
                }
            </div>
        </>
    )
}

export default Project_card