import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaClipboard, FaCode, FaPaperPlane } from 'react-icons/fa'; // Import icons from react-icons
import { BsFillPencilFill } from "react-icons/bs"
import { AiOutlineCheck } from "react-icons/ai"

const RoadMap = () => {
    const data = [
        {
            "id": 1,
            "title": "Planning and Analysis",
            "date": "01/12/2023",
            "steps": [
                "Define the website's goal and offered services.",
                "Study user needs and market demands.",
                "Identify key features the website will include."
            ],
            "icon": <FaClipboard />
        },
        {
            "id": 2,
            "title": "Design and User Interface",
            "date": "01/03/2024",
            "steps": [
                "Design a user-friendly and simple interface.",
                "Determine the optimal user experience for interacting with the site."
            ],
            "icon": <BsFillPencilFill />
        },
        {
            "id": 3,
            "title": "Development and Building",
            "date": "01/07/2024",
            "steps": [
                "Build the website using appropriate technologies.",
                "Develop order management, inventory, and reporting systems."
            ],
            "icon": <FaCode />
        },
        {
            "id": 4,
            "title": "Testing and Improvement",
            "date": "01/04/2025",
            "steps": [
                "Thoroughly test the site to ensure proper functionality.",
                "Address any errors and make improvements based on testing feedback."
            ],
            "icon": <AiOutlineCheck />
        },
        {
            "id": 5,
            "title": "Launch and Marketing",
            "date": "01/08/2025",
            "steps": [
                "Deploy the website online.",
                "Market the website to attract goods suppliers and grocery store owners."
            ],
            "icon": <FaPaperPlane />
        }
    ];

    return (
        <section className="start container" dir='ltr'>
            <div className="main-title">
                <h2 style={{ color: "var(--mainColor)" }}>Road Map</h2>
            </div>
            <VerticalTimeline>
                {data.map(item => (
                    <VerticalTimelineElement
                        key={item.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'var(--main-color)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  var(--main-color)' }}
                        date={item.date}
                        iconStyle={{ background: 'var(--second-color)', color: '#fff' }}
                        icon={item.icon}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <ul>
                            {item.steps.map((step, index) => (
                                <li key={index} style={{ marginBlock: "0.5rem" }}>{step}</li>
                            ))}
                        </ul>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default RoadMap;
