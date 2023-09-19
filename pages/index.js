import Image from 'next/image'
import { Fragment, useEffect } from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import ContactForm from './ContactForm'
 //import {toast } from 'react-toastify';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 
  return (
    <>
      <Navigation />
      <main className="">
        <div className=" bg-[#4646E3] text-white py-16 px-4">
          <div className="text-center">
            <h1 className=" font-sans text-xl sm:text-3xl md:text-5xl">
              Hausa Natural Language Processing
            </h1>
            <h2 className=" opacity-70 text-xs sm:text-lg">
              The largest hausa language data store in Africa and beyond
            </h2>
            <h3 className=" opacity-70  text-xm  sm:text-lg mb-10">
              with over 100 contributors
            </h3>
            <button className="py-2 px-6 rounded-lg text-[#4646E3] bg-white font-medium">
              <Link href="/catalogue">Catalogue</Link>
            </button>
          </div>
        </div>
        <div className="mt-8 w-full px-4 mx-auto sm:max-w-[75rem] ">
          <h2 className="text-2xl font-bold mb-2">About Us</h2>
          <p className="mb-8 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="mb-8 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mb-8 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mb-8 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
