
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req) {
     
     const { name, email, comment, phone, subject } = (await req.json())

     const EMAIL_FROM="softsgens@gmail.com"
     const EMIAL_PASSWORD_TOKEN="bczjxzfatgxsebrz"


     const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: EMAIL_FROM,
            pass: EMIAL_PASSWORD_TOKEN,
          },
        });
      
        try {
          await transporter.sendMail({
               from: EMAIL_FROM,
               to: `contact@topproviders.net`,
               subject: `Message From ${name.charAt(0).toUpperCase() + name.slice(1)}`,
               text: comment + " | Sent from: " + email,
               html: `
               <p><strong>Name: </strong> ${name}</p>
               <p><strong>Email: </strong> ${email}</p>
               <p><strong>Phone number: </strong> ${phone}</p>
               <p><strong>Subject: </strong> ${subject}</p>
               <p><strong>Comments: </strong> ${comment}</p> `
          });
          return new NextResponse(
            JSON.stringify({
              status: "ok",
              message: "Email send",
            }),
            { status: 200 }
          );
        } catch (error) {
          return new NextResponse(
            JSON.stringify({
              status: "error",
              message: error.message,
            }),
            { status: 500 }
          );
        }
}