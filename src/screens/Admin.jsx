import Blocks from "../components/Admin/Blocks"
import Header from "../components/Admin/Header"
import TransactionWrapper from "../components/Admin/TransactionWrapper"

const Admin = () => {

    return (
        <div className="w-screen flex flex-col">
            <Header />
            <Blocks />
            <TransactionWrapper />
        </div>
    )
}

export default Admin
