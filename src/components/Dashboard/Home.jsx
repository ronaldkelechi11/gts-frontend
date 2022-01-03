import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Plans from "../Landing/Plans";
import axios from "axios";


const Home = () => {
    const navigate = useNavigate();
    var { username } = useParams()

    useEffect(() => {

    }, [])

    const [user, setUser] = useState({
        username: "",
        email: "",
        telephone: "",
        password: '',
        balance: 0,
        refferalCode: "",
        refferals: [{}]
    })

    axios.get(import.meta.env.VITE_BACKEND_URL + "dashboard/" + username)
        .then((result) => {
            setUser(result.data)
        }).catch((err) => {
            console.log(err);
            // navigate('/signup')
        });

    return (
        <>
            <div className="w-screen flex flex-col gap-5 bg-white">
                <div className="bg-primary w-screen h-14 uppercase flex justify-center items-center text-2xl text-white font-poppins font-extrabold">Dashboard</div>

                <div className="flex w-full h-screen md:h-auto flex-col md:flex-row gap-3 p-2 md:p-5">
                    <div className="bg-black flex-1 h-52 rounded-xl shadow-xl flex flex-col justify-center items-center gap-3">
                        <div className="text-white font-poppins uppercase font-extrabold text-xl">Active Balance</div>
                        <div className="text-white font-poppins uppercase font-extrabold text-4xl">$ <span>{user.balance}</span></div>
                    </div>

                    <div className="bg-blue-500 h-52 flex-1 rounded-xl shadow-xl flex flex-col justify-center items-center gap-3">
                        <div className="text-white font-poppins uppercase font-extrabold text-xl">Profit</div>
                        <div className="text-white font-poppins uppercase font-extrabold text-4xl">$ <span>{"0"}</span></div>
                    </div>

                    <div className="bg-primary h-52 flex-1 rounded-xl shadow-xl flex flex-col justify-center items-center gap-3">
                        <div className="text-white font-poppins uppercase font-extrabold text-xl">Affliate Bonus</div>
                        <div className="text-white font-poppins uppercase font-extrabold text-4xl">$ <span>{"0"}</span></div>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-evenly">
                    <div className="bg-primary rounded-xl shadow-lg p-[10px_20px] md:p-[20px_40px] cursor-pointer hover:scale-125 hover:text-white text-xl font-poppins">Withdraw </div>
                    <Link to="deposit" className="bg-blue-500 rounded-xl shadow-lg p-[10px_20px] md:p-[20px_40px] cursor-pointer hover:scale-125 hover:text-white text-xl font-poppins">Deposit</Link>
                </div>


                <div className="w-full flex flex-col p-2 md:p-5 bg-black">
                    <div className="text-3xl text-white font-poppins font-extrabold text-center">Refferal Link</div>
                    <div className="text-center text-white">Share this link to get bonus from Reffering other&apos;s to use our platform</div>
                    <div className="text-white self-center p-2 m-2 border-white border-solid border-2 rounded-lg">{user.refferalCode}</div>
                </div>

                <Plans />

            </div>
        </>
    )
}

export default Home
