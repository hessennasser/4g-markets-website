import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Login() {
    const { i18n } = useTranslation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
    };

    return (
        <section className="start auth">
            <div className="form">
                <h2>{i18n.language === "en" ? "Login" : "تسجيل الدخول"}</h2>
                <form>
                    <div className="form-row">
                        <label>{i18n.language === "en" ? "Username" : "اسم المستخدم"}</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                    </div>
                    <div className="form-row">
                        <label>{i18n.language === "en" ? "Password" : "كلمة المرور"}</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to="/dashboard/" >Login</Link>
                </form>
            </div>
        </section>
    );
}

export default Login;
