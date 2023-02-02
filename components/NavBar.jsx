import Head from 'next/head'
import Link from 'next/link'

export default function NavBar() {
    return (
      <>
        <main className='text-xl'>
          <div className='flex flex-row justify-between px-10 py-7 bg-grey'>
            <div className='font-AbrilFatface text-3xl my-auto'><Link className='' href={""}>T.W.D.</Link></div>
            <div className='font-PTSans flex flex-row gap-20'>
                <Link className='my-auto aHScU' href={""}>Home</Link>
                <Link className='my-auto aHScU' href={""}>Services</Link>
                <Link className='bg-charcoal text-white text-lg font-bold py-1 px-2 rounded-lg' href={""}>Enquire Now</Link>
            </div>
          </div>
        </main>
      </>
    )
  }