
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Project_card from './Componets/Project_card';
import { fetchProjectData } from '../../app/actions';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import Contact from '../home/Components/Contact';

const Projects = () => {
  const { category } = useParams();
  const selectedCategory = category || 'Html & css';

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

  return (
    <section className='container-fluid'>
      <div className='Project container'>
        <div className="project_sub">
          <h2 className='heading'>Projects</h2>
          <ul>
            {
              projectData && projectData.map(project => (
                <li key={project.id}>
                  <Link to={`/projects/${project.pro_name}`}>{project.pro_name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="product_items">
          <Project_card selectedCategory={selectedCategory} />
        </div>
      </div>
      
      <div className='Project container'>
        <div className="project_sub">
          <h2 className='heading'>real-Time Projects</h2>
          <ul>
            {
              projectData && projectData.map(project => (
                <li key={project.id}>
                  <Link to={`/projects/${project.pro_name}`}>{project.pro_name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      
      <Contact/>
    </section>
  )
}
export default Projects