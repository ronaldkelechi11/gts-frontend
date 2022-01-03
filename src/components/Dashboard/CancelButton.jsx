import { motion } from "framer-motion"
import { FaX } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const CancelButton = () => {
    const navigate = useNavigate()

    function cancel() {
        
    }
    return (
        <motion.div
            whileHover={{ scale: 1.4 }}
            className='w-12 h-12 rounded-xl bg-red-500 text-white fixed top-5 left-5 flex flex-col justify-center items-center cursor-pointer'>
            <FaX />
        </motion.div>
    )
}

export default CancelButton
