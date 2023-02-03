import Head from 'next/head'
import Image from 'next/image'
import ManWithRopes from '../assets/pexels-cottonbro-studio-4752861.jpg'
import MenWithWorkoutPlan from '../assets/pexels-mikhail-nilov-6740171.jpg'

export default function Services() {
    return (
      <>
        <main className='text-xl bg-charcoal'>
            <div>
                <Image className='rounded-xl object-cover w-full h-80 max-w-lg' src={ManWithRopes} alt={"Man with ropes"} width={300}/>

                <div className='bg-off-white rounded-lg'>
                    <h2 className=' font-AbrilFatface'>We help you smash your goals</h2>
                    <p>
                    You have goals, we show you how to achieve them. With the accountability you get from your PT,  you can be assured to level up and accomplish fitness goals you never thought possible.
                    </p>
                </div>
            </div>

            <div>

            </div>
        </main>
      </>
    )
  }