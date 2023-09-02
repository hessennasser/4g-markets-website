import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
    const { i18n, t } = useTranslation();
    const pages = t('pagesLinks');

    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <img src={logo} alt="4G Markets" />
                        </a>
                        <p className="footer-text">
                            {
                                i18n.language === "en" ?
                                    "An interface bridging suppliers and grocery store proprietors,revolutionizing trade of goods and optimizing inventory management for superior retail operations"
                                    :
                                    "واجهة تربط بين الموردين وأصحاب متاجر البقالة، تحدث ثورة في تجارة البضائع وتحسين إدارة المخزون لتحقيق عمليات بيع تجزئة متميزة."
                            }
                        </p>
                        <ul className="social-list">
                            <li>
                                <a href="" target="_blank" className="social-link">
                                    <i className="fa-solid fa-globe"></i>
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank" className="social-link">
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank"
                                    className="social-link">
                                    <i className="fa-brands fa-tiktok"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-link-box">
                        <ul className="footer-list">
                            <li>
                                <p className="footer-item-title">{i18n.language === "en" ? "Website Links" : "صفحات الموقع"}</p>
                            </li>
                            {
                                pages.map(item => {
                                    return (
                                        <li key={item.id}>
                                            <Link to={item.href}
                                                target="_blank" className="footer-link">{item.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="footer-list">
                            <li>
                                <p className="footer-item-title">{i18n.language === "en" ? "Important Links" : "روابط هامه"}</p>
                            </li>
                            <li>
                                <Link to="/terms" className="footer-link">{i18n.language === "en" ? "Terms & Conditions" : "البنود والشروط"}</Link>
                            </li>
                            <li>
                                <Link to="/terms" className="footer-link">{i18n.language === "en" ? "privacy policy" : "سياسة الخصوصية"}</Link>
                            </li>
                        </ul>
                        <ul className="footer-list" id="contact">
                            <li>
                                <p className="footer-item-title">{i18n.language === "en" ? "Contact US" : "تواصل معنا"}</p>
                            </li>
                            <a href="mailto:majedeidg@gmail.com" className="footer-link"><i
                                className="fa-brands fa-tiktok"></i>Email</a>
                            <a href="tel:+966592824082" className="footer-link"><i
                                className="fa-brands fa-whatsapp"></i>Phone</a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright" dir="rtl">
                        {i18n.language === "en" ? "all rights are save" : "جميع الحقوق محفوظة"} 4G Markets {new Date().getFullYear()}<a
                            href="https://sm8rtdev.online/" style={{ color: "var(--main-color)", marginTop: "6px", display: "block" }}>{i18n.language === "en" ? "Implemented by" : "تم التنفيذ بواسطة "} {"smart dev"}</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
