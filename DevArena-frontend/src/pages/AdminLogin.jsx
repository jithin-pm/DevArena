import React, { useState } from 'react'
import '../styles/adminLogin.css'
import { adminLoginApi } from '../services/allApi';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [adminLoginData, setAdminLoginData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const adminLogin = async (e) => {
        e.preventDefault();
        const { email, password } = adminLoginData;
        if (!email || !password) {
            alert("Please fill the form completely")
        }
        else {
            try {
                const result = await adminLoginApi(adminLoginData);
                console.log(result);
                if (result.status === 200) {
                    sessionStorage.setItem("token", result.data);
                    setAdminLoginData({ email: "", password: "" });
                    navigate("/admin-dashboard")
                    alert("Welcome back, Admin! You've successfully logged in.");
                } else if (result.status === 401) {
                    alert("Invalid email or password. Please try again.");
                }
            } catch (error) {
                alert("An error occurred during login.");
                console.error(error);
            }
        }

    }

    return (
        <div className='adminLogin-main' >
            <div className="adminLogin-headings">
                <h1>Take Charge! Admin Login Here</h1>
            </div>

            <div className='login-card-section'>
                <h2>Admin Login</h2>
                <form className='login-form'>
                    <input
                        className='login-form-inputs'
                        type="text"
                        placeholder='Email'
                        value={adminLoginData.email}
                        onChange={(e) => setAdminLoginData({ ...adminLoginData, email: e.target.value })}
                    />
                    <input
                        className='login-form-inputs'
                        type="text"
                        placeholder='Password'
                        value={adminLoginData.password}
                        onChange={(e) => setAdminLoginData({ ...adminLoginData, password: e.target.value })}
                    />
                    <div className='login-btn' onClick={adminLogin} >
                        Login
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin
