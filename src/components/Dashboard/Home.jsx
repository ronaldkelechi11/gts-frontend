import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Plans from "../Landing/Plans";
import axios from "axios";
import Navbar from "./Navbar";


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
        profit: 0,
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
                <Navbar />
                <div className="text-3xl font-poppins text-center">Hey <strong>{username}</strong>,</div>

                <div className="flex w-full h-screen md:h-auto flex-col md:flex-row gap-3 p-2 md:p-5">
                    <div className="bg-black flex-1 h-52 rounded-xl shadow-xl flex flex-col justify-center items-center gap-3">
                        <div className="text-white font-poppins uppercase font-extrabold text-xl">Active Balance</div>
                        <div className="text-white font-poppins uppercase font-extrabold text-4xl">$ <span>{user.balance}</span></div>
                    </div>

                    <div className="bg-blue-500 h-52 flex-1 rounded-xl shadow-xl flex flex-col justify-center items-center gap-3">
                        <div className="text-white font-poppins uppercase font-extrabold text-xl">Profit</div>
                        <div className="text-white font-poppins uppercase font-extrabold text-4xl">$ <span>{user.profit}</span></div>
                    </div>

                    <div className="bg-primary h-52 flex-1 rounded-xl shadow-xl flex flex-col justify-center items-center gap-3">
                        <div className="text-white font-poppins uppercase font-extrabold text-xl">Affliate Bonus</div>
                        <div className="text-white font-poppins uppercase font-extrabold text-4xl">$ <span>{"0"}</span></div>
                    </div>
                </div>

                <div className="w-full flex flex-row gap-1 justify-evenly">
                    <Link to="withdrawal" className="bg-blue-500 rounded-xl shadow-lg p-[10px_20px] md:p-[20px_40px] cursor-pointer hover:scale-125 hover:text-white text-lg font-poppins">Withdraw </Link>

                    <Link to="transactions" className="bg-primary rounded-xl shadow-lg p-[10px_20px] md:p-[20px_40px] cursor-pointer hover:scale-125 hover:text-white text-lg font-poppins">Transactions</Link>

                    <Link to="deposit" className="bg-blue-500 rounded-xl shadow-lg p-[10px_20px] md:p-[20px_40px] cursor-pointer hover:scale-125 hover:text-white text-lg font-poppins">Deposit</Link>
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
