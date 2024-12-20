import React, { useRef } from 'react';
import './Styles.css';
import YouTube from './YouTube';
import { Link } from 'react-router-dom';

const ResumeComp = () => {

    const tittle = [
        {
            num: '+91 6305191836',
            head: 'Curriculum Vitae'
        },
        {
            num: 'tejaveera19@gmail.com',
            head: 'Veera Teja'
        }
    ];

    const data = [
        {
            type: 'description',
            heading: 'SUMMARY',
            description: [
                "Passionate UI/UX designer and frontend developer with 3 years of experience in creating visually appealing and user-friendly websites and applications. Proficient in HTML, CSS, JavaScript, React, and design tools like Figma and Adobe Illustrator. Adept at translating complex requirements into user-centered designs and functional web interfaces. Transitioned to UI/UX design and front-end development after a 9-year career in 2D animation, bringing a unique blend of creative design skills and technical expertise to the role. Recently learned full-stack Java development to expand my technical skill set.",
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
                    Duration: 'January  2013 to January 2014',
                    Organization: 'Magical & colors',
                    Role: '2D Animator (internship)'
                },
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
                },
                {
                    Duration: 'April 2023 to till date',
                    Organization: 'Freelance',
                    Role: ' UI/UX Design, Front-End Developer'
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
            tittle: 'Fetch(java Script) Website',
            desc: 'I am proficient in JavaScript and have experience creating multi-page applications. I have developed a robust login system with comprehensive validation checks. Additionally, I implemented a GST calculator to accurately compute tax for various transactions. My skills extend to fetching data from APIs to enhance functionality, such as adding new orders dynamically. Through these projects, I have honed my ability to manage user authentication, perform client-side validation, and integrate external data sources seamlessly. My work reflects a commitment to creating efficient, user-friendly web applications with a focus on real-world applications and usability.',
            link: 'https://dress-in-fetch.netlify.app'
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
            link: 'https://freshappfriutss.netlify.app/'
        },
        {
            tittle: 'Project: Coffee(react) Website',
            desc: 'I developed a multi-page Coffee website using JavaScript and API fetch for dynamic data integration. The project features multiple pages, including a detailed product view and an interactive menu. By fetching data from an external API, the site ensures real-time updates and accurate product listings. This project showcases my ability to integrate APIs, manage state across multiple pages, and create a seamless user experience, highlighting my front-end development skills and proficiency in dynamic content management.',
            link: 'https://coffeecafesimple.netlify.app'
        },
        {
            tittle: 'Project: E-Commerece Pottery(react with redux) Website',
            desc: 'This e-commerce project is developed using React, Redux, Bootstrap, MUI, React Icons, and React Slider to create a modern and efficient online shopping experience. The application features robust cart management, including "Add to Cart," "Remove from Cart," and "Move to Cart" functionalities, ensuring seamless user interaction. It accurately calculates the total cost with GST, providing transparent pricing for customers. Integration with a third-party API rendered deployment enables real-time product data updates, enhancing the shopping experience. The project utilizes Bootstrap and MUI for responsive and visually appealing design, while React Icons add intuitive and accessible icons throughout the interface. The React Slider component allows for an engaging and interactive product viewing experience. Additionally, the "Quick View" feature provides a snapshot of product details, enabling quick and informed decision-making for users. This project demonstrates effective state management, efficient data handling, and a user-friendly interface, making it ideal for modern e-commerce applications.',
            link: 'https://tejapottery.netlify.app'
        }
    ];

    const topices = [
        {
            sub_head: 'E-Learning (for primary education syllabus)',
            sub_heading1: 'Description',
            sub_Text1: [
                'E learning is an interactive, intelligent and independent way of learning, which makes students to understand and adapt the concepts more easily and in a very Fun way.'
            ],
            sub_heading2: 'Clients',
            sub_Text2: 'SMC Media pvt LTD india, Hyderabad Secondary education syllabus 6th to 10th  classes and primary syllabus 1st to 3rd class Secondary syllabus, Primary syllabus And primary syllabus of gvt project Reliance aims India  Hyderabad Primary syllabus',
            sub_heading3: 'Duration',
            sub_Text3: 'January 2014 – August 2016',
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
            sub_Text1: [
                'Titled as "Kim Pashu Poorva Dehey" this short 34 min animation movie depicts the glorious biography of the great saint in a simple manner and format that could appeal to multiple generations.'
            ],
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
            sub_Text5: 'Created animations for Bio pic of Sri Jayatheertharu And Metro LTD',
            sub_heading6: 'Technology Skills',
            sub_Text6: 'Flash CC',
        },
        {
            sub_head: 'Flash Animation (Freelancing Works)',
            sub_heading1: 'Description',
            sub_Text1: [
                'Jumping kids is a animation kids videos channel. This channel contains all videos related to moral stories, nursery rhymes, animation songs, kid’s night stories, children songs and rhymes. small babies can enjoy the songs along with visualization.'
            ],
            sub_heading2: 'Clients',
            sub_Text2: 'Jumping Kids',
            sub_heading3: 'Duration',
            sub_Text3: 'August 2017 – August 2018',
            sub_heading4: 'Team size',
            sub_Text4: '8',
            sub_heading5: 'Created animations',
            sub_Text5: 'Created animations for rhymes and stories',
            sub_heading6: 'Technology Skills',
            sub_Text6: 'Flash CC',
        },
        {
            sub_head: 'Flash Animation (Youtube stories - (Character Animation))',
            sub_heading1: 'Description',
            sub_Text1: [
                'Hindi story & Day Dream is a animation videos channels. This channel contains all videos related to moral stories and fariy tale stories, fariy tale stories, horror stories and I create background degisns, character design, story for full props I created.'
            ],
            sub_heading2: 'Clients',
            sub_Text2: 'Hindi story, Day Dream',
            sub_heading3: 'Duration',
            sub_Text3: 'August 2018– August 2021',
            sub_heading4: 'Team size',
            sub_Text4: '12',
            sub_heading5: 'Created animations',
            sub_Text5: 'Created animations, Background degisn, character degisn illustrations',
            sub_heading6: 'Technology Skills',
            sub_Text6: 'Flash CC, Illustration, Photoshop',
        },
        {
            sub_head: 'FigmaProjects  (UI Design & Front-end developer)',
            sub_heading1: 'Description',
            sub_Text1: [
                'The UI design project focuses on creating an intuitive and visually appealing user interface for a content-driven website.'
            ],
            subtext1: [
                'The design includes a clean, minimalistic layout with a balanced use of whitespace to enhance readability.',
                'Key features include a responsive grid system for seamless viewing across devices, a sticky navigation bar for easy access to different sections, and well-defined typography to improve content engagement.',
                'Interactive elements such as hover effects and smooth transitions are incorporated to enrich the user experience.',
                'The color palette is thoughtfully chosen to align with the brand’s identity, ensuring consistency and professionalism throughout the site.',
                'The project utilizes industry-standard software such as Adobe XD and Figma for design and prototyping, ensuring precision and collaborative feedback.',
                'Front-end development topics covered include HTML, CSS, JavaScript, and React for building dynamic and interactive components. CSS frameworks like Bootstrap are used for responsive design, while tools like Webpack and Babel streamline the development process.',
                'Version control is managed with Git, enabling efficient collaboration and code management.'
            ],
            sub_heading2: 'Clients',
            sub_Text2: 'shrisansaanimstudio.com, sansaminifood.com, deliciou.sfoody.com, webseriesurl.com, techinfoadvice.com',
            sub_heading3: 'Duration',
            sub_Text3: 'Sep 2021– August 2023',
            sub_heading4: 'Team size',
            sub_Text4: '6',
            sub_heading5: 'Created animations',
            sub_Text5: 'Created Web design (UI design & Front-end developer)',
            sub_heading6: 'Technology Skills',
            sub_Text6: 'Adobe XD, Figma, Html&Css, Javascript, bootstrap, photoshop, react',
        },
        {
            sub_head: 'sansaminifood.com (UI Design & Front-end developer)',
            sub_heading1: 'Description',
            sub_Text1: [
                'SansaminiFood is a web application designed to make browsing, selecting, and purchasing food items easy and efficient. The project integrates detailed food descriptions, real-time cart updates, and delivery location management, all designed using Figma for a visually appealing interface.'
            ],
            heading: [
                'Food Items Display',
                'Detailed Descriptions',
                'Real-Time Cart Management',
                'API Integration'
            ],
            subtext1: [
                'The app displays a variety of food items with high-quality images, detailed descriptions, and clear pricing, making it easy for users to browse and select items.',
                'Each food item includes a detailed description, covering ingredients, nutritional information, and preparation methods, helping users make informed decisions.',
                'Users can add items to their cart with a single click, adjust quantities, and remove items. The cart updates in real-time, providing an accurate total cost.',
                'The application uses APIs to fetch food item details, manage cart contents, and handle user locations, ensuring the data is always up-to-date and responsive.'
            ],
            sub_heading2: 'Clients',
            sub_Text2: 'sansaminifood.com',
            sub_heading3: 'Duration',
            sub_Text3: '9 months',
            sub_heading4: 'Team size',
            sub_Text4: '6',
            sub_heading5: 'Created animations',
            sub_Text5: 'Created Web design (UI design & Front-end developer)',
            sub_heading6: 'Technology Skills',
            sub_Text6: 'Built with React.js, using Context API and reducers for state management.  Styled with CSS and Bootstrap for a clean, responsive design.',
        },
        {
            sub_head: 'deliciou.sfoody.com (UI Design & Front-end developer)',
            sub_heading1: 'Description',
            sub_Text1: [
                'DeliciousFoody is a web application designed to simplify the browsing, selection, and purchasing of food items'
            ],
            
            subtext1: [
                'Showcases a variety of food items with high-quality images, detailed descriptions, and clear pricing information.',
                'Each food item includes comprehensive details on ingredients, nutritional information, and preparation methods.',
                'Users can easily add items to their cart, with real-time updates on total costs as items are added or removed.',
                'Allows users to review selected items, adjust quantities, and remove items as needed.',
                'Users can input their delivery location to ensure accurate and convenient order delivery.',
                'Features a hand-draggable navigation bar for easy access to different sections of the website.',
                'Utilizes APIs to dynamically fetch food item details, manage cart contents, and handle user locations, ensuring up-to-date and responsive data management.',
                'DeliciousFoody combines detailed food item presentations with robust cart and location management features, supported by dynamic API integrations and a user-friendly, hand-draggable navbar for an efficient online food shopping experience.'
            ],
            sub_heading2: 'Clients',
            sub_Text2: 'deliciou.sfoody.com',
            sub_heading3: 'Duration',
            sub_Text3: '7 months',
            sub_heading4: 'Team size',
            sub_Text4: '8',
            sub_heading5: 'Created animations',
            sub_Text5: 'Created Web design (UI design & Front-end developer)',
            sub_heading6: 'Technology Skills',
            sub_Text6: 'Adobe XD, Figma, Built with React.js, using Context API and reducers for state management. Styled with CSS and Bootstrap for a clean, responsive design.',
        },
        {
            sub_head: 'webseriesurl.com (UI Design & Front-end developer)',
            sub_heading1: 'Description',
            sub_Text1: [
                'TechInfoAdive is a comprehensive web application designed to provide users with detailed information about various tech items. The project focuses on creating a multipurpose, responsive company website that integrates seamlessly with APIs for dynamic content management.'
            ],

            subtext1: [
                'The application showcases a wide range of tech items, each presented with high-quality images, detailed descriptions, and specifications.',
                'Each tech item includes a thorough explanation, covering key features, specifications, and usage scenarios, helping users make informed decisions.',
                'The company website is designed to be multipurpose and fully responsive, ensuring an optimal viewing experience across all devices, including desktops, tablets, and smartphones.',
                'TechInfoAdive uses APIs to dynamically fetch tech item details, ensuring that the content is always up-to-date and relevant.',
                'TechInfoAdive combines detailed tech item information with a responsive and multipurpose website design, supported by dynamic API integrations for a user-friendly and efficient browsing experience.'
            ],
            sub_heading2: 'Clients',
            sub_Text2: 'webseriesurl.com',
            sub_heading3: 'Duration',
            sub_Text3: '8 months',
            sub_heading4: 'Team size',
            sub_Text4: '6',
            sub_heading5: 'Created animations',
            sub_Text5: 'Created Web design (UI design & Front-end developer)',
            sub_heading6: 'Technology Skills',
            sub_Text6: 'Adobe XD, Figma, Html&Css, Javascript, bootstrap, photoshop, react',
        },
        {
            sub_head: 'techinfoadvice.com (UI Design & Front-end developer)',
            sub_heading1: 'Description',
            sub_Text1: [
                'WebSeriesURL is a dynamic web application designed to provide users with comprehensive information about movies and web series. The project focuses on creating an entertainment website with a multipurpose, responsive design that integrates seamlessly with APIs for dynamic content management.'
            ],
            subtext1: [
                'The application showcases a wide range of movies and web series, each presented with high-quality images, detailed descriptions, and relevant information.',
                'Each movie and web series includes a thorough explanation, covering key details, plot summaries, cast information, and reviews, helping users make informed viewing choices.',
                'The entertainment website is designed to be multipurpose and fully responsive, ensuring an optimal viewing experience across all devices, including desktops, tablets, and smartphones.',
                'WebSeriesURL uses APIs to dynamically fetch details of movies and web series, ensuring that the content is always up-to-date and relevant.',
                'WebSeriesURL combines detailed information on movies and web series with a responsive and multipurpose website design, supported by dynamic API integrations for a user-friendly and efficient browsing experience.'
            ],
            sub_heading2: 'Clients',
            sub_Text2: 'techinfoadvice.com',
            sub_heading3: 'Duration',
            sub_Text3: '8 months',
            sub_heading4: 'Team size',
            sub_Text4: '6',
            sub_heading5: 'Created animations',
            sub_Text5: 'Created Web design (UI design & Front-end developer)',
            sub_heading6: 'Technology Skills',
            sub_Text6: 'Adobe XD, Figma, Html&Css, Javascript, bootstrap, photoshop, react',
        }
    ];

    const personal = [
        {
            tittle: 'Address for Correspondence',
            text: [
                'Comfort Avenue ',
                'Bandari Layout ',
                'Nizampet Village ',
                'Hyderabad - 500090 ',
                'Telengana.'
            ],
        },
        {
            tittle: 'Contact No',
            text: 'Mobile: +91 6305191836'
        },
        {
            tittle: 'E-mail address',
            text: 'tejaveera19@gmail.com'
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
    ];

    return (
        <section className="resume container">
            <div className="resu_part">
                {tittle.map((item, index) => (
                    <div key={index} className="re-inside">
                        <p>{item.num}</p>
                        <p>{item.head}</p>
                    </div>
                ))}
            </div>

            <div className="resu_sum">
                <div className="resu_Box">
                    <div className="box_heading">
                        {data.map((item, index) => (
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
                        ))}
                    </div>
                </div>
            </div>

            <div className="resume_topices">
                <div className="project">
                    <h2>Professional Experience</h2>
                    {Professional.map((item, index) => (
                        <div key={index} className="project_Text">
                            <h3>{item.tittle}</h3>
                            <div className="project_topices">
                                <div className="project_sub project_subs">
                                    <p className='w-100'>{item.desc}</p>
                                    <p className='link'>
                                        <Link to={item.link} target="_blank" rel="noopener noreferrer" className='ankorlink'>View Link : <a className='itemLink'>{item.link}</a></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="resume_topices">
                <div className="project">
                    <h2>Previous Experience</h2>
                    {topices.map((item, index) => (
                        <div key={index} className="project_Text">
                            <h3>{item.sub_head}</h3>
                            <div className="project_topices">
                                <div className="project_sub">
                                    <h4>{item.sub_heading1}</h4>
                                    <h6>:</h6>
                                    <p className='project_desc'>
                                        <ul>
                                            {item.sub_Text1.map((text, idx) => (
                                                <li key={idx}>
                                                    {text.includes(':') ? (
                                                        <>
                                                            <span className="highlight">
                                                                {text.split(':')[0]}
                                                            </span>
                                                            {text.split(':')[1]}
                                                        </>
                                                    ) : (
                                                        text
                                                    )}
                                                </li>
                                            ))}
                                            {item.heading && item.subtext1 ? (
                                                <div className="project_sub1">
                                                    {item.heading.map((heading, idx) => (
                                                        <div key={idx} className="subsection">
                                                            <div className="head">
                                                                <img src="https://cdn-icons-png.freepik.com/256/9282/9282680.png?ga=GA1.1.940814093.1720107970" alt="" width={20} />
                                                                <span className="highlight">{heading} :</span>
                                                            </div>
                                                            <p>{item.subtext1[idx]}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="project_sub">
                                                    <h4 className="sub_heading"> </h4>
                                                    <ul>
                                                        {item.subtext1 && item.subtext1.map((text, idx) => (

                                                            <li key={idx}>
                                                                <img src="https://cdn-icons-png.freepik.com/256/9282/9282680.png?ga=GA1.1.940814093.1720107970" alt="" width={20} />
                                                                <p>{text}</p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                        </ul>
                                    </p>
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
                    ))}
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
    );
};

export default ResumeComp;
