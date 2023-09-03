import { useTranslation } from "react-i18next"
import logo from "../assets/logo.png"
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [activeNav, setActiveNav] = useState(false);

    const { i18n, t } = useTranslation();
    const pages = t('pagesLinks');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("language", lng);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, []);

    return (
        <header>
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logo} alt="4G Markets" />
                </Link>
                <div className={`menu-icon ${activeNav ? "active" : ""}`} dir="rtl" onClick={() => setActiveNav(!activeNav)}>
                    <span style={{ width: "35%" }}></span>
                    <span style={{ width: "70%" }}></span>
                    <span style={{ width: "100%" }}></span>
                </div>
                <nav>
                    <ul className={`nav ${activeNav ? "active" : ""}`}>
                        {
                            pages.map(item => {
                                return (
                                    <li className="nav-item" key={item.id}>
                                        <NavLink to={item.href} className={`nav-link`} activeClassName="active" onClick={() => setActiveNav(false)}>
                                            {item.name}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    <ul className="actions">
                        <li className="nav-item">
                            <NavLink to="/sign-up" className={`nav-link`} activeClassName="active" onClick={() => setActiveNav(false)}>{i18n.language === "en" ? "Sign Up" : "تسجيل جديد"}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className={`nav-link`} activeClassName="active" onClick={() => setActiveNav(false)}>{i18n.language === "en" ? "Log In" : "تسجيل دخول"}</NavLink>
                        </li>
                    </ul>
                    </ul>
                </nav>

                <button onClick={() => {
                    i18n.language === "en" ? changeLanguage("ar") : changeLanguage("en");
                }}>
                    {i18n.language === "en" ? "عربي" : "English"}
                </button>
            </div>
        </header>
    )
}

export default Header
