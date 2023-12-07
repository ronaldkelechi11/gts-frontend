/* eslint-disable react/prop-types */
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { HiArrowNarrowRight } from "react-icons/hi"
import { useNavigate, useParams } from "react-router-dom"

const Message = () => {
    const dummy = useRef()
    const navigate = useNavigate()
    const { username } = useParams()
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState(
        [{ _id: 1, text: 'placeholder', sender: username, receiver: 'Admin' }]
    )


    useEffect(() => {
        dummy.current.scrollIntoView({ behaviour: 'smooth' })

        axios.get(import.meta.env.VITE_BACKEND_URL + 'admin/messages/' + username)
            .then((result) => {
                setMessages(result.data)
            }).catch((err) => {
                console.log(err);
            });
    }, [message, username])


    function sendMessage() {
        axios.post(import.meta.env.VITE_BACKEND_URL + 'admin/messages/' + username, {
            text: message, sender: 'Admin', receiver: username
        }).
            then((result) => {
                console.log(result);
                dummy.current.scrollIntoView({ behaviour: 'smooth' })
                setMessage('')
            }).catch((err) => {
                console.log(err);
            });
    }


    return (
        <div className="w-screen h-screen">
            <div className="w-full h-16 bg-primary fixed top-0 flex flex-row justify-between items-center p-2">
                <FaArrowLeft color="white" size={24} onClick={() => { navigate(-1) }} />
                <p className="text-white font-poppins text-2xl">{username}</p>
            </div>


            {/* Message Wrapper */}
            <div className="flex flex-col mt-16 bg-slate-50 gap-2 w-full p-2">
                {
                    messages.map(message => {
                        if (message.sender == "Admin") {
                            return (<SentMessage message={message} key={message._id} />)
                        }
                        else {
                            return (<ReceivedMessage message={message} key={message._id} />)
                        }
                    })
                }

                <div className="w-full h-16 flex justify-center items-center" ref={dummy}>
                    <div className="bg-slate-600 font-poppins text-sm text-white p-2 rounded-xl">
                        You are up-to-date
                    </div>
                </div>
            </div>


            <div className="fixed h-16 w-full flex flex-row bottom-0">
                <input type="text" className="w-[80%] border-[4px] outline-none border-primary bg-slate-50 p-1 font-poppins text-black" placeholder="Message..." value={message} onChange={(e) => { setMessage(e.target.value) }} />
                <div onClick={sendMessage} className="bg-primary text-white w-[20%] flex justify-center items-center font-poppins hover:scale-110 transition-transform"><HiArrowNarrowRight size={24} /></div>
            </div>
        </div>
    )
}


function SentMessage({ message }) {
    return (
        <div className="bg-green-400 self-end p-2 text-white font-poppins rounded-[10px_10px_0px_10px]">
            {message.text}
        </div>
    )
}

function ReceivedMessage({ message }) {
    return (
        <div className="bg-primary self-start p-2 text-white font-poppins rounded-[10px_10px_10px_0px]">
            {message.text}
        </div>
    )
}

export default Message
