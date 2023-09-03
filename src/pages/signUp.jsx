// RegistrationForm.js

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
    const { i18n } = useTranslation();
    const [formData, setFormData] = useState({
        category: 'supplier', // Default to 'supplier'
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        address: '',
        goodsType: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Password and Confirm Password must match.');
            return;
        }
        // Handle form submission logic here
    };

    return (
        <section className="start auth">
            <div className="form">
                <h2>{i18n.language === "en" ? "Register" : "سجل معنا"}</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-row'>
                        <label>User Category:</label>
                        <select name="category" onChange={handleChange} value={formData.category}>
                            <option value="supplier">Supplier</option>
                            <option value="shopOwner">Shop Owner</option>
                        </select>
                    </div>
                    <div className='form-row'>
                        <label>Full Name:</label>
                        <input type="text" name="fullName" onChange={handleChange} value={formData.fullName} />
                    </div>
                    <div className='form-row'>
                        <label>Company / Shop Name:</label>
                        <input type="text" name="companyName" onChange={handleChange} value={formData.companyName} />
                    </div>
                    <div className='form-row'>
                        <label>Email Address:</label>
                        <input type="email" name="email" onChange={handleChange} value={formData.email} />
                    </div>
                    <div className='form-row'>
                        <label>Phone Number:</label>
                        <input type="tel" name="phone" onChange={handleChange} value={formData.phone} />
                    </div>
                    <div className='form-row'>
                        <label>Company / Shop Address:</label>
                        <input type="text" name="address" onChange={handleChange} value={formData.address} />
                    </div>
                    <div className='form-row'>
                        <label>Type of Goods:</label>
                        <input type="text" name="goodsType" onChange={handleChange} value={formData.goodsType} />
                    </div>
                    <div className='form-row'>
                        <label>Password:</label>
                        <input type="password" name="password" onChange={handleChange} value={formData.password} />
                    </div>
                    <div className='form-row'>
                        <label>Password Confirmation:</label>
                        <input type="password" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </section>
    );
};

export default SignUp;
