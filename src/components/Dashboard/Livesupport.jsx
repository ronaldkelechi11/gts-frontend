import { useNavigate, useParams } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import LivesupportWrapper from "./LivesupportWrapper";
import axios from "axios";

const Livesupport = () => {
    const { username } = useParams()
    const navigate = useNavigate()
    const [message, setMessage] = useState()
    const [messages, setMessages] = useState([{ _id: 1, text: 'placeholder', sender: username, receiver: 'Admin' }])

    function goBack() {
        navigate(-1)
    }

    // get all messages
    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + 'dashboard/' + username + '/livesupport').
            then((result) => {
                setMessages(result.data)
            }).catch((err) => {
                console.log(err);
            });
    }, [messages])


    // send a message
    async function sendMessage() {
        await console.log(message);
        axios.post(import.meta.env.VITE_BACKEND_URL + 'dashboard/' + username + '/livesupport', {
            text: message, sender: username, receiver: 'Admin'
        }).
            then((result) => {
                console.log(result);
                setMessage('')
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className='bg-white w-screen h-screen flex flex-col'>
            <div className="w-full h-16 bg-primary flex flex-row justify-between items-center p-2">
                <FaArrowLeft color="white" size={24} onClick={goBack} />
                <p className="text-white font-poppins text-2xl">Live Support</p>
            </div>

            <LivesupportWrapper messages={messages} />

            <div className="fixed h-16 w-full flex flex-row bottom-0">
                <input type="text" className="w-[80%] border-[4px] outline-none border-primary p-1 font-poppins text-black" placeholder="Message..." value={message} onChange={(e) => { setMessage(e.target.value) }} />
                <div onClick={sendMessage} className="bg-primary text-white w-[20%] flex justify-center items-center font-poppins hover:scale-110 transition-transform"><HiArrowNarrowRight size={24} /></div>
            </div>
        </div>
    )
}

export default Livesupport
