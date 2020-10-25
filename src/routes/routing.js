const express = require('express');
const routing = express.Router();
const service = require("../service/service");
const Comment = require("../models/comment");
const nodemailer = require("nodemailer");


//routing

// routing.get('/setupDb', (req, res, next) => {
//   create.setupDb().then((data) => {
//       res.send({ message: data })
//   }).catch((err) => {
//       next(err)
//   })
// })


routing.post('/comment/:category', (req, res, next) => {
  let commentObj = new Comment(req.body);
  let category = req.params.category;
  service.postcomment(commentObj,category).then((resp) => {
      if (resp) {
          res.status(200)
          res.json({message : "Posted Successfully"})
      }
  }).catch((err) => {
      next(err)
  })
})

routing.get('/comment/:category', (req, res, next) => {
  let category = req.params.category;
  service.getComments(category).then((resp) =>{
      if (resp) {
          res.status(200);
          res.json({resp})            
      }
  }).catch((err) => {
      next(err)
  })
})

routing.post('/sendemail', (req, res) =>{
    console.log('req received')
    let mail = req.body;
    main(mail, info => {
        console.log("Message Sent");
        res.json({message : "Feedback sent"})
    })
})

async function main(mail) {
    console.log(mail)
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'thetimelinetrends@gmail.com', // generated ethereal user
        pass: 'pugazhvicky', // generated ethereal password
      },
    });
  
    let info = await transporter.sendMail({
      from: mail.email,
      to: "thetimelinetrends@gmail.com",
      subject: "Feedback",
      text: "Hello world?",
      html: `Name: ${mail.name}<br><br> Comment: ${mail.comments}` 
    });
  
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = routing;
