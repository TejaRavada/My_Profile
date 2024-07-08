import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Project_card from '../../projects/Componets/Project_card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectData } from '../../../app/actions';

const ProjectHome = () => {
  const [selectedCategory, setSelectedCategory] = useState('Html & css');
  const navigate = useNavigate();

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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const goToProjectsPage = (category) => {
    navigate(`/projects/${category}`);
  };

  return (
    <section className='container-fluid '>

      <div className='Projects container'>
        <div className="project_sub">
          <h2 className='heading'>Projects</h2>
          <div className="project_names">
            <ul>
              {projectData && projectData.map((project) => (
                <li key={project.id}>
                  <Link to="#" onClick={() => handleCategoryClick(project.pro_name)}>
                    {project.pro_name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
        <Project_card selectedCategory={selectedCategory} />
        <button className='activebtn' onClick={() => goToProjectsPage(selectedCategory)}>Go to Projects Page</button>

      </div>

    </section>
  )
}

export default ProjectHome