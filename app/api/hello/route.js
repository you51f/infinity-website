import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer';



// const password = "imcqouyaykhjtttc";


export async function POST(request) {
  const body = await request.json()
  // console.log(body);
  try {  
    if (body.subject === "Spare parts") {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
      port: 587,
      secure: false,
        auth: {
            user: "Consulting.infinityaviation@gmail.com",
            pass: process.env.NODE_MAILER_PASS_CONSULTING
            // user: email,
            // pass: password
        },
    })
      await transporter.sendMail({
        from: "Consulting.infinityaviation@gmail.com",
        to: "Consulting.infinityaviation@gmail.com",
        subject: body.subject,
        text: "A message from infinity website",
        html: `<h2>Company: ${body.company}</h2><p><h3>Customer: ${body.firstName} ${body.lastName}</h3> </p><p>${body.email}</p><p>+${body.code}-${body.phone}</p><h3>Ordered Part: ${body.part}</h3><h3>Part Number: ${body.partNumber}</h3><h3>Quantity: ${body.quantity}</h3><h3>Condition: ${body.condition}</h3><h3>Message:</h3><p style="white-space: pre-wrap">${body.comment}</p>`
      })
    }else if (body.subject === "Multi parts") {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
      port: 587,
      secure: false,
        auth: {
            user: "Consulting.infinityaviation@gmail.com",
            pass: process.env.NODE_MAILER_PASS_CONSULTING
            // user: email,
            // pass: password
        },
    })
      await transporter.sendMail({
        from: "Consulting.infinityaviation@gmail.com",
        to: "Consulting.infinityaviation@gmail.com",
        subject: body.subject,
        text: "A message from infinity website",
        html: `<h2>Company: ${body.company}</h2><p><h3>Customer: ${body.firstName} ${body.lastName}</h3> </p><p>${body.email}</p><p>+${body.code}-${body.phone}</p><h3>Ordered Parts:</h3><p style="white-space: pre-wrap">${body.parts}</p><h3>Message:</h3><p style="white-space: pre-wrap">${body.comment}</p>`
      })
    }else if (body.subject === "New Order Details") {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
      port: 587,
      secure: false,
        auth: {
            user: "Sales.infinityaviation@gmail.com",
            pass: process.env.NODE_MAILER_PASS_CONSULTING
            // user: email,
            // pass: password
        },
    })
      await transporter.sendMail({
        from: "Sales.infinityaviation@gmail.com",
        to: "Sales.infinityaviation@gmail.com",
        subject: body.subject,
        text: "A message from infinity website",
        html: `<h2>Recipient's name: ${body.recipientName}</h2><p><h3>ID Number: ${body.idNumber} </h3> </p><p>${body.email}</p><p>${body.recipientMobile}</p><p><h3>Specific address: ${body.specificAddress} </h3> </p><p><h3>Country/Region: ${body.countryRegion} </h3> </p><p><h3>Province/state: ${body.provinceState} </h3> </p><p><h3>City: ${body.city} </h3> </p><p><h3>Postal Code or Zip code: ${body.postalCode} </h3> </p><p><h3>Recipient's Mailbox: ${body.recipientMailbox} </h3> </p>`
      })
    }else {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
      port: 587,
      secure: false,
        auth: {
            user: "Sales.infinityaviation@gmail.com",
            pass: process.env.NODE_MAILER_PASS_SALES
            // user: email,
            // pass: password
        },
    })
      await transporter.sendMail({
        from: "Sales.infinityaviation@gmail.com",
        to: "Sales.infinityaviation@gmail.com",
        subject: body.subject,
        text: "A message from infinity website",
        html: `<h2>Company: ${body.company}</h2><p><h3>Customer: ${body.firstName} ${body.lastName}</h3> </p><p>${body.email}</p><p>+${body.code}-${body.phone}</p><h4>Message:</h4><p>${body.comment}</p>`
      })
    }

    return NextResponse.json({success: true});
  } catch (error) {
    console.log(error);
    return NextResponse.json({message: error.message});
  }
}