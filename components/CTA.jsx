import Form from '@/components/Form'

export default function CTA() {
    return (
      <>
        <main className="bg-scroll bg-twd_bg_image py-16 h-3/4">
           <div className='bg-charcoal bg-opacity-90 w-11/12 md:w-4/6 min-h-full py-8 rounded-lg drop-md flex flex-col justify-center items-center mx-auto text-off-white'>
                <h2 className="font-AbrilFatface text-3xl pb-8">Let&apos;s get in touch!</h2>
                <Form/>
            </div>
        </main>
      </>
    )
  }