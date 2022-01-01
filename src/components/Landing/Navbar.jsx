import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <div className='w-screen flex flex-row gap-2 justify-center items-center p-2 md:p-4'>


            <div className="hidden md:flex flex-row gap-3">
                <motion.a whileHover={{ scale: 1.1, color: "white" }} href="" className="font-poppins text-lg text-white">Home</motion.a>
                <motion.a whileHover={{ scale: 1.1, color: "white" }} href="/#plans" className="font-poppins text-lg text-white">Plans</motion.a>
                <motion.a whileHover={{ scale: 1.1, color: "white" }} href="/#about" className="font-poppins text-lg text-white">About Us</motion.a>
                <motion.a whileHover={{ scale: 1.1, color: "white" }} href="/#team" className="font-poppins text-lg text-white">Team</motion.a>
                <motion.a whileHover={{ scale: 1.1, color: "white" }} href="/#contact" className="font-poppins text-lg text-white">Contact</motion.a>
            </div>


        </div>
    )
}

export default Navbar
