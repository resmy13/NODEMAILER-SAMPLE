
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'annresmyjoseph@gmail.com',
    pass: 'nejo ksyf mmil gfsw'
  }
});

var mailOptions = {
  from: 'annresmyjoseph@gmail.com',
  to: 'annresmy@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'This is a sample mail send using Nodejs'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});