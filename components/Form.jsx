import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Form = () => {

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
            <button
                className='bg-off-white text-charcoal text-lg font-bold mt-5 py-1 px-5 rounded-lg ml-auto focus:animate-bounce-short'
                type="submit"
                value="Send"
            >Enquire Now</button>
        </form>
    </>;
};

export default Form;