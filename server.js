const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running on http://localhost:5000"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Email configuration error:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  // Validation
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ code: 400, status: "Missing required fields" });
  }

  const name = firstName + " " + lastName;
  const mail = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };
  
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Email send error:", error);
      res.status(500).json({ code: 500, status: "Failed to send message", message: error.message });
    } else {
      res.json({ code: 200, status: "Message Sent", message: "Your message has been sent successfully!" });
    }
  });
});
