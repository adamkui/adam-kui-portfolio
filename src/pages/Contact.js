import {useState} from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [state, handleSubmit] = useForm("xrgrpaqn");
    const [toasted, setToasted] = useState(false);
    if (state.succeeded && !toasted) {
        setToasted(true);
        toast.success('✅ Your message was sent successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    } else if (state.errors.length){
        toast.error('❌ There was an error sending your message!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        })
    };

    return (
        <div className='contact' id='contact'>
            <h1 className='contact__title'>Contact</h1>
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
            <form onSubmit={handleSubmit} className='contact__form'>
                <label htmlFor="fullname" className='contact__formLabel'>Full Name</label>
                <input type="text" name="fullname" id="fullname" className='contact__formInput' defaultValue="Name"/>

                <label htmlFor="email" className='contact__formLabel'>Email Address</label>
                <input id="email" type="email" name="email" className='contact__formInput' defaultValue="Email address" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                
                <label htmlFor="tel" className='contact__formLabel'>Telephone</label>
                <input id="tel" type="tel" name="tel" className='contact__formInput' defaultValue="Telephone" />
                <ValidationError prefix="Telephone" field="tel" errors={state.errors} />
                
                <label htmlFor="message" className='contact__formLabel'>Message</label>
                <textarea id="message" name="message" className='contact__textarea' defaultValue="Your message"/>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                
                <button type="submit" disabled={state.submitting} className='contact__formSubmit' >Submit</button>
            </form>
        </div>
    )
}
