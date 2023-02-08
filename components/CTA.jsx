import Form from '@/components/Form'

export default function CTA() {
    return (
      <>
        <main className="bg-scroll bg-twd_bg_image py-16 h-3/4">
           <div className='bg-charcoal bg-opacity-90 w-4/6 h-full rounded-lg drop-md flex flex-col justify-center items-center mx-auto text-off-white'>
                <h2 className="font-AbrilFatface text-3xl pb-8">Let&apos;s get in touch!</h2>
                <Form/>
            </div>
        </main>
      </>
    )
  }