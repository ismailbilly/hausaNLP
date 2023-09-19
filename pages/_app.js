"use client"


import '@/styles/globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }) {

  return (
    <>
      {/* <Navigation/> */}
      <Component {...pageProps} />
      <ToastContainer/>
      {/* <Footer/> */}
      </>
  )
}
