// Import the nodemailer module
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'roselineogwunte@gmail.com', 
    pass: 'password', 
  },
});


const mailOptions = {
  from: 'roselineogwunte@gmail.com', 
  to: 'rohzalbert@gmail.com', 
  subject: 'Test Email', 
  text: 'This is a test email from Node.js!', 
  html: '<p>This is a <b>test email</b> from <i>Node.js</i>!</p>', // HTML body
};

// Sending email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
