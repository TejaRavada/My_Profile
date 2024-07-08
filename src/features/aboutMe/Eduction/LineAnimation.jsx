import React, { useEffect, useRef } from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setLineHeight, setStopHeight } from '../../../app/actions';


const events = [
  {
    id: 1,
    title: 'Geetanjali Public School',
    company: 'SCC',
    date: '2004 - 2005',
    description: [
      'I completed my 10th class at Geetanjali Public School during the year 2004-2005. Located in Eluru, Andhra Pradesh, India, my time at Geetanjali Public School was formative and enriching.',
      'provided a strong foundation for my academic and personal growth',
      'offering a supportive environment that encouraged curiosity and learning, fostering both my intellectual and social development.',
      'Developed both intellectual and social skills in a supportive environment'
    ],
    icon: 'https://cdn-icons-png.freepik.com/256/8074/8074788.png?ga=GA1.1.201266464.1715144563&semt=ais_hybrid'
  },
  {
    id: 2,
    title: 'Sri Chaitanya Junior College',
    company: 'M.P.C',
    date: '2006 - 2008',
    description: [
      'I completed my intermediate education over two years, from 2006 to 2008. Initially, I studied at Sri Chaitanya Junior College in Eluru. ',
      'Midway through, my family relocated to Hyderabad, where I continued and completed my studies at Narayana Junior College.',
      'Sri Chaitanya Junior College, Eluru (2006-2007): Developed a solid foundation in core subjects and honed my analytical skills in a competitive academic environment.',
      'Narayana Junior College, Hyderabad (2007-2008): Continued my intermediate studies after relocating, successfully adapting to a new setting and maintaining academic excellence.'
    ],
    icon: 'https://cdn-icons-png.freepik.com/256/3749/3749803.png?ga=GA1.1.201266464.1715144563&semt=ais_hybrid'
  },
  {
    id: 3,
    title: 'Aligarh Muslim University',
    company: 'B.Tech - (CSS)',
    date: '2008 - 2012',
    description: [
      'I am an alumnus of Aligarh Muslim University, where I completed my B.Tech in Computer Science and Technology from 2008 to 2012.',
      'Located in Aligarh, Uttar Pradesh, the university provided me with a comprehensive education that laid the foundation for my technical expertise.',
      'During my four years of study, I immersed myself in various aspects of computer science, including programming, data structures, algorithms, and software development.',
      'The rigorous curriculum and hands-on projects honed my problem-solving skills and prepared me for the challenges of the tech industry.',
      'My time at Aligarh Muslim University was instrumental in shaping my career in technology.'
    ],
    icon: 'https://cdn-icons-png.freepik.com/256/7559/7559589.png?ga=GA1.1.201266464.1715144563&semt=ais_hybrid'
  },
  {
    id: 4,
    title: 'Reliance Big Aims in Hyderabad',
    company: '2D Animation',
    date: '2012 - 2013',
    description: [
      'I pursued a course in 2D Animation at Reliance Big Aims in Hyderabad, Telangana, from 2012 to 2013. During this period, I immersed myself in the creative and technical aspects of animation, gaining comprehensive knowledge and hands-on experience in character design, background artistry, and animation techniques.',
      'The program equipped me with a solid foundation in traditional and digital animation, fostering my skills in storytelling and visual development.',
      'My time at Reliance Big Aims was instrumental in shaping my artistic abilities and understanding of the animation industry. The rigorous curriculum and practical projects helped me develop a keen eye for detail and a deep appreciation for the animation process.',
      'This experience has been invaluable in my professional journey, providing me with the skills and confidence to excel in various roles within the animation and creative sectors.',
      'The foundation I built during this course continues to influence my work and creative endeavors.'
    ],
    icon: 'https://cdn-icons-png.freepik.com/256/4427/4427922.png?ga=GA1.1.201266464.1715144563&semt=ais_hybrid',
  },
  {
    id: 5,
    title: 'RRS college of engineering and technology',
    company: 'MBA - (discountinued)',
    date: '2017 - 2018',
    description: [
      'I attended RRS College of Engineering and Technology in Hyderabad, Telangana, where I pursued an MBA in Finance from 2017 to 2018.',
      'Unfortunately, due to health issues, I had to discontinue my studies. Despite this setback, my time at the college provided me with valuable knowledge and skills in financial management, analysis, and strategic planning.',
      'The experience, although brief, has significantly contributed to my understanding of finance and its applications.',
      'I am eager to apply this foundation in my professional endeavors and continue learning and growing in the field of finance.'
    ],
    icon: 'https://cdn-icons-png.freepik.com/256/6988/6988161.png?ga=GA1.1.201266464.1715144563&semt=ais_hybrid',
  }
];
const LineAnimation = () => {
  const lastEventRef = useRef(null);
  const textRef = useRef(null);

  const dispatch = useDispatch();
  const lineHeight = useSelector((state) => state.lineHeight);
  const stopHeight = useSelector((state) => state.stopHeight);

  useEffect(() => {
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
  }, [ dispatch]);

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
  }, []);

  return (
    <div className="timeline">
      <div className="timeline-line">
        <div className="line" style={{ height: `${lineHeight}px` }}></div>
      </div>
      <div className="items">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            ref={index === events.length - 1 ? lastEventRef : null} // Ref to the last event
          >
            <div className="timeline-content">
              <h2>{event.title}</h2>
              <h4>{event.company}</h4>
              <h5>{event.date}</h5>
              <div className="timeline-topics">
                {event.description.map((desc, i) => (
                  <ul key={i} className="d-flex gap-2">
                    <li className='sub-topic'>
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

export default LineAnimation;

