import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    function toggleNav() {
        setIsOpen(!isOpen)
    }
    return (
        <div className='h-auto bg-primary z-50 w-full p-4 flex flex-wrap items-center justify-between sticky top-0 '>
            <NavLink reloadDocument className="text-white text-2xl md:text-3xl font-poppins">Admin</NavLink>

            <div className="hidden md:flex flex-row gap-5 text-primary">
                <NavLinks />
            </div>

            <div className="md:hidden p-2 transition-all cursor-pointer text-white" onClick={toggleNav}>{isOpen ?
                <FaX color="currentColor" size={24} /> :
                <AiOutlineMenu color="currentColor" size={24} />
            }
            </div>

            {isOpen &&
                <>
                    <div className="text-primary basis-full md:hidden">
                        <NavLinks />
                    </div>
                </>
            }
        </div>
    )
}

function NavLinks() {
    const navbarStyling = "hover:scale-[1.1] hover:text-blue-500 font-poppins text-[16px] cursor-pointer transition-all"
    return (
        <div className='text-2xl font- text-white flex flex-col justify-center md:flex-row gap-4 items-center'>
            <Link reloadDocument className={navbarStyling}>Home</Link>
            <Link className={navbarStyling} to="withdrawals">Withdrawals</Link>
            <Link className={navbarStyling} to="transactions">Transactions</Link>
            <a className={navbarStyling} href="/" onClick={() => { alert("Your are about to be logged out of the Admin account") }}>Log Out</a>
        </div>
    )
}

export default Navbar
