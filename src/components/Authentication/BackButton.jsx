import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackButton = () => {

    const navigate = useNavigate()

    function goBack() {
        navigate("/")
    }
    return (
        <motion.div
            whileHover={{ scale: 1.4 }}
            onClick={goBack}
            className='w-12 h-12 rounded-xl bg-primary fixed top-5 left-5 flex flex-col justify-center items-center cursor-pointer'>
            <FaArrowLeft />
        </motion.div>
    )
}

export default BackButton
