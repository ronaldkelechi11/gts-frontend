import { motion } from "framer-motion"
import BackButton from "./BackButton"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Signup = () => {
    const naviagte = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [password, setPassword] = useState("")

    function goToLogin() {
        naviagte("/login")
    }

    function signup() {
        var newUser = {
            name: name,
            email: email,
            telephone: telephone,
            password: password
        }
        console.log(newUser);
        axios.post(import.meta.env.VITE_BACKEND_URL + "/signup", { newUser: newUser })
            .then((result) => {
                console.log(result.userId);
                naviagte("/dashboard/" + result.userId)
            }).catch((err) => {
                console.log(err);
                alert("There was an error while trying to SignUp please try again or contact customer service.")
            });
    }
    return (
        <>
            <BackButton />
            <div className='w-screen h-screen bg-white flex flex-row items-center'>
                {/* First Section */}
                <div className="w-screen h-min flex flex-col justify-between items-center gap-10 p-3 md:p-5 md:w-[50%]">
                    <div className="flex flex-col items-center">
                        <div className="text-black uppercase text-3xl font-extrabold font-poppins">Sign Up</div>
                        <div className="text-gray-300 text-center">Get ready to join the top leading Investment
                            platform in the world.</div>
                    </div>


                    <form className="flex flex-col w-full gap-3">
                        <input className="h-[50px] border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="text" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} minLength={3} />

                        <input className="h-[50px] border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                        <input className="h-[50px] border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="tel" placeholder="Telephone" value={telephone} onChange={(e) => { setTelephone(e.target.value) }} />

                        <input className="h-[50px] border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </form>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={signup}
                        className="h-[50px] w-full uppercase bg-primary rounded-xl p-2 font-poppins">
                        Sign Up
                    </motion.button>
                    <div className="font-poppins text-center">Don&apos;t you already have an account? <br /> <span
                        onClick={goToLogin} className="text-primary underline cursor-pointer">Sign Up Here</span></div>
                </div>

                {/* Second Section */}
                <div className="hidden md:flex md:h-screen md:w-[50%] bg-primary bg-center bg-cover bg-no-repeat"></div>
            </div>
        </>
    )
}

export default Signup
