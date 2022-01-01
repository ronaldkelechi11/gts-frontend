import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai";


const SideNavbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div
                onClick={() => { setIsOpen(!isOpen) }}
                className="w-12 h-12 bg-primary rounded-xl text-black flex justify-center items-center"
            >
                <AiOutlineMenu size={24} color="currentColor" />
            </div>

            {isOpen &&
                <NavLinks />
            }
        </>
    )
}

function NavLinks() {
    return (
        <div className="h-full w-56 bg-primary flex flex-col">

        </div>
    )
}

export default SideNavbar
