import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai";


const SideNavbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div
                onClick={() => { setIsOpen(!isOpen) }}
                className="w-screen h-12 bg-primary text-black flex justify-start items-center p-2"
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
        <div className="h-screen w-56 bg-primary flex flex-col">

        </div>
    )
}

export default SideNavbar
