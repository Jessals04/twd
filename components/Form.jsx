import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function Form() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1cdseqs', 'template_egw87je', form.current, 'WJOpX2_GPPeB7gQpD')
        .then((result) => {
            console.log(result.text);
            toast.success('Enquiry sent! We will get back to you shortly.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }, (error) => {
            console.log(error.text);
            toast.error('An error occurred. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        });
    };


    return <>
        <form className="flex flex-col gap-2 w-5/6 max-w-3xl px-8" ref={form} onSubmit={sendEmail}>
            <label className="text-xl">Full Name</label>
            <input className="text-charcoal rounded-lg px-2 py-3" name='full_name' type="text" placeholder="Full Name" required />
            <label className="text-xl pt-3">Email</label>
            <input className="text-charcoal rounded-lg px-2 py-3" name='email' type="email" placeholder="Email" required />
            <label className="text-xl pt-3">Phone Number (optional)</label>
            <input className="text-charcoal rounded-lg px-2 py-3" name='phone_number' type="number" placeholder="Phone Number" />
            <label className="text-xl pt-3">Session Length</label>
            <select className="text-charcoal rounded-lg px-2 py-3" name="session_length" id="">
                <option value="30min">30 Minutes - $50</option>
                <option value="45min">45 Minutes - $65</option>
            </select>
            <label className="text-xl pt-3">Preferred Day of Week</label>
            <select className="text-charcoal rounded-lg px-2 py-3" name="pref_day_of_week" id="">
                <option value="mon">Monday</option>
                <option value="tue">Tuesday</option>
                <option value="wed">Wednesday</option>
                <option value="thu">Thursday</option>
                <option value="fri">Friday</option>
            </select>

            <label className="text-2xl pt-6 mx-auto">Fitness Questionnaire</label>
            

            <label className="text-lg">1. How many days a week do you exercise?</label>
            <select className="text-charcoal rounded-lg px-2 py-3" name='days_per_week' type="text" required>
                <option value="0">0 (I don't exercise)</option>
                <option value="1-2">1-2 days</option>
                <option value="3-5">3-5 days</option>
                <option value="6+">6+ days</option>
            </select>

            <label className="text-lg">2. How much time do you usually spend for a workout?</label>
            <select className="text-charcoal rounded-lg px-2 py-3" name='time_per_workout' type="text" required>
                <option value="0-30">0-30 mins</option>
                <option value="30-60">30-60 mins</option>
                <option value="60-90">60-90 mins</option>
                <option value="90+">90+ mins</option>
            </select>

            <label className="text-lg">3. Where do you prefer to workout?</label>
            <select className="text-charcoal rounded-lg px-2 py-3" name='pref_location' type="text" required>
                <option value="gym">Gym</option>
                <option value="home">Home</option>
                <option value="fresh air">Fresh Air</option>
                <option value="other">Other</option>
            </select>

            <label className="text-lg">4. When do you prefer to workout?</label>
            <select className="text-charcoal rounded-lg px-2 py-3" name='pref_time_to_workout' type="text" required>
                <option value="early">Early Morning</option>
                <option value="midday">Midday</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
            </select>

            <label className="text-lg">5. What type of exercises do you often do? (hold ctrl or cmd to select more than one)</label>
            <select className="text-charcoal rounded-lg px-2 py-3" name='exercise_types' type="text" multiple size={6} required>
                <option value="cardio">Cardio</option>
                <option value="crossfit">Crossfit</option>
                <option value="bodybuilding">Bodybuilding</option>
                <option value="powerlifting">Powerlifting</option>
                <option value="interval training">Interval Training</option>
                <option value="other">Other</option>
            </select>

            <label className="text-lg">6. What is your main fitness goal? (hold ctrl or cmd to select more than one)</label>
            <select className="text-charcoal rounded-lg px-2 py-3" name='fitness_goal' type="text" multiple size={6} required>
                <option value="lose weight">Lose weight</option>
                <option value="gain weight">Gain weight</option>
                <option value="maintain weight">Maintain weight</option>
                <option value="build muscle">Build muscle</option>
                <option value="stay fit">Stay fit</option>
                <option value="other">Other</option>
            </select>

            <label className="text-lg">7. Do you have an exercise plan?</label>
            <select className="text-charcoal rounded-lg px-2 py-3" name='exercise_plan' type="text" required>
                <option value="yes, for certain periods">Yes, I have exercise plans for certain periods.</option>
                <option value="yes, but can't practice it">Yes, I have an exercise plan but I can't fully practice it.</option>
                <option value="no">No, I don't have one.</option>
                <option value="has a PT">I work with a personal trainer.</option>
            </select>

            <label className="text-lg">8. Do you have a workout partner?</label>
            <select className="text-charcoal rounded-lg px-2 py-3" name='partner' type="text" required>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>

            <label className="text-lg">9. Do you have a nutrition plan?</label>
            <select className="text-charcoal rounded-lg px-2 py-3" name='nutrition_plan' type="text" required>
                <option value="yes, count calories and consume supplements">Yes, I count calories and consume athletic food supplements.</option>
                <option value="yes, count colories only">Yes, I count calories but don't consume any supplements.</option>
                <option value="no, healthy diet">No, my diet is healthy.</option>
                <option value="no, random diet">No, my diet is random.</option>
            </select>

            <label className="text-lg">10. How much does it cost per month to reach your fitness goals currently?</label>
            <select className="text-charcoal rounded-lg px-2 py-3" name='fitness_goal_cost' type="text" required>
                <option value="<100">Less than $100</option>
                <option value="100-200">$100-$200</option>
                <option value="200-500">$200-$500</option>
                <option value="500+">$500+</option>
            </select>

            <label className="text-xl pt-3">11. What motivates you best to reach your fitness goals? (optional)</label>
            <textarea className="text-charcoal rounded-lg px-2 py-3" name='motivation' type="text" placeholder="Type here..."/>

            <label className="text-xl pt-3">12. What is the biggest challenge that can keep you from achieving your fitness goals? (optional)</label>
            <textarea className="text-charcoal rounded-lg px-2 py-3" name='challenge' type="text" placeholder="Type here..."/>

            <button
                className='bg-off-white text-charcoal text-lg font-bold mt-5 py-1 px-5 rounded-lg ml-auto focus:animate-bounce-short'
                type="submit"
                value="Send"
            >Enquire Now</button>
        </form>
    </>;
};