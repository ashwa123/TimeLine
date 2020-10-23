const express = require('express');
const routing = express.Router();
const service = require("../service/service");
const Comment = require("../models/comment");
const nodemailer = require('nodemailer');


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
    let mail = req.body;
    SendMail(mail, info => {
        console.log("Message Sent");
        res.send(info)
    })
})

async function SendMail(mail, callback) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: '',
            pass: ''
        }
    })

    let mailOptions = {
        from: mail.email,
        to: 'ashwanth23.2.98@gmail.com',
        subject: 'Feedback',
        html: comments
    }

    let info = await transporter.SendMail(mailOptions);

    callback(info)
}

// thetimelinetrends@gmail.com

module.exports = routing;
