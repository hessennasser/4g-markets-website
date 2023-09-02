import { useTranslation } from "react-i18next"
import img from "../assets/contact.svg"
const Contact = () => {
    const { i18n } = useTranslation();
    return (
        <section className='start contact container py-10'>
            <div className="content">
                <img src={img} alt="future techno" />
                <div>
                    <h2>{i18n.language === "en" ? "Contact US" : "تواصل معنا"}</h2>
                    <form >
                        <input required type="text" placeholder={i18n.language === "en" ? "Name" : "الأسم"} name="name" id="name" />
                        <input required type="email" name="email" id="email" placeholder={i18n.language === "en" ? "Email" : "البريد الالكتروني"} />
                        <input required type="tel" name="phone" id="phone" placeholder={i18n.language === "en" ? "Your Phone" : "رقم الجوال"} />
                        <input required type="text" name="title" id="title" placeholder={i18n.language === "en" ? "Title Message" : "عنوان الرساله"} />
                        <textarea required name="message" placeholder={i18n.language === "en" ? "Your Message" : "ادخل رسالتك"} id="message"></textarea>
                        <button type="submit">
                            {i18n.language === "en" ? "send" : "إرسال"}
                        </button>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Contact
