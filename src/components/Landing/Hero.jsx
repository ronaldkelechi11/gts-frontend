import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"

const Hero = () => {
    const navigate = useNavigate()

    function gotoSignup() {
        navigate("/signup")
    }
    function gotoLogin() {
        navigate("/login")
    }
    return (
        <div className='w-screen h-screen bg-heroPattern bg-center bg-cover bg-no-repeat flex flex-col gap-2 md:gap-5'>

            <div className="w-full h-full bg-[rgba(0,0,0,0.5)]">
                <Navbar />
                <div className="flex flex-col w-full h-full gap-3 justify-center items-center p-2 md:p-5">
                    <div className="text-white font-bold text-3xl md:text-5xl text-center">
                        Start Investing with as low as $50 and make up to 20% profit daily with <br />
                        <span className="text-primary">Global Technology Services Limited.</span>
                    </div>

                    <div className="text-white text-lg md:text-xl text-center">
                        Start your investment journey today and watch your money grow.
                    </div>
                    <div className="w-full flex flex-row gap-3 justify-center items-center mt-3">
                        <button onClick={gotoSignup} className="p-[10px_20px] text-black md:p-[20px_40px] bg-white rounded-3xl transition-all cursor-pointer">Sign Up</button>
                        <button onClick={gotoLogin} className="p-[10px_20px] md:p-[20px_40px] text-white border-white border-solid border-2 rounded-3xl cursor-pointer transition-all">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
