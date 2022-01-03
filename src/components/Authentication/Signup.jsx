import { motion } from "framer-motion"
import BackButton from "./BackButton"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Signup = () => {
    const naviagte = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [password, setPassword] = useState("")

    function goToLogin() {
        naviagte("/login")
    }

    function signup(e) {
        e.preventDefault();
        var user = {
            username: username,
            email: email,
            telephone: telephone,
            password: password
        }

        axios.post(import.meta.env.VITE_BACKEND_URL + "signup", { user })
            .then((result) => {
                console.log(result);
                sessionStorage.setItem(import.meta.env.VITE_SAFETY_KEY, true)
                naviagte("/dashboard/" + result.data)
            }).catch((err) => {
                if (err.response.status == 409) {
                    alert("That Email already exist")
                }
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


                    <form className="flex flex-col w-full gap-3" onSubmit={signup}>
                        <input className="h-[50px] border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="text" placeholder="Username" value={username} title="No Spaces allowed" pattern="^[^\s]+$" onChange={(e) => { setUsername(e.target.value) }} minLength={3} required />

                        <input className="h-[50px] border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} title="Please enter a valid Email address" pattern="[a-zA-Z0-9._%+-+@[a-zA-Z]{2,}]" required />

                        <input className="h-[50px] border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="tel" placeholder="Telephone" value={telephone} onChange={(e) => { setTelephone(e.target.value) }} required />

                        <input className="h-[50px] border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} required minLength={8} maxLength={64} autoComplete="false" />

                        <input className="h-[50px] border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="text" placeholder="Refferal Code" />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            type="submit"
                            className="h-[50px] w-full uppercase bg-primary rounded-xl p-2 font-poppins">
                            Sign Up
                        </motion.button>
                    </form>

                    <div className="font-poppins text-center">Already have an account? <br /> <span
                        onClick={goToLogin} className="text-primary underline cursor-pointer">Log In Here</span></div>
                </div>

                {/* Second Section */}
                <div className="hidden md:flex md:h-screen md:w-[50%] bg-primary bg-center bg-cover bg-no-repeat"></div>
            </div>
        </>
    )
}

export default Signup
