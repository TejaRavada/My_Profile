import React, { useRef } from 'react';
import './Styles.css';
import YouTube from './YouTube';

const ResumeComp = () => {


    const tittle = [
        {
            num: '+91 7207389550',
            head: 'Curriculum Vitae'
        },
        {
            num: 'Ravadateja123@gmail.com',
            head: 'VeeraTeja'
        }
    ]

    const data = [
        {
            type: 'description',
            heading: 'SUMMARY',
            description: [
                "Passionate and detail-oriented Front-End Developer with 2 years of experience specializing in building responsive, user-friendly web applications using React and Redux. Transitioned to front-end development after an 8-year career in 2D animation, bringing a unique blend of creative design skills and technical expertise to the role.",
                "Having 8 years of experience in Creating, Designing and delivering Products in animation.",
                "Involved in development of various e-learning projects for secondary schooling and Bio pic of Sri Jayatheertharu And Metro LTD, Nursery Rhymes.",
                "Self-motivated, Creative, quick learner, willing to adapt new challenges & new technologies."
            ]
        },
        {
            type: 'description',
            heading: 'ACADEMICSk',
            description: [
                "Discontinued MBA 2nd year in RRS College Muthaiga, Hyderabad, Telangana, India.",
                "B.Tech in CSC from Aligarh Muslim University, UP, India pass out in the 2012 with an aggregate of 76.5%.",
                "Intermediate with the specialization of M.P.C from Sri Chaitanya Junior College at Eluru. Pass out in the year2008 with an aggregate of 61.1%.",
                "Secondary School Education from KPDT High school Branch Eluru. Pass out in the year2006 with an aggregate of 51.1%."
            ]
        },
        {
            type: 'table',
            heading: 'SKILLS/COMPETENCIES ',
            content: [
                {
                    'Skill Type': 'Languages',
                    Description: 'HTML, CSS, JavaScript',
                },
                {
                    'Skill Type': 'Frameworks/Libraries',
                    Description: 'React, Redux, Bootstrap, Tailwind CSS, jQuery',
                },
                {
                    'Skill Type': 'Tools',
                    Description: 'Git, Vite, Context API, reducers',
                },
                {
                    'Skill Type': 'Design',
                    Description: 'Responsive Design, CSS Flexbox, CSS Grid, Animation',
                },
                {
                    'Skill Type': 'Additional',
                    Description: 'APIs, Single Page Applications (SPA), Mobile Navigation, Progress Bars',
                },
                {
                    'Skill Type': 'Tools(Animation)',
                    Description: '2D Animation (Flash cs3, cs5, cs6, cc2022), Adobe InDesign, Illustrator, Adobe Photoshop, premiere Pro, After effects, Wave pad, and Toon boom rigging (Harmony), MS office, ',
                },
                {
                    'Skill Type': 'Domains',
                    Description: 'E-Learning, Media (audio & Video editing)',
                },
                {
                    'Skill Type': 'OS',
                    Description: 'Windows xp, windows 10',
                },
            ]
        },
        {
            type: 'table',
            heading: 'WORK HISTORY',
            content: [
                {
                    Duration: 'January  2014 to January 2015',
                    Organization: 'SMC Media pvt. Ltd Hyderabad',
                    Role: '2D Animator'
                },
                {
                    Duration: 'January 2015 to November 2015',
                    Organization: 'Code and Pixels Interactive Technologies Pvt.Ltd Hyderabad',
                    Role: '2D Animator'
                },
                {
                    Duration: 'November 2015 to August 2016',
                    Organization: 'Reliance aims Hyderabad',
                    Role: '2D Animator'
                },
                {
                    Duration: 'August 2016 to December 2017',
                    Organization: 'Open Face Media Pvt.Ltd Hyderabad',
                    Role: '2D Animator'
                },
                {
                    Duration: 'December 2017 to August 2018',
                    Organization: 'Bob Animation',
                    Role: '3D Animator'
                }
            ]
        }
    ];

    const Professional = [
        {
            tittle: 'Project: Beej Network',
            desc: 'Designed and developed a responsive network platform using HTML and CSS, focusing on positioning and card styles.'
        },
        {
            tittle: 'Project: Antique Cafe',
            desc: 'Built a multi-feature website using HTML, CSS, JavaScript, and jQuery. Implemented parallax scrolling, smooth scrolling, and dynamic navigation bar changes.'
        },
        {
            tittle: 'Project: Fashion Website',
            desc: 'Created a multi-page, responsive fashion website using HTML, CSS, Bootstrap, and jQuery. Integrated a carousel slider and used various positioning techniques.'
        },
        {
            tittle: 'Project: Interior Design Website',
            desc: 'Developed a single-page interior design website using HTML and CSS. Ensured responsiveness with flexbox and smooth scrolling navigation.'
        },
        {
            tittle: 'Project: Hotel Website',
            desc: 'Designed a single-page, responsive hotel website using HTML, CSS, and Bootstrap. Included image and card styles, and smooth scrolling navigation.'
        },
        {
            tittle: 'Project: Profile Project',
            desc: 'Built a responsive single-page profile website using HTML, CSS, Bootstrap, and JavaScript. Features included a mobile navigation view, skills progress bar, form validation, and data fetching with a "Load more images" button.'
        },
        {
            tittle: 'Project: Entertainment Website',
            desc: 'Created a multi-page entertainment website using React. Utilized props, developed a slider component, and ensured responsiveness.'
        },
        {
            tittle: 'Project: Coffee Website',
            desc: 'Developed a multi-page coffee website using React. Integrated props, a slider component, and a dropdown function for enhanced user interaction.'
        }
    ]
    const topices = [
        {
            sub_head: 'E-Learning (for primary education syllabus)',
            sub_heading1: 'Description',
            sub_Text1: 'E learning is an interactive, intelligent and independent way of learning, which makes students to understand and adapt the concepts more easily and in a very Fun way.',
            sub_heading2: 'Clients',
            sub_Text2: 'SMC Media pvt LTD india, Hyderabad Secondary education syllabus 6th to 10th  classes and primary syllabus 1st to 3rd class Secondary syllabus, Primary syllabus And primary syllabus of gvt project Reliance aims India  Hyderabad Primary syllabus',
            sub_heading3: 'Duration',
            sub_Text3: 'anuary 2014 – August 2016',
            sub_heading4: 'Team size',
            sub_Text4: '10',
            sub_heading5: 'Contribution',
            sub_Text5: 'Created animations for primary education syllabus',
            sub_heading6: 'Technology Skills',
            sub_Text6: 'Flash Cs3, cs5,Cs6',
        },
        {
            sub_head: 'Flash Animation (Bio pic of Sri Jayatheertharu And Metro LTD)',
            sub_heading1: 'Description',
            sub_Text1: 'Titled as "Kim Pashu Poorva Dehey" this short 34 min animation movie depicts the glorious biography of the great saint in a simple manner and format that could appeal to multiple generations.',
            sub_heading2: 'Clients',
            sub_Text2: [
                'Open Face Media Pvt.Ltd',
                'Metro LTD'
            ],
            sub_heading3: 'Duration',
            sub_Text3: 'August 2016 – August 2017',
            sub_heading4: 'Team size',
            sub_Text4: '15',
            sub_heading5: 'Created animations',
            sub_Text5: 'Created animations for primary education syllabus',
            sub_heading6: 'Technology Skills',
            sub_Text6: 'Flash CC',
        },
        {
            sub_head: 'Flash Animation (Freelancing Works)',
            sub_heading1: 'Description',
            sub_Text1: 'Jumping kids is a animation kids videos channel. This channel contains all videos related to moral stories, nursery rhymes, animation songs, kid’s night stories, children songs and rhymes. small babies can enjoy the songs along with visualization.',
            sub_heading2: 'Clients',
            sub_Text2: 'Jumping Kids',
            sub_heading3: 'Duration',
            sub_Text3: 'August 2017 – August 2018',
            sub_heading4: 'Team size',
            sub_Text4: '8',
            sub_heading5: 'Created animations',
            sub_Text5: 'Created animations for primary education syllabus',
            sub_heading6: 'Technology Skills',
            sub_Text6: 'Flash CC',
        }
    ]

    const personal = [
        {
            tittle: 'Address for Correspondence',
            text: [
                'Comfort Avenue',
                'Bandari Layout',
                'Nizampet Village',
                'Hyderabad - 500072',
                'Andhra Pradesh.'
            ],
        },
        {
            tittle: 'Contact No',
            text: 'Mobile: +91 7207389550'
        },
        {
            tittle: 'E-mail address',
            text: 'Ravadateja123@Gmail.com'
        },
        {
            tittle: 'Marital status',
            text: 'Single'
        },
        {
            tittle: 'Date of Birth',
            text: '19-July-1990'
        },
        {
            tittle: 'Languages Known',
            text: 'English, Hindi, Telugu'
        },
        {
            tittle: 'job perception',
            text: 'It is perceived that positive attitude sincerity singleness of the purpose and high standard of performance leads to job satisfaction.'
        }
    ]

    return (
        <section className="resume container">

            <div className="resu_part">
                {
                    tittle.map((item, index) => (
                        <div key={index} className="re-inside">
                            <p>{item.num}</p>
                            <p>{item.head}</p>
                        </div>
                    ))
                }
            </div>

            <div className="resu_sum">

                <div className="resu_Box">
                    <div className="box_heading">
                        {
                            data.map((item, index) => (
                                <div key={index} className='resume_top'>
                                    <h2>{item.heading}</h2>
                                    {item.type === 'description' ? (
                                        <ul>
                                            {item.description.map((point, idx) => (
                                                <li key={idx}>
                                                    <img src="https://cdn-icons-png.freepik.com/256/2267/2267911.png?ga=GA1.1.201266464.1715144563&semt=ais_hybrid" alt="" width={20} />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <table>
                                            <thead>
                                                <tr>
                                                    {Object.keys(item.content[0]).map((key) => (
                                                        <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {item.content.map((facility) => (
                                                    <tr key={facility.id}>
                                                        {Object.values(facility).map((value, index) => (
                                                            <td key={index}>{value}</td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="resume_topices">
                <div className="project">
                    <h2>Professional Experience</h2>
                    {
                        Professional.map((item, index) => (
                            <div key={index} className="project_Text">
                                <h3>{item.tittle}</h3>
                                <div className="project_topices">
                                    <div className="project_sub">
                                        <p className='w-100'>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>

            <div className="resume_topices">
                <div className="project">
                    <h2>Previous Experience</h2>
                    {
                        topices.map((item, index) => (
                            <div key={index} className="project_Text">
                                <h3>{item.sub_head}</h3>
                                <div className="project_topices">
                                    <div className="project_sub">
                                        <h4>{item.sub_heading1}</h4>
                                        <h6>:</h6>
                                        <p>{item.sub_Text1}</p>
                                    </div>
                                    <div className="project_sub">
                                        <h4>{item.sub_heading2}</h4>
                                        <h6>:</h6>
                                        <p>{item.sub_Text2}</p>
                                    </div>
                                    <div className="project_sub">
                                        <h4>{item.sub_heading3}</h4>
                                        <h6>:</h6>
                                        <p>{item.sub_Text3}</p>
                                    </div>
                                    <div className="project_sub">
                                        <h4>{item.sub_heading4}</h4>
                                        <h6>:</h6>
                                        <p>{item.sub_Text4}</p>
                                    </div>
                                    <div className="project_sub">
                                        <h4>{item.sub_heading5}</h4>
                                        <h6>:</h6>
                                        <p>{item.sub_Text5}</p>
                                    </div>
                                    <div className="project_sub">
                                        <h4>{item.sub_heading6}</h4>
                                        <h6>:</h6>
                                        <p>{item.sub_Text6}</p>
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>

            {/* <div className="resume_links">
                <h2>previous experience Links(My YouTube Videos)</h2>
                <div className="links_res">
                    <ul className='ms-5'>
                        <YouTube/>
                    </ul>
                </div>
            </div> */}

            <div className="resume_links">
                <h2>Personal Details</h2>
                <div className="links_res">
                    <table>
                        <tbody>
                            {personal.map((facility) => (
                                <tr key={facility.id}>
                                    {Object.values(facility).map((value, index) => (
                                        <td key={index}>{value}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="resu_part">
                <div className="re-inside">
                    <p>Place</p>
                    <p>Hyderabad (Teja)</p>
                </div>
            </div>

        </section>
    )
}

export default ResumeComp