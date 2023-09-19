"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { render } from '@react-email/render';
import emailjs from '@emailjs/browser'
import { Email } from './components/email';
 import {toast } from 'react-toastify';
import Image from 'next/image'
const contributor = () => {
 const router = useRouter();
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [dataUrl, setDataUrl] = useState('')
  const [huggingFaceUrl, setHuggingFaceUrl] = useState('')
 
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const info = {
    id: Math.random().toString(36).substring(2),
    date,
    email,
    name,
    url: dataUrl,
    huggingface: huggingFaceUrl
  }
 
  async function handlSubmit(e) {
    e.preventDefault()
    const url = 'http://localhost:3000/approval'
    const emailHtml = render(<Email url="http://localhost:3000/approval" />)
   //https://sheetdb.io/api/v1/20by739fmwvty 
         let templateParams = {
       message: emailHtml,
    
 };
   
    await fetch('http://localhost:3000/api/mil', {
    method: 'POST',
     headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      }, 
   body: JSON.stringify(info)
  //  body: JSON.stringify({
  //       data:[
  //        info
  //       ]
  //   })
    })
    
 .then((response) => response.json())
      .then((data) => {
       
         //toast('Request submitted')
      
      let templateParams = {
       message: emailHtml,
    
      };
        // emailjs.sendForm("service_b3lfl59", "template_yeabdqs", emailHtml, 'qGLJsSz1TrW-AhUNk')
         //send Email Message
        //  emailjs.send("service_b3lfl59", "template_yeabdqs",templateParams, 'qGLJsSz1TrW-AhUNk')
        //   .then((result) => { console.log(result.text) },
        //     (error) => {
        //       toast(error.text)
        //       console.log(error.text)
        //     })
        //handleMail().then(response=>{console.log('mail sent');})
         setEmail('')
        setName('')
      setDataUrl('')
      setHuggingFaceUrl('')
       //22304537729
         setTimeout(() => {
          router.push('/')
        }, 7000)
    
      }).catch(err => { toast(err)})
      
    
  }
  
  return (
    <div className=' w-full md:px-4  mx-auto sm:max-w-[75rem] '>
      <div className="md:w-3/5 mx-auto rounded-lg  py-8 md:py-20 px-4 text-white " style={{
        backgroundImage: "url('/background.jpg')",
     }}>
        <h1 className='sm:text-3xl mb-6'>HausaNLP: Contribution  Datasheets</h1>
        <p className='text-sm sm:text-base'>Available datasheet list can be accessed via https://indonlp.github.io/hausa-nlp/.
          Before filling this form, please kindly check if the dataset is present in the list or not.
        </p>
      </div>
      <form  className='mx-4 md:w-3/5 md:mx-auto ' onSubmit={handlSubmit}>
        <div className=' rounded-lg py-6 bg-white px-4 border border-[#a1caf5] my-4'>
          <label htmlFor="email">Email {" "}<span className='text-red-700 text-lg'>*</span></label><br />
          <input
            type="email"
            required
            placeholder='Your email'
            className=' w-1/2 mt-8 border-b border-gray-300 focus:border-red-500 focus:border-b-2 outline-none px-2 py-1 transition ease-in-out delay-150 duration-300'
            onChange={(e) => { setEmail(e.target.value) }}
            value={email}
            />
        </div>
        <div className=' rounded-lg py-6 bg-white px-4 border border-[#a1caf5] my-4'>
          <label htmlFor="name">Dataset name {" "}<span className='text-red-700 text-lg'>*</span></label><br />
          <p className='text-xs text-gray-600'>For example: NusaSenti, IndoNLU BaPOS, Indonesian etc.</p>
          <input
            type="text"
            required
            placeholder='Your answer'
            className=' w-1/2 mt-8 border-b border-gray-300 focus:border-red-500 focus:border-b-2 outline-none px-2 py-1 transition ease-in-out delay-150 duration-300'
            onChange={(e) => { setName(e.target.value) }}
            value={name}
            />
        </div>
         <div className=' rounded-lg py-6 bg-white px-4 border border-[#a1caf5] my-4'>
          <label htmlFor="url">Dataset URL {" "}<span className='text-red-700 text-lg'>*</span></label><br />
          <p className='text-xs text-gray-600'>Direct link to the dataset repository.</p>
          <input
            type="text"
            required
            placeholder='Your answer'
            className=' w-full mt-8 border-b border-gray-300 focus:border-red-500 focus:border-b-2 outline-none px-2 py-1 transition ease-in-out delay-150 duration-300'
            onChange={(e) => { setDataUrl(e.target.value) }}
            value={dataUrl}
            />
        </div>
        <div className=' rounded-lg py-6 bg-white px-4 border border-[#a1caf5] my-4'>
          <label htmlFor="huggingface">Dataset's HuggingFace URL</label><br />
          <p className='text-xs text-gray-600'>For example: https://huggingface.co/datasets/indonlu.</p>
          <input
            type="text"
            placeholder='Your answer'
            className=' w-full mt-8 border-b border-gray-300 focus:border-red-500 focus:border-b-2 outline-none px-2 py-1 transition ease-in-out delay-150 duration-300'
             onChange={(e) => { setHuggingFaceUrl(e.target.value) }}
            value={huggingFaceUrl}
            />
        </div>
       <button type="submit" className='ml-auto px-4 py-2 rounded-md drop-shadow-2xl text-red bg-white mb-10 border border-[#c7ddf5]'>Submit</button>

      </form>
    </div>
  )
}

//A0B0E0
//A0C8D4
//A0D0D0
//949CE8
export default contributor