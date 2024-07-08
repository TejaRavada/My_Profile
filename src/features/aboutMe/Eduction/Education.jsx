import React, { useEffect, useRef } from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLineHeight, setStopHeight, fetchEducationData } from '../../../app/actions';


const Education = () => {
  const lastEventRef = useRef(null);
  const textRef = useRef(null);

  const dispatch = useDispatch();
  const lineHeight = useSelector((state) => state.scroll.lineHeight);
  const stopHeight = useSelector((state) => state.stopHeight);
  const educationData = useSelector((state) => state.scroll.educationData);

  useEffect(() => {
    dispatch(fetchEducationData());// Fetch data when component mounts

    const updateStopHeight = () => {
      if (textRef.current && lastEventRef.current) {
        const textPosition = textRef.current.getBoundingClientRect().top + window.scrollY;
        const lastEventPosition = lastEventRef.current.getBoundingClientRect().top + window.scrollY;
        dispatch(setStopHeight(Math.min(textPosition, lastEventPosition - 100))); // Stop 100px before the last event
      }
    };

    const updateLineHeight = () => {
      const scrollY = window.scrollY;
      const newHeight = Math.min(scrollY + window.innerHeight / 6, stopHeight);
      dispatch(setLineHeight(newHeight));
    };

    const handleScroll = () => {
      requestAnimationFrame(updateLineHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateStopHeight);
    updateStopHeight(); // Initial call to set the stop height

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateStopHeight);
    };
  }, [dispatch]);

  useEffect(() => {
    const eventElements = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          obs.unobserve(entry.target); // Stop observing after the animation
        }
      });
    });

    eventElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      eventElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [educationData]);

  return (
    <div className="timeline">
      <div className="timeline-line">
        <div className="line" style={{ height: `${lineHeight}px` }}></div>
      </div>
      <div className="items">
        {educationData.map((event, index) => (
          <div
            key={event.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            ref={index === educationData.length - 1 ? lastEventRef : null} // Ref to the last event
          >
            <div className="timeline-content">
              <h2>{event.title}</h2>
              <h4>{event.company}</h4>
              <h5>{event.date}</h5>
              <div className="timeline-topices">
                {event.description.map((desc, i) => (
                  <ul key={i} className="d-flex gap-2">
                    <li>
                      <img src="https://cdn-icons-png.freepik.com/256/2267/2267911.png?ga=GA1.1.201266464.1715144563&semt=ais_hybrid" alt="" width={20} />
                      {desc}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="timeline-icon">
              <img src={event.icon} alt="Icon" />
            </div>
            <div className="year">
              <h3>{event.company}</h3>
              <div className="mt-2" style={{ fontSize: '12px' }}>{event.date}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="content" ref={textRef}></div>
    </div>
  );
};

export default Education;