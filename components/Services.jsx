import Head from 'next/head'
import Image from 'next/image'
import ManWithRopes from '../assets/pexels-cottonbro-studio-4752861.jpg'
import MenWithWorkoutPlan from '../assets/pexels-mikhail-nilov-6740171.jpg'

export default function Services() {
    return (
      <>
        <main className='text-xl bg-charcoal drop-lg'>
            <div className='px-20 py-10 flex flex-col gap-16 items-center'>
                <div className='flex'>
                    <Image className='rounded-xl object-cover w-[480px] h-80 max-w-lg z-10 drop-md' src={ManWithRopes} alt={"Man with ropes"} width={3000} height={3000}/>

                    <div className='flex flex-col gap-3 py-10 pl-24 pr-8 my-auto bg-grey max-w-xl rounded-lg -translate-x-16 translate-y-16'>
                        <h2 className='font-AbrilFatface text-2xl'>We help you smash your goals</h2>
                        <p>
                        You have goals, we show you how to achieve them. With the accountability you get from your PT,  you can be assured to level up and accomplish fitness goals you never thought possible.
                        </p>
                    </div>
                </div>

                <div className='flex'>
                    <div className='flex flex-col gap-3 py-10 pl-8 pr-24 my-auto bg-grey max-w-xl rounded-lg translate-x-16 -translate-y-16'>
                        <h2 className='font-AbrilFatface text-2xl'>We help you smash your goals</h2>
                        <p>
                        You have goals, we show you how to achieve them. With the accountability you get from your PT,  you can be assured to level up and accomplish fitness goals you never thought possible.
                        </p>
                    </div>

                    <Image className='rounded-xl object-cover w-[480px] h-80 max-w-lg z-10 drop-md' src={MenWithWorkoutPlan} alt={"Men with workout plan"} width={3000} height={3000}/>
                </div>
            </div>
        </main>
      </>
    )
  }