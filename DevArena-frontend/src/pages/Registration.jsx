import React, { useState } from 'react'
import '../styles/registration.css'
import { studentRegistrationApi } from '../services/allApi';

function Registration() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    course: '',
    message: ''
  });

  const validate = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      errors.email = 'Enter a valid email';
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    }
    if (!formData.course) {
      errors.course = 'Please select a course';
    }

    return errors;
  };

  // student registration
  const studentRegistration = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("form Data", formData);

      try {
        const result = await studentRegistrationApi(formData);
        if (result.status === 200) {
          alert("Registration successfull")
          setFormData({ name: "", email: "", phoneNumber: "", course: "", message: "" });
        } else {
          alert("Registration failed. Please try again.");
        }
      } catch (error) {
        alert("Something went wrong. Please try again later.");
        console.error(error);
      }
    }

  }

  return (
    <div className='registration-main'>
      <div className='registration-text'>
        <h1>Game On! Complete Your Registration Today</h1>
      </div>
      <div className='registration-section'>
        <h2>Course Registration</h2>
        <form className='registration-form'>
          <input
            className='registration-form-inputs'
            type="text"
            placeholder='Full Name'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

          <input
            className='registration-form-inputs'
            type="text"
            placeholder='Email'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

          <input
            className='registration-form-inputs'
            type="text"
            placeholder='Phone Number'
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          />
          {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber}</span>}

          <select
            className='registration-form-inputs'
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
          >
            <option value="">Select a course</option>
            <option value="Unity Game Development">Unity Game Development</option>
            <option value="Unreal Engine Development">Unreal Engine Development</option>
            <option value="Game Design Fundamentals">Game Design Fundamentals</option>
            <option value="2D & 3D Game Art">2D & 3D Game Art</option>
          </select>
          {errors.course && <span style={{ color: 'red' }}>{errors.course}</span>}

          <textarea
            className='registration-form-inputs'
            placeholder='Message'
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>

          <div className='register-btn' onClick={studentRegistration}>
            Register
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration
