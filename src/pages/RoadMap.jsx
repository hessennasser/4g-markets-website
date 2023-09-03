import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaClipboard, FaCode, FaPaperPlane } from 'react-icons/fa';
import { BsFillPencilFill } from "react-icons/bs"
import { AiOutlineCheck } from "react-icons/ai"

const RoadMap = () => {
    const { t } = useTranslation();
    const roadMap = t("roadMap");
    const iconMap = {
        "FaClipboard": <FaClipboard />,
        "BsFillPencilFill": <BsFillPencilFill />,
        "FaCode": <FaCode />,
        "AiOutlineCheck": <AiOutlineCheck />,
        "FaPaperPlane": <FaPaperPlane />,
    };
    
    return (
        <section className="start container" dir='ltr'>
            <div className="main-title">
                <h2 style={{ color: "var(--mainColor)" }}>Road Map</h2>
            </div>
            <VerticalTimeline>
                {roadMap.map(item => (
                    <VerticalTimelineElement
                        key={item.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'var(--main-color)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  var(--main-color)' }}
                        date={item.date}
                        iconStyle={{ background: 'var(--second-color)', color: '#fff' }}
                        icon={iconMap[item.icon]}
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
