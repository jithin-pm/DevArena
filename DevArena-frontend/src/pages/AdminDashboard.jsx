import React, { useEffect, useState } from 'react'
import '../styles/adminDashboard.css'
import { deleteRegisteredStudentsApi, fetchRegisteredStudentsApi } from '../services/allApi';

function AdminDashboard() {
    const [registeredStudents, setRegisteredStudents] = useState([])

    const fetchRegisteredStudents = async () => {
        try {
            const result = await fetchRegisteredStudentsApi();
            setRegisteredStudents(result.data);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteStudent = async (studentId) => {
        const confirmed = window.confirm("Are you sure you want to delete this student?");
        if (!confirmed) return;
        console.log("student id:::", studentId);
        try {
            const result = await deleteRegisteredStudentsApi(studentId);
            if (result.status === 200) {
                fetchRegisteredStudents();
                alert("Student deleted successfully");  
            } else {
                alert("Deletion failed. Please try again.");
            }
        } catch (error) {
            alert("Something went wrong. Please try again later.");
            console.error("Deletion error:", error);
        }
    };


    useEffect(() => {
        fetchRegisteredStudents();
    }, [])

    return (
        <div className='abminDashboard-main' >
            <div className="adminDashboard-text">
                <h1>Admin Dashboard</h1>
            </div>
            <div>
                <h2>Registered students</h2>
                <table className="registration-table">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Course</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {registeredStudents.length === 0 ? (
                        <p style={{ textAlign: "center", marginTop: "20px" }}>No students have registered yet.</p>
                    ) : (
                        <tbody>
                            {registeredStudents.length > 0 ? (
                                registeredStudents.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.phoneNumber}</td>
                                        <td>{student.course}</td>
                                        <td>{student.message}</td>
                                        <td className="action-cell">
                                            <button className="delete-btn" onClick={() => deleteStudent(student._id)}>
                                                <i className="fa-solid fa-trash" style={{ color: "#ff0000" }}></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: "center" }}>No students found</td>
                                </tr>
                            )}
                        </tbody>
                    )}

                </table>

            </div>

        </div>
    )
}

export default AdminDashboard
