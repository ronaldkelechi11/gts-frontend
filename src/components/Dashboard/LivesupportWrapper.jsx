/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";

const LivesupportWrapper = ({ messages }) => {
    const { username } = useParams()

    return (
        <div className='flex h-full flex-col bg-slate-50 gap-3 w-full p-2'>
            {messages?.map(message => {
                if (message.sender == username) {
                    return (<SentMessage message={message} key={message._id} />)
                }
                else {
                    return (<ReceivedMessage message={message} key={message._id} />)
                }
            })}
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

export default LivesupportWrapper
