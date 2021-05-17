import {useState} from 'react'
import { useForm } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [state, handleSubmit] = useForm("xrgrpaqn");

    const sendRequest = (e) => {
        e.preventDefault();
        let err=[]
        if (!document.getElementById('fullname').value) err.push('name');
        if (!document.getElementById('email').value) err.push('email');
        if (!document.getElementById('message').value) err.push('message');
        if (err.length) {
            toast.error(`The following fields are mandatory: ${err.join(", ", err)}`)
        } else {
            handleSubmit(e);
            toast.success('✅ Your message was sent successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        }
    }

    return (
        <div className='contact' id='contact'>
            <h1 className='contact__title'>Contact</h1>
            <p className='contact__description'>Are you interested in working together?</p>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <form onSubmit={(event) => sendRequest(event)} className='contact__form'>
                <input type="text" name="fullname" id="fullname" className='contact__formInput' placeholder="Name*"/>
                <input id="email" type="email" name="email" className='contact__formInput' placeholder="Email address*" />
                <input id="tel" type="tel" name="tel" className='contact__formInput' placeholder="Telephone" />
                <textarea id="message" name="message" className='contact__textarea' placeholder="Your message*"/>
                <button type="submit" disabled={state.submitting} className='contact__formSubmit' >Submit</button>
            </form>
        </div>
    )
}
