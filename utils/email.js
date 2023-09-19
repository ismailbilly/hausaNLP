//import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
//import Email from './components/email'

 const transporter = nodemailer.createTransport({
  host: 'techybilqis@gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'techybilqis@gmail.com',
    pass: 'wtnnvfreoekynfra',
  },
});

//const emailHtml = render(<Email url="https://localhost:3000/approval" />);
 export default async function handleMail() {
const options = {
  from: 'techybilqis@gmail.com',
  to: 'ismail.bilkisu@gmail.com',
  subject: 'hello world',
  text: 'how are you',
};
  try {
    const info = await transporter.sendMail(options);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
   
}
 