import Blocks from "../components/Admin/Blocks"
import Navbar from "../components/Admin/Navbar"
import UserWrapper from "../components/Admin/UserWrapper"

const Admin = () => {

    return (
        <div className="w-screen flex flex-col">
            <Navbar />
            <Blocks />
            <UserWrapper />
        </div>
    )
}

export default Admin
