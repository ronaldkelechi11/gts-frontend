import SideNavbar from "./SideNavbar";

const Home = () => {
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
