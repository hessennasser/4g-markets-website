import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <ul className="side-bar">
            <li>
                <NavLink activeClassName="active" to="/dashboard/">Supplier Info</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/dashboard/add-product">Add Product</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/dashboard/order-page">Order Page</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/dashboard/initial-binding">Initial Binding</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/dashboard/binding-store">Binding Store</NavLink>
            </li>
        </ul>
    )
}

export default Navbar
