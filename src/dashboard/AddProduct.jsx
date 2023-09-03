import { useState } from 'react'

const AddProduct = () => {
    const [formData, setFormData] = useState({
        productName: '',
        ProductNumber: '',
        specifications: '',
        price: '',
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
            <h2>product Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="ProductNumber">Product Number</label>
                    <input
                        type="number"
                        id="ProductNumber"
                        name="ProductNumber"
                        value={formData.ProductNumber}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="specifications">Specifications</label>
                    <input
                        type="text"
                        id="specifications"
                        name="specifications"
                        value={formData.specifications}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="productImage">Product Image</label>
                    <input type="file" id="productImage" name="productImage" accept="image/*" />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddProduct
