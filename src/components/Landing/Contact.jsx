import axios from "axios"
import { useState } from "react"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [message, setMessage] = useState("")


    function submitContactForm() {
        var contactMessage = {
            name: name,
            email: email,
            telephone: telephone,
            message: message
        }
        axios.post(import.meta.env.VITE_BACKEND_URL + "home/contact", { contactMessage })
            .then((result) => {
                console.log(result);
                successfulMessage()
            }).catch((err) => {
                console.log(err);
                unsuccessfullMessage()
            });
    }

    function successfulMessage() {
        alert("Thank you for Contacting Us. Your message has been received and would be processed immediately.")
        setName("")
        setEmail("")
        setTelephone("")
        setMessage("")
    }

    function unsuccessfullMessage() {
        alert("There was an error while trying to send the message. Please try again later.")
    }
    return (
        <div id="contact" className="w-screen h-screen flex flex-col gap-3 md:gap-4 bg-white p-2 md:p-5 ">
            <div className="text-black text-center uppercase font-poppins text-3xl md:text-5xl">Contact Us</div>
            <div className="text-gray-400 text-sm font-poppins text-center">Feel free to contact us to get more information or lay a complaint.</div>


            <div className="w-full h-full flex flex-col justify-evenly">

                <input className="h-[60px] p-2 font-poppins border-b border-gray-300 text-lg text-black placeholder:text-gray-400 outline-none" type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />


                <input className="h-[60px] p-2 font-poppins border-b border-gray-300 text-lg text-black placeholder:text-gray-400 outline-none" type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />

                <input className="h-[60px] p-2 font-poppins border-b border-gray-300 text-lg text-black placeholder:text-gray-400 outline-none" type="tel" placeholder="Telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />

                <textarea className="h-[90px] p-2 font-poppins border-b border-gray-300 text-lg text-black placeholder:text-gray-400 outline-none" cols="8" placeholder="Message"
                    value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                <button className="bg-primary h-[60px] font-poppins uppercase rounded-xl shadow-sm font-extrabold" onClick={submitContactForm} type="submit">Done</button>
            </div>
        </div>
    )
}

export default Contact
