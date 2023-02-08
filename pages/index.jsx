import Head from 'next/head'
import { Inter } from '@next/font/google'
import NavBar from '@/components/NavBar'
import LandingScreen from '@/components/LandingScreen'
import Services from '@/components/Services'
import CTA from '@/components/CTA'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>T.W.D.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen font-PTSans scroll-smooth'>
        
        <NavBar/>

        <div id="landing">
          <LandingScreen/>
        </div>

        <div id="services">
          <Services/>
        </div>

        <div id="cta">
          <CTA/>
        </div>
      </main>
    </>
  )
}
