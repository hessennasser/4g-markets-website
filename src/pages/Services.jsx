import { useTranslation } from "react-i18next"

const Services = () => {

    const { t, i18n } = useTranslation();
    const services = t("services")

    return (
        <section className="start services">
            <div className="container">
                <div className="main-title">
                    <h2 style={{ color: "var(--mainColor)", marginBottom: "2rem" }}>
                        {i18n.language === "en" ? "Services provided by Markets" : "الخدمات التي  نقدمها"}
                    </h2>
                </div>
                <div className="content">
                    {
                        services.map(item => {
                            return (
                                <div key={item.id} className="box">
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services
