// sendEmail.js (email sending route)
import nodemailer from "nodemailer";

export default async function POST(req, res) {
    console.log("email body ",req.body)
  try {
    const { to, subject, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure your email provider here (e.g., Gmail, SendGrid)
      service: "gmail",
      auth: {
        user: "viveksondhiya555@gmail.com",
        pass: "'",
      },
    });

    // Define email options
    const mailOptions = {
      from: "viveksondhiya555@gmail.com",
      to,
      subject,
      text: message,
    };

    // Send the email
    const status=await transporter.sendMail(mailOptions, (err,data)=>{
        if (err) {
            console.log('Error Occurs sendEmail' ,err);
        } else {
            console.log('Email sent successfully',data);
        }
    });
    console.log("inside sendEmail",status)

    // Return a success response
   // const status=userModel.getStatus("sent");
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    // Return an error response
    res.status(500).json({ message: "Failed to send email" });
  }
}
