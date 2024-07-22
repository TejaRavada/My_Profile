import React, { useRef } from 'react';
import './Styles.css';
import YouTube from './YouTube';

const ResumeComp = () => {


    const tittle = [
        {
            num: '+91 6305191836',
            head: 'Curriculum Vitae'
        },
        {
            num: 'tejaveera19@gmail.com',
            head: 'VeeraTeja'
        }
    ]

    const data = [
        {
            type: 'description',
            heading: 'SUMMARY',
            description: [
                "Passionate UI/UX designer and frontend developer with 2 years of experience in creating visually appealing and user-friendly websites and applications. Proficient in HTML, CSS, JavaScript, React, and design tools like Figma and Adobe Illustrator. Adept at translating complex requirements into user-centered designs and functional web interfaces. Transitioned to UI/UX design and front-end development after a 7-year career in 2D animation, bringing a unique blend of creative design skills and technical expertise to the role. Recently learned full-stack Java development to expand my technical skill set.",
                "UI/UX Design and Frontend Development: Developed and maintained responsive web applications using modern technologies. Collaborated with UI/UX designers to create seamless user experiences.",
                "Animation and E-Learning Projects: Created, designed, and delivered products in animation, including e-learning projects for secondary schooling and biopics such as 'Bio pic of Sri Jayatheertharu' and 'Metro LTD,' as well as nursery rhymes.",
                "Adaptability and Continuous Learning: Self-motivated, creative, and a quick learner. Willing to adapt to new challenges and technologies, continuously expanding knowledge in both design and development."
            ]
        },
        {
            type: 'description',
            heading: 'ACADEMICSk',
            description: [
                "Career Pedia, November 2023 - June 2024 -> Completed an intensive bootcamp focused on full-stack Java development, covering front-end technologies such as HTML, CSS, and JavaScript. Specialized in React, including state management with Context API and Redux, and routing with React Router. Gained experience in modern JavaScript (ES6+), asynchronous programming, and integrating RESTful APIs. Familiar with build tools like Webpack, Babel, and Vite, as well as version control with Git and GitHub. Focused on front-end testing with Jest and React Testing Library. Emphasized web performance optimization techniques, including lazy loading, code splitting, and tree shaking for efficient web applications.",
                
                "Reliance Big Aims, June 2012 - November 2013 -> Completed a comprehensive course in 2D animation, learning techniques in character design, storyboarding, and animation production. Worked on multiple projects, including e-learning materials and animated shorts.",

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
                    'Skill Type': 'UI Design',
                    Description: 'Adobe Photoshop, Adobe illustrator, Adobe InDesign, Adobe XD, UI/UX (Figma),Responsive Design, CSS Flexbox, CSS Grid, Animation',
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
                    Organization: 'SMC Media PVT.LTD Hyderabad',
                    Role: '2D Animator'
                },
                {
                    Duration: 'February 2015 to October 2015 (Freelance(2015-2018))',
                    Organization: 'Code and Pixels Interactive Technologies PVT.LTD Hyderabad',
                    Role: '2D Animator'
                },
                {
                    Duration: 'November 2015 to July 2016',
                    Organization: 'Reliance aims Hyderabad',
                    Role: '2D Animator'
                },
                {
                    Duration: 'August 2016 to November 2017',
                    Organization: 'Open Face Media PVT.LTD Hyderabad',
                    Role: '2D Animator'
                },
                {
                    Duration: 'December 2017 to August 2018',
                    Organization: 'Bob Animation',
                    Role: '3D Animator'
                },
                {
                    Duration: 'September 2018 to March 2023',
                    Organization: 'Shrisansa Animstudio PVT.LTD Hyderabad',
                    Role: ' 2D Animator, UI/UX Design, Front-End Developer'
                }
            ]
        }
    ];

    const Professional = [
        {
            tittle: 'Project: Beej Network',
            desc: 'Designed and developed a responsive network platform using HTML and CSS, focusing on positioning and card styles.',
            link: 'https://beejsimple.netlify.app'
        },
        {
            tittle: 'Project: Coffee Website',
            desc: 'Developed a multi-page coffee website using HTML&CSS. Integrated props, a imgs, and a dropdown function and scrolling for enhanced user interaction.',
            link: 'https://simpleecoffee.netlify.app'
        },
        {
            tittle: 'Project: Antique Cafe',
            desc: 'Built a multi-feature website using HTML, CSS, JavaScript, and jQuery. Implemented parallax scrolling, smooth scrolling, and dynamic navigation bar changes.',
            link: 'https://cafesimplewebsite.netlify.app'
        },
        {
            tittle: 'Project: Fashion Website',
            desc: 'Created a multi-page, responsive fashion website using HTML, CSS, Bootstrap, and jQuery. Integrated a carousel slider and used various positioning techniques.',
            link: 'https://fashionbootstrap.netlify.app'
        },
        {
            tittle: 'Project: Interior Design Website',
            desc: 'Developed a single-page interior design website using HTML and CSS. Ensured responsiveness with flexbox and smooth scrolling navigation.',
            link: 'https://interiorbootstrap.netlify.app'
        },
        {
            tittle: 'Project: Hotel Website',
            desc: 'Designed a single-page, responsive hotel website using HTML, CSS, and Bootstrap. Included image and card styles, and smooth scrolling navigation.',
            link: 'https://hotelbootstrap.netlify.app'
        },
        {
            tittle: 'Project: Entertainment(react) Website',
            desc: 'Created a multi-page entertainment website using React. Utilized props, developed a slider component, and ensured responsiveness.',
            link: 'https://entertainmentreact.netlify.app'
        },
        {
            tittle: 'Profile (react with redux) Project',
            desc: 'Built a responsive Multi-page profile website using HTML, CSS, Bootstrap, JavaScript, and react with redux. Features included a mobile navigation view, skills progress bar, form validation, and data fetching with a "Load more images" button.',
            link: 'https://tejaprofile.netlify.app'
        },
        {
            tittle: 'Project: E- Commerece Fresh(react) Website',
            desc: 'Developed using React, this e-commerce project features a robust "Add to Cart" and "Remove from Cart" functionality, allowing users to manage their shopping with ease. The application calculates the total cost with GST, ensuring transparency in pricing. It integrates seamlessly with an API for real-time product data, enhancing the shopping experience. The "Quick View" feature provides a snapshot of product details, helping customers make informed decisions quickly. This project showcases a dynamic and user-friendly interface, ideal for modern online shopping.',
            link: ''
        },
        {
            tittle: 'Project: Coffee(react) Website',
            desc: 'I developed a multi-page Coffee website using JavaScript and API fetch for dynamic data integration. The project features multiple pages, including a detailed product view and an interactive menu. By fetching data from an external API, the site ensures real-time updates and accurate product listings. This project showcases my ability to integrate APIs, manage state across multiple pages, and create a seamless user experience, highlighting my front-end development skills and proficiency in dynamic content management.',
            link: ''
        },
        {
            tittle: 'Project: E-Commerece Pottery(react with redux) Website',
            desc: 'This e-commerce project is developed using React, Redux, Bootstrap, MUI, React Icons, and React Slider to create a modern and efficient online shopping experience. The application features robust cart management, including "Add to Cart," "Remove from Cart," and "Move to Cart" functionalities, ensuring seamless user interaction. It accurately calculates the total cost with GST, providing transparent pricing for customers. Integration with a third-party API rendered deployment enables real-time product data updates, enhancing the shopping experience. The project utilizes Bootstrap and MUI for responsive and visually appealing design, while React Icons add intuitive and accessible icons throughout the interface. The React Slider component allows for an engaging and interactive product viewing experience. Additionally, the "Quick View" feature provides a snapshot of product details, enabling quick and informed decision-making for users. This project demonstrates effective state management, efficient data handling, and a user-friendly interface, making it ideal for modern e-commerce applications.',
            link: ''
        },
        {
            tittle: 'Fetch(java Script) Website',
            desc: 'I am proficient in JavaScript and have experience creating multi-page applications. I have developed a robust login system with comprehensive validation checks. Additionally, I implemented a GST calculator to accurately compute tax for various transactions. My skills extend to fetching data from APIs to enhance functionality, such as adding new orders dynamically. Through these projects, I have honed my ability to manage user authentication, perform client-side validation, and integrate external data sources seamlessly. My work reflects a commitment to creating efficient, user-friendly web applications with a focus on real-world applications and usability.',
            link: 'https://dress-in-fetch.netlify.app'
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
                                    <div className="project_subs">
                                        <p className='w-100'>{item.desc}</p>
                                        <p className='link'>{item.link}</p>
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