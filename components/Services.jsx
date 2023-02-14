import Head from 'next/head'
import Image from 'next/image'
import ManWithRopes from '../assets/pexels-cottonbro-studio-4752861.jpg'
import MenWithWorkoutPlan from '../assets/pexels-mikhail-nilov-6740171.jpg'

export default function Services() {
    return (
      <>
        <main className='text-xl bg-charcoal drop-lg'>
            <div className='px-20 pt-10 lg:py-10 flex flex-col lg:gap-16'>
                <div className='flex flex-col lg:flex-row items-center'>
                    <Image className='rounded-xl object-cover lg:w-2/3 h-80 lg:max-w-lg z-10 drop-md' src={ManWithRopes} alt={"Man with ropes"} width={3000} height={3000}/>

                    <div className='flex flex-col gap-3 py-10 px-10 lg:pl-24 lg:pr-8 my-auto bg-grey lg:w-auto max-w-xl rounded-lg lg:-translate-x-16 lg:translate-y-16'>
                        <h2 className='font-AbrilFatface text-lg md:text-2xl'>We help you smash your goals</h2>
                        <p className='text-sm md:text-base lg:text-lg'>
                        You have goals, we show you how to achieve them. With the accountability you get from your PT,  you can be assured to level up and accomplish fitness goals you never thought possible.
                        </p>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='flex flex-col gap-3 py-10 px-10 lg:pl-8 lg:pr-24 my-auto bg-grey max-w-xl rounded-lg lg:translate-x-16 lg:-translate-y-16'>
                        <h2 className='font-AbrilFatface text-lg md:text-2xl'>We do the boring stuff for you</h2>
                        <p className='text-sm md:text-base lg:text-lg'>
                        Throughout your training blocks all you have to do is show up and sweat. We take care of all the planning. You will be given fully personalised workout plans to suit you and your goals.
                        </p>
                    </div>

                    <Image className='rounded-xl collapse lg:visible object-cover lg:w-[480px] lg:h-80 lg:max-w-lg z-10 drop-md' src={MenWithWorkoutPlan} alt={"Men with workout plan"} width={3000} height={3000}/>
                </div>
            </div>
        </main>
      </>
    )
  }