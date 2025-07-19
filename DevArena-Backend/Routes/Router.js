const express = require('express')
const router = new express.Router;
const registeredStudentController = require('../controllers/registeredStudentController')
const messageController = require('../controllers/messageController')
const adminController = require('../controllers/adminController')


//for student registration
router.post('/studentRegistration',registeredStudentController.studentRegistration);

//for sending contact message
router.post('/sendContactMessage',messageController.sendContactMessage);

//admin login
router.post('/admin/login',adminController.adminLogin)

//fetch registered students
router.get('/admin/registeredStudents', adminController.fetchRegisteredStudents);

//delete registered students
router.delete('/admin/deleteStudent/:studentId',adminController.deleteRegisteredStudent);

module.exports = router;