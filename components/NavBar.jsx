import Head from 'next/head'
import Link from 'next/link'

export default function NavBar() {
    return (
      <>
        <div className='text-xl z-50 sticky top-0 scroll-smooth'>
          <div className='flex flex-row justify-between px-10 py-7 bg-grey'>
            <div className='font-AbrilFatface text-3xl my-auto'><Link className='' href="#landing">T.W.D.</Link></div>
            <div className='font-PTSans flex flex-row gap-20'>
                <Link className='my-auto aHScU collapse md:visible' href="#landing">Home</Link>
                <Link className='my-auto aHScU collapse md:visible' href="#services">Services</Link>
                <Link className='bg-charcoal text-white text-lg font-bold py-1 px-5 rounded-lg ml-auto my-auto' href="#cta">Enquire Now</Link>
            </div>
          </div>
        </div>
      </>
    )
  }