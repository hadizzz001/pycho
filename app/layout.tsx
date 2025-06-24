"use client"
import { Footer, Navbar2 } from '../components'
import './globals.css'
import './custom.css'
import './bootstrap.min.css'
import './bs-select.css'
import './slick.css'
import { useSearchParams } from 'next/navigation' 
import GifLoader from '../components/GifLoader'
import Offer from '../components/Offer'
import WhatsAppIcon from '../components/WhatsAppIcon';
import { GoogleAnalytics } from '@next/third-parties/google'
import { LanguageProvider } from './context/LanguageContext';

 

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {



  return (
    <html className="no-js no-touch supports-no-cookies" lang="en">
      <>
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="en" httpEquiv="Content-Language" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1"
          name="viewport"
        />
        <meta content="max-image-preview:large" name="robots" />
        <title>
          Psychocounseling
        </title>
        <meta
          content="At Psychocounseling, we're reshaping the way businesses connect."
          name="description"
        />
        <meta content="Psychocounseling" name="keywords" property="Psychocounseling, Psychocounseling, design, interior, box, models, 3ds, 3d, 3ds max, autocad, vray" />
        <meta
          content="Psychocounseling"
          name=""
          property="og:title"
        />
        <meta
          content="https://psychocounseling.online/"
          name=""
          property="og:url"
        />
        <meta content="website" name="" property="og:type" />
        <meta
          content="At Psychocounseling, we're reshaping the way businesses connect."
          name=""
          property="og:description"
        />
        <meta
          content="https://res.cloudinary.com/da8o9eb9e/image/upload/v1749986398/ico_hf12oo.webp"
          name=""
          property="og:image"
        />

        <link
          href="https://res.cloudinary.com/da8o9eb9e/image/upload/v1749986398/ico_hf12oo.webp"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="https://res.cloudinary.com/da8o9eb9e/image/upload/v1749986398/ico_hf12oo.webp"
          rel="icon"
          sizes="32x32"
        />
        <link
          href="https://res.cloudinary.com/da8o9eb9e/image/upload/v1749986398/ico_hf12oo.webp"
          rel="icon"
          sizes="16x16"
        />

        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="#ffffff" name="theme-color" />
        <link href="https://assets.bellroy.com" rel="preconnect" />
        <link href="https://bellroy.imgix.net" rel="preconnect" />


 


        <link
          href="css/webfonts-3e3c2400.css"
          rel="preload"
          as="style"
        />
        <link
          rel="stylesheet"
          href="css/webfonts-3e3c2400.css"
          media="print"
        />
        <link
          rel="stylesheet"
          href="css/style-4109db2b.css"
        />

        <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet" />


<link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/flag-icon-css/css/flag-icon.min.css"
          />





      </>

      <body>

        <LanguageProvider>
          <GifLoader />

 

            <Navbar2 />
            {/* <GoogleAnalytics gaId="" /> */}
            <WhatsAppIcon />
            {children}
            <Footer /> 
        </LanguageProvider>
      </body>
    </html>
  )
}
