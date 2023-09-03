import { useTranslation } from "react-i18next"

const SystemIdea = () => {
    const { t, i18n } = useTranslation();
    const features = t("features");
    const implementation = t("implementation");
    return (
        <section className="start container system-idea">
            <div className="main-title">
                <h2 style={{ color: "var(--mainColor)" }}>{i18n.language === "en" ? "System Idea" : "فكرة النظام"}</h2>
            </div>
            <div className="content">
                <p className="text">
                    {
                        i18n.language === "en" ?
                            "The project involves creating an online platform that acts as a marketplace that connects suppliers of goods with grocery store owners and consumers. The platform will facilitate the seamless exchange of products in large quantities, providing convenience and efficiency for both suppliers and merchants."
                            :
                            "يتضمن المشروع إنشاء منصة عبر الإنترنت تعمل كسوق يربط موردي السلع بأصحاب متاجر البقالة والمستهلكين. وستعمل المنصة على تسهيل التبادل السلس للمنتجات بكميات كبيرة، مما يوفر الراحة والكفاءة لكل من الموردين والتجار."
                    }
                </p>
                <video controls className="video" src="https://www.w3schools.com/css/mov_bbb.mp4"></video>
            </div>
            <div className="features">
                <h1 className="header">{i18n.language === "en" ? "Key Features and Functionalities" : "الميزات والوظائف الرئيسية"}</h1>
                <div className="content">
                    {features.map(feature => (
                        <div className="feature" key={feature.id}>
                            <h2>{feature.title}</h2>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="features">
                <h1 className="header">{i18n.language === "en" ? "Implementation Steps" : "خطوات التنفيذ"}</h1>
                <div className="content">
                    {implementation.map(feature => (
                        <div className="feature" key={feature.id}>
                            <h2>{feature.title}</h2>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default SystemIdea
