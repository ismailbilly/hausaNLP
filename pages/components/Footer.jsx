import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillCopyrightCircle} from 'react-icons/ai'
import {FaFacebook } from 'react-icons/fa'
const Footer = () => {
  return (
      <footer className='bg-[#4646E3] text-white py-16'>
          <div className='sm:flex sm:justify-between sm:items-center w-full px-4 mx-auto sm:max-w-[75rem] text-center space-y-4 '>
              <div className="flex justify-center  sm:justify-between items-center gap-2 md:gap-6">
                <AiFillTwitterCircle size={20} />
              <FaFacebook size={20}/>
              <AiFillGithub size={20}/>
              <AiFillLinkedin size={20}/>
              </div>
              <div className=' text-xs flex justify-center   items-center gap-1'><span><AiFillCopyrightCircle /></span><span> Copyright {new Date().getFullYear()}</span></div>
              <div className=' text-xs'>Alright reserved. <span><i>Powered By HausaNLP</i></span></div>
          </div>
    </footer>
  )
}

export default Footer