const admins = require('../modals/adminSchema')
const jwt = require('jsonwebtoken')
const registeredStudents = require('../modals/registeredStudentSchema')

exports.adminLogin = async (req, res) => {
    console.log("inside Admin Login");
    const { email, password } = req.body
    try {
        const existingAdmin = await admins.findOne({ email: email, password: password })
        if (existingAdmin) {
            const token = jwt.sign({ adminId: existingAdmin._id }, process.env.ADMIN_SECRET_KEY)
            res.status(200).json(token)
        }
        else {
            res.status(401).json("Invalid email or password")
        }
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.fetchRegisteredStudents = async (req, res) => {
    console.log("inside fetchRegistrationStudents");
    try {
        const result = await registeredStudents.find().sort({ createdAt: -1 });
        res.status(200).json(result);
    } catch (err) {
        console.error("Error fetching students:", err);
        res.status(406).json({ error: "Failed to fetch students" });
    }
};


exports.deleteRegisteredStudent = async (req, res) => {
    console.log("Inside delete registered students");
    const { studentId } = req.params;

    try {
        const result = await registeredStudents.findByIdAndDelete(studentId);

        if (!result) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({ message: "Student deleted successfully" });
    } catch (err) {
        console.error("Error deleting student:", err);
        res.status(500).json({ message: "Server error", error: err });
    }
};

