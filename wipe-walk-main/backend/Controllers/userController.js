const User = require("../Model/userModel/userModel");
const Booking = require("../Model/bookingModel/bookingModel.js")
const asyncHandler = require("express-async-handler");
const generateToken = require("../Unitl/jwt");
const shortid = require("shortid");
var nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const dotenv = require('dotenv').config()
const smtpTransport = require('nodemailer-smtp-transport');


//user register

const RegisterUser = asyncHandler(async (req, res) => {
  const { name, email, phone, password } =
    req.body;

  const UserExist = await User.findOne({ email });

  if (UserExist) {
    res.status(400);
    throw new Error("User Already Exist");
  }

  const user = await User.create({
    name,
    email,
    phone,
    password,
  });
  // console.log(req.body);
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      Token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("error occured");
  }
});

//user login

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user.isBlock) {
    res.status(400);
    res.json({
      iserror: "ADMIN IS BLOCKED THIS USER",
    });
  } else {
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        email: user.email,
        isBlock: user.isBlock,
        name: user.name,
        IsBlock: user.isBlock,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Email OR Password Not matching");
    }
  }
});


//booking details
const bookingData = asyncHandler(async (req, res) => {
  try {
    const { name, email, phone, address, service } = req.body.bookingDetails
    const bookingData = req.body.bookingDetails
    const isEmailSent = await sendBookingDataByEmail(bookingData)     
    console.log('is email send--',isEmailSent);
    if(isEmailSent){
      const booking = await Booking.create({
        name,
        email,
        phone,
        address,
        service
      })
      if(booking){
        res.json({message:"Successfully Booked"})
      }
    }
    console.log('email sent-->', isEmailSent);

  } catch (error) {
    throw new Error(error.message)
  }
})



//helpper function to send booking data to email

async function sendBookingDataByEmail(bookingData) {
  const emailMessage = `
  This is the details of the customer who has made a booking for service:

  Name: ${bookingData.name}
  Email: ${bookingData.email}
  Phone: ${bookingData.phone}
  Address: ${bookingData.address}
  Service: ${bookingData.service}
`;


  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      auth: {
        user: 'wipewalk@gmail.com',
        pass: process.env.GMAIL_PASS,
      },
      secure: true, // Use TLS
      port: 465, // Gmail SMTP port with TLS
    })
  );

  await transporter.verify();

  const mailOptions = {
    from: 'wipewalk@gmail.com',
    to: 'wipewalk@gmail.com',
    subject: 'customer Booking Details',
    text: emailMessage,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        reject(error);
      } else {
        console.log('Email sent:', info.response);
        resolve(info.response)
      }
    });
  });
}

module.exports = {
  RegisterUser,
  loginUser,
  bookingData
};
