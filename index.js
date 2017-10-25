"use strict";
const nodemailer = require("nodemailer");

nodemailer.createTestAccount((err, account) => {

  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false,
    auth: {
      user: "jinnchan@qq.com", 
      pass: "********" 
    }
  });

  let mailOptions = {
    from: '"Fred Foo 👻" <jinnchan@qq.com>', 
    to: "jinn2008@qq.com", 
    subject: "Hello ✔", 
    text: "Hello worlddg?",
    html: "<b>Hello world  vv?</b>" 
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
});

/* var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "qq",
  auth: {
    user: "527828938@qq.com",
    pass: "ugxovfwhvxxxxxx" //授权码,通过QQ获取
  }
});
var mailOptions = {
  from: "527828938@qq.com", // 发送者
  to: "452076103@qq.com", // 接受者,可以同时发送多个,以逗号隔开
  subject: "nodemailer2.5.0邮件发送", // 标题
  //text: 'Hello world', // 文本
  html: `<h2>nodemailer基本使用:</h2><h3>  
    <a href="http://blog.csdn.net/zzwwjjdj1/article/details/51878392">  
    http://blog.csdn.net/zzwwjjdj1/article/details/51878392</a></h3>`
};

transporter.sendMail(mailOptions, function(err, info) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("发送成功");
});
 */
