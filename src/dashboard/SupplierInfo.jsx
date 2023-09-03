import { useState } from 'react'

const SupplierInfo = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        registrationNo: '',
        responsiblePerson: '',
        cellPhone: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform actions with the form data here
        console.log(formData);
    };

    return (
        <div className="form">
            <h2>Company Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="registrationNo">Commercial Registration No</label>
                    <input
                        type="text"
                        id="registrationNo"
                        name="registrationNo"
                        value={formData.registrationNo}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="responsiblePerson">Responsible Person</label>
                    <input
                        type="text"
                        id="responsiblePerson"
                        name="responsiblePerson"
                        value={formData.responsiblePerson}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cellPhone">Cell Phone</label>
                    <input
                        type="tel"
                        id="cellPhone"
                        name="cellPhone"
                        value={formData.cellPhone}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="logoImage">Logo Image</label>
                    <input type="file" id="logoImage" name="logoImage" accept="image/*" />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SupplierInfo
