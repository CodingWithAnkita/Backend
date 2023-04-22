
const nodemailer = require("nodemailer")

exports.sendMail = async (req, res) => {
  try {
      // Connect with the smtp

      let transporter = nodemailer.createTransport({
        services: 'email',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        },
    })

    let info = await transporter.sendMail({
        from: 'shindeanku208@gmail.com',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text,

    })

    console.log("Message sent: %s", info.messageId);

 return res.json({errors:false,data:info})
  } catch (error) {
    return res.status(400).send({errors:true,message:error.message})
  }
}


