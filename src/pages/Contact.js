import { useForm } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion"
import { titleAnim, fadeInList, fadeIn, swimInRight, fadeInListNoDelay } from '../animation';
import { useScroll } from '../components/useScroll';

export default function Contact() {
    const [state, handleSubmit] = useForm("xrgrpaqn");
    const [element, controls] = useScroll();

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
        <motion.div className='contact' id='contact' animate={controls} initial='hidden' ref={element}>
            <motion.h1 className='contact__title' variants={titleAnim}>Contact</motion.h1>
            <motion.p className='contact__description' variants={fadeIn}>Are you interested in working together?</motion.p>
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
            <motion.form onSubmit={(event) => sendRequest(event)} className='contact__form' variants={fadeInListNoDelay}>
                <motion.input type="text" name="fullname" id="fullname" className='contact__formInput' placeholder="Name*" variants={swimInRight} />
                <motion.input id="email" type="email" name="email" className='contact__formInput' placeholder="Email address*" variants={swimInRight} />
                <motion.input id="tel" type="tel" name="tel" className='contact__formInput' placeholder="Telephone" variants={swimInRight} />
                <motion.textarea id="message" name="message" className='contact__textarea' placeholder="Your message*" variants={swimInRight} />
                <motion.button type="submit" disabled={state.submitting} className='contact__formSubmit' variants={swimInRight} >Submit</motion.button>
            </motion.form>
        </motion.div>
    )
}
