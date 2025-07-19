const registeredStudents = require('../modals/registeredStudentSchema')

exports.studentRegistration = async (req, res) => {
    console.log("inside student registration controller");
    console.log(req.body);
    const { name,email,phoneNumber,course,message } = req.body;    
    try {
        const newStudent = new registeredStudents({
            name,
            email,
            phoneNumber,
            course,
            message
        }) 
        console.log("inside dev"); 
        await newStudent.save()
        res.status(200).json("Student Registered Successfully")
    }
    catch (err) {
        res.status(406).json(err)
        console.log(err); 
    }
}