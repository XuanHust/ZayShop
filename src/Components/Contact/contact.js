import './contact.scss'
import map from "../Images/map.JPG"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleNameInput = (event) => {
        setName(event.target.value)
    }
    const handleEmailInput = (event) => {
        setEmail(event.target.value)
    }
    const handleSubjectInput = (event) => {
        setSubject(event.target.value)
    }
    const handleMessageInput = (event) => {
        setMessage(event.target.value)
    }

    const setEmpty = () => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        toast.success("You Submit Successed!")
    }

    const handleButton = () => {
        name.length && email.length && subject.length ?
            setEmpty()
            :
            toast.error("Form is Empty!")
    }

    return (
        <div className='contact-container'>
            <div className='contact-title'>
                <h2>Contact Us</h2>
                <p>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='contact-map'>
                <img src={map} alt='Map'></img>
            </div>
            <div className='contact-form'>
                <form>
                    <div>
                        <label>
                            Name <br></br>
                            <input type="text" name="name" placeholder='Name'
                                value={name}
                                onChange={(event) => handleNameInput(event)}
                            />
                        </label>
                        <label>
                            Email <br></br>
                            <input type="text" name="email" placeholder='Email'
                                value={email}
                                onChange={(event) => handleEmailInput(event)}
                            />
                        </label>
                    </div>
                    <label className='subject'>
                        Subject <br></br>
                        <input type="text" name="subject" placeholder='Subject'
                            value={subject}
                            onChange={(event) => handleSubjectInput(event)}
                        />
                    </label>
                    <label className='message'>
                        Message <br></br>
                        <textarea placeholder='Message'
                            value={message}
                            onChange={(event) => handleMessageInput(event)}
                        ></textarea>
                    </label>
                    <button type='button' className='button'
                        onClick={() => handleButton()}
                    >Let's Talk</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;