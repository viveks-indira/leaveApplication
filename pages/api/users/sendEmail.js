// sendEmail.js (email sending route)
import nodemailer from "nodemailer";

export default async function POST(req, res) {
   // console.log("email body ", req.body);
    try {
        const staticEmail = "viveksondhiya555@gmail.com";
        const dynamicEmail = req.body.formData.to;
        const dynamicSubject = req.body.formData.subject;
        const dynamicMessage=req.body.formData.message;
 
        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use true for port 465, false for all other ports
            auth: {
                user: "viveksondhiya555@gmail.com",
                pass: "ulbb llaz bazr oaeb",
            },
        });

        // Define email options
        const mailOptions = {
            from: `" Vivek Sondhiya " <viveksondhiya555@gmail.com>`, // sender address
            to: dynamicEmail, // list of receivers
            subject: dynamicSubject, // Subject line
            text: "<b>Hello world form vivek?</b>", // plain text body
            html: dynamicMessage,
        };

        // Send the email
        const status = await transporter.sendMail(mailOptions);
        console.log("inside sendEmail", status);

        // Return a success response
        res.status(200).json(status);
    } catch (error) {
        console.error("Error sending email:", error);
        // Return an error response
        res.status(500).json({ message: "Failed to send email" });
    }
}
