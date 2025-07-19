import React, { useState } from 'react'
import '../styles/header.css'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    const token = sessionStorage.getItem("token");

    const navigate = useNavigate()
    const handleLogout = (e) => {
        e.preventDefault();
        const confirmed = window.confirm("Do you want to exit the admin panel??");
        if (!confirmed) return;
        sessionStorage.removeItem("token")
        navigate("/")
    }

    return (
        <div className='header' style={{ position: "fixed", zIndex: "1000" }} >
            <div className='header-icon' >
                <i className="fa-brands fa-connectdevelop fa-2xl" style={{ color: "#ffffff" }}></i>
                <div className='header-text' >
                    <h2>DevArena</h2>
                </div>
            </div>
            <div className="hamburger" onClick={toggleSidebar}>
                {showSidebar ? (
                    <i className="fa-solid fa-xmark fa-xl"></i>
                ) : (
                    <i className="fa-solid fa-bars fa-xl"></i>
                )}
            </div>
            <div className={`header-links ${showSidebar ? 'show' : ''}`} >
                <Link to="/" style={{ textDecoration: "none" }} ><h3>Home</h3></Link>
                <Link to="/courses" style={{ textDecoration: "none" }} ><h3>Courses</h3></Link>
                <Link to="/aboutUs" style={{ textDecoration: "none" }} ><h3>About Us</h3></Link>
                <Link to="/registration" style={{ textDecoration: "none" }} ><h3>Registration</h3></Link>
                <Link to="/contact" style={{ textDecoration: "none" }}><h3>Contact</h3></Link>
                {
                    token && <Link to="/admin-dashboard" style={{ textDecoration: "none" }}><h3>Dashboard</h3></Link>
                }

                {
                    token ?
                        <h3 onClick={handleLogout} >Logout</h3>
                        :
                        <Link to="/admin-login" style={{ textDecoration: "none" }} ><h3>Admin Login</h3></Link>
                }


            </div>

        </div>
    )
}

export default Header
