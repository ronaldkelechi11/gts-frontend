import { motion } from "framer-motion"
import BackButton from "./BackButton"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function goToSignup() {
        navigate("/signup")
    }

    function login() {
        var user = {
            email: email,
            password: password
        }
        console.log(user);
        axios.post(import.meta.env.VITE_BACKEND_URL + "login", { user: user })
            .then((result) => {
                console.log(result.userId);
                navigate("/dashboard/" + result.userId)
            }).catch((err) => {
                console.log(err);
                alert("Error while trying to Login. Please try again later.")
            });
    }
    return (
        <>
            <BackButton />
            <div className='w-screen h-screen bg-white flex flex-row items-center'>
                {/* First Section */}
                <div className="w-screen h-min flex flex-col justify-between items-center gap-10 p-3 md:p-5 md:w-[50%]">
                    <div className="flex flex-col items-center">
                        <div className="text-black uppercase text-3xl font-extrabold font-poppins">Login</div>
                        <div className="text-gray-300 text-center">Get back to earning big with us. We miss you</div>
                    </div>


                    <form className="flex flex-col w-full gap-3">

                        <input className="h-[50px] border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} minLength={2} maxLength={255} />

                        <input className="h-[50px] border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} minLength={8} maxLength={64} />
                    </form>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={login}
                        className="h-[50px] w-full uppercase bg-primary rounded-xl p-2 font-poppins">
                        Login
                    </motion.button>
                    <div className="font-poppins text-center">Do you already have an account? <span
                        onClick={goToSignup} className="text-primary underline cursor-pointer">Login Here</span></div>
                </div>

                {/* Second Section */}
                <div className="hidden md:flex md:h-screen md:w-[50%] bg-primary bg-center bg-cover bg-no-repeat"></div>
            </div>
        </>
    )
}

export default Login
