import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"


const CallToAction = () => {
    const navigate = useNavigate()

    function goToSignUp() {
        navigate("/signup")
    }
    return (
        <div className='w-screen bg-[url("/src/assets/cta-bg.jpg")] bg-center bg-cover bg-no-repeat'>
            <div className="w-full h-full flex flex-col justify-center gap-3 items-center bg-[rgba(0,0,0,0.7)] p-2 md:p-5">
                <div className="uppercase text-primary text-3xl md:text-5xl font-poppins">Join Us</div>
                <div className="text-center text-white font-poppins text-sm">
                    Our Company is one of the fast growing Investment companies worldwide. We Accept Our Investor around the globe. Don&apos;t waste time thinking of where to grow your money.
                    Sign up now.
                </div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={goToSignUp}
                    className="self-center text-black font-poppins uppercase rounded-3xl bg-primary p-[10px_20px] md:p-[20px_40px]">Sign Up</motion.button>
            </div>
        </div>
    )
}

export default CallToAction
