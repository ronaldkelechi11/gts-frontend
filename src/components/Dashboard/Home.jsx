import { useNavigate } from "react-router-dom";
import SideNavbar from "./SideNavbar";
import { useEffect } from "react";


const Home = () => {
    const navigate = useNavigate();

    // To make sure the user logged in the right way
    useEffect(() => {
        if (import.meta.env.VITE_SAFETY_KEY != true) {
            alert("Illegal Logging in");
            navigate("/login")
        }
    }, [])

    return (
        <>
            <SideNavbar />
            <div className="w-screen h-screen flex flex-col bg-white p-2">
                <div className="font-extrabold text-center text-3xl font-poppins">Dashboard</div>
            </div>
        </>
    )
}

export default Home
