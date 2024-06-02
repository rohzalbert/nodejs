const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'test@gmail.com', 
    pass: 'password', 
  },
});

const mailOptions = {
  from: 'test@gmail.com', 
  to: 'example@gmail.com',
  subject: 'Test Email from Node.js', 
  text: 'Hello, this is a test email sent from Node.js using Nodemailer!', 
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
