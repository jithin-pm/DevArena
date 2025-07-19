const mongoose = require('mongoose');

const registeredStudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  // fixed 'require' to 'required'
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: false
    }
}, {
    timestamps: true 
});

const registeredStudents = mongoose.model("registeredStudents", registeredStudentSchema);

module.exports = registeredStudents;
