import Navbar from "./components/Navbar"
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <section className='dashboard start'>
            <div className="container">
                <Navbar />
                <div className='dashboard-page'>
                    <Outlet />
                </div>  
            </div>
        </section>
    )
}

export default SharedLayout
