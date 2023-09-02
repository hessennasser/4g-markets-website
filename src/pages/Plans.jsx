import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
const Plans = () => {
    const { i18n } = useTranslation();

    return (
        <section className="start pricing">
            <div className="container">
                <div className="box">
                    <div className="title">Starter</div>
                    <i className="fa-solid fa-star"></i>
                    <div className="price">
                        <span className="amount">$0</span>
                        <span className="time">Per Month</span>
                    </div>
                    <ul>
                        <li>10GB HDD Space</li>
                        <li>5 Email Addresses</li>
                        <li>2 Subdomains</li>
                        <li>4 Databases</li>
                        <li>Basic Support</li>
                    </ul>
                    <Link to="/contact-us">Choose Plan</Link>
                </div>
                <div className="box popular">
                    <div className="label">Most Popular</div>
                    <div className="title">Joined</div>
                    <i className="fa-solid fa-ranking-star"></i>
                    <div className="price">
                        <span className="amount">$29</span>
                        <span className="time">Per Month</span>
                    </div>
                    <ul>
                        <li>20GB HDD Space</li>
                        <li>10 Email Addresses</li>
                        <li>5 Subdomains</li>
                        <li>8 Databases</li>
                        <li>Advanced Support</li>
                    </ul>
                    <Link to="/contact-us">Choose Plan</Link>
                </div>
                <div className="box">
                    <div className="title">Partner</div>
                    <i className="fa-solid fa-medal"></i>
                    <div className="price">
                        <span className="amount">$1,000</span>
                        <span className="time">Per Month</span>
                    </div>
                    <ul>
                        <li>50GB HDD Space</li>
                        <li>20 Email Addresses</li>
                        <li>10 Subdomains</li>
                        <li>20 Databases</li>
                        <li>Professional Support</li>
                    </ul>
                    <Link to="/contact-us">Choose Plan</Link>
                </div>
            </div>
        </section>
    )
}

export default Plans
