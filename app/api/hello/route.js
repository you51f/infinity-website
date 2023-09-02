import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer';


const email = "you51felbalaa@gmail.com";
const password = "imcqouyaykhjtttc";


export async function POST(request) {
  const body = await request.json()
  // console.log(body);
  try {
    if (body.subject != "Spare parts") {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
      port: 587,
      secure: false,
        auth: {
            // user: "Sales.infinityaviation@gmail.com",
            // pass: "fywqwhcxrubckben"
            user: email,
            pass: password
        },
    })
      await transporter.sendMail({
        from: email,
        to: email,
        subject: body.subject,
        text: "A message from infinity website",
        html: `<h2>Company: ${body.company}</h2><p><h3>Customer: ${body.firstName} ${body.lastName}</h3> </p><p>${body.email}</p><p>${body.phone}</p><h4>Message:</h4><p>${body.comment}</p>`
      })
    }else {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
      port: 587,
      secure: false,
        auth: {
            // user: "Consulting.infinityaviation@gmail.com",
            // pass: "tgyfqeorwxohjnue"
            user: email,
            pass: password
        },
    })
      await transporter.sendMail({
        from: email,
        to: email,
        subject: body.subject,
        text: "A message from infinity website",
        html: `<h2>Company: ${body.company}</h2><p><h3>Customer: ${body.firstName} ${body.lastName}</h3> </p><p>${body.email}</p><p>${body.phone}</p><h3>Ordered Part: ${body.part}</h3><h3>Quantity: ${body.quantity}</h3><h3>Condition: ${body.condition}</h3><h3>Message:</h3><p style="white-space: pre-wrap">${body.comment}</p>`
      })
    }

    return NextResponse.json({success: true});
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: error.message});
  }
}