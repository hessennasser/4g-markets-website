import { useTranslation } from "react-i18next"
import img from "../assets/testimonials/Image.png"
import img1 from "../assets/testimonials/Image-1.png"
import img2 from "../assets/testimonials/Image-2.png"
import img3 from "../assets/testimonials/Image-3.png"
import majedImg from "../assets/Majed Eid PNG 1.png"
const Home = () => {
    const { i18n, t } = useTranslation();
    const advantage = t('advantages');
    return (
        <>
            <section className="home">
                <div className="container">
                    <div className="welcome-text">
                        <h1>
                            <span className="animation-text">
                                {
                                    i18n.language === "en" ?
                                    "4G MARKETS SYSTEM IS A NEW REVOLUTION IN THE WORLD OF WHOLESALE AND RETAIL"
                                    : 
                                    "نظام 4G MARKETS ثورة جديدة في عالم الجملة والتجزئة"
                                }
                            </span> <br />
                        </h1>
                    </div>
                    <div className="wrapper">
                        <section className="who-are-we">
                            <div className="main-title">
                                <h2>4G Markets</h2>
                            </div>
                            <p>
                                {
                                    i18n.language === "en" ?
                                        "An interface bridging suppliers and grocery store proprietors,revolutionizing trade of goods and optimizing inventory management for superior retail operations"
                                        :
                                        "واجهة تربط بين الموردين وأصحاب متاجر البقالة، تحدث ثورة في تجارة البضائع وتحسين إدارة المخزون لتحقيق عمليات بيع تجزئة متميزة."
                                }
                            </p>
                        </section>
                        <section className="advantages">
                            <div className="main-title">
                                <h2>{i18n.language === "en" ? "Our Advantages" : "مميزاتنا"}</h2>
                            </div>
                            <div className="content">
                                {
                                    advantage.map(item => {
                                        return (
                                            <div key={item.id} className="box">
                                                <h2>{item.title}</h2>
                                                <p>{item.description}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    </div>
                </div>
            </section>
            <section className="about-us">
                <div className="container">
                    <div className="main-title">
                        <h2 style={{ color: "var(--mainColor)", marginBottom: "2rem" }}>
                            {i18n.language === "en" ? "About System" : "عن النظام"}
                        </h2>
                    </div>
                    <div className="box">
                        <p>
                            {
                                i18n.language === "en" ?
                                    "An interface bridging suppliers and grocery store proprietors with consumer , revolutionizing trade of goods and optimizing inventory management for superior retail operations"
                                    :
                                    "واجهة تربط بين الموردين وأصحاب متاجر البقالة مع المستهلكين تحدث ثورة في تجارة البضائع وتحسين إدارة المخزون لتحقيق عمليات بيع تجزئة متميزة."
                            }
                        </p>
                        <img src={majedImg} alt="" />
                        <h3>MAJEDEID ALOTAIBI</h3>
                        <span className="title">System owner</span>
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <div className="container main-title">
                    <h2 style={{ color: "var(--mainColor)", marginBottom: "2rem" }}>
                        {i18n.language === "en" ? "testimonials" : "آراء عملائنا"}
                    </h2>
                </div>
                <div className="container">
                    <div className="content">
                        <div className="box">
                            <img src={img} alt="" />
                            <h3>Turki Yassin</h3>
                            <span className="title">merchandise dealer</span>
                            <div className="rate">
                                <p>Using the platform significantly improved our store s stock availability. It s been a game changer for our grocery business.</p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={img1} alt="" />
                            <h3>Ahmed Souliman</h3>
                            <span className="title">Supermarket owner</span>
                            <div className="rate">
                                <p>I love how easy it is to
                                    communicate with suppliers.
                                    The website has streamlined
                                    our ordering process and
                                    saved us so much time.</p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={img2} alt="" />
                            <h3>Roof Ahmed</h3>
                            <span className="title">merchandise dealer</span>
                            <div className="rate">
                                <p>Costs have dropped since we
                                    started using this site. The
                                    direct connection to suppliers
                                    is invaluable for our profits.</p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={img3} alt="" />
                            <h3>Siraj Hani</h3>
                            <span className="title">Supermarket owner</span>
                            <div className="rate">
                                <p>Inventory management used
                                    to be a headache, but this
                                    platform has transformed how
                                    we handle our stock. It s
                                    efficient and reliable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
