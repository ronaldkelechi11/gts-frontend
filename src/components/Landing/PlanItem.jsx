import { motion } from "framer-motion"

/* eslint-disable react/prop-types */


const PlanItem = ({ name, percentage, minimum, maximum, duration, refferal }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className='w-full h-[350px] flex flex-col shadow-md rounded-md border-gray-200 border-2 border-solid cursor-pointer'>
            <div className="w-full h-[50%] flex flex-col justify-center items-center">
                <div className="text-xl">{name}</div>
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ type: "spring", duration: 0.5, repeat: Infinity }}
                    className="text-6xl text-primary font-extrabold">{percentage}</motion.div>
            </div>

            <div className="h-[50%] w-full flex flex-col items-center justify-evenly bg-primary">
                <div className="font-extrabold text-xl font-sans">Minimum:
                    <span className="font-normal"> ${minimum}</span>
                </div>
                <div className="font-extrabold text-xl font-sans">Maximum:
                    <span className="font-normal"> ${maximum}</span>
                </div>
                <div className="text-xl font-sans">AFTER
                    <span className="font-extrabold"> {duration}</span> hours
                </div>
                <div className="font-extrabold text-xl font-sans">Refferal:
                    <span className="font-normal"> {refferal}</span>
                </div>
            </div>
        </motion.div>
    )
}

export default PlanItem
