const contactMessages = require("../modals/contactMessageSchema")

exports. sendContactMessage = async (req, res) => {
    console.log("inside sendContactMessage::");
    const { fullName, email, phoneNumber, message } = req.body;
    try {
        const result = new contactMessages({
            fullName,
            email,
            phoneNumber,
            message
        })
        await result.save()
        res.status(200).json("Message sended successfully")
    }
    catch (err) {
        res.status(406).json(err)
        console.log(err);
    }


}


