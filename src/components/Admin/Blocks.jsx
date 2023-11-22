/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react"

const Blocks = () => {
    const [users, setUsers] = useState([])
    const [totalProfit, setTotalProfit] = useState(0)
    const [totalVerified, setTotalVerified] = useState(0)
    const [pendingWithdrawals, setPendingWithdrawals] = useState(0)
    const [transactions, setTransactions] = useState([])
    const [withdrawals, setWithdrawals] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "admin")
            .then((result) => {
                setUsers(result.data.users)
                setTotalProfit(result.data.totalProfit)
                setWithdrawals(result.data.withdrawals)
                setPendingWithdrawals(result.data.pendingWithdrawals)
                setTotalVerified(result.data.totalVerified)
                setTransactions(result.data.transactions)
            }).catch((err) => {
                console.log(err);
            });
    }, [])


    return (
        <div className="flex w-full h-[180vh] md:h-auto md:grid md:grid-cols-3 flex-col md:flex-row gap-3 p-2 md:p-5">
            <div className="bg-black flex-1 h-52 rounded-xl shadow-xl flex flex-col justify-center items-center gap-3">
                <div className="text-white font-poppins uppercase font-extrabold text-xl">Total Users</div>
                <div className="text-white font-poppins uppercase font-extrabold text-4xl">
                    {users.length}
                </div>
            </div>

            <div className="bg-blue-500 h-52 flex-1 rounded-xl shadow-xl flex flex-col justify-center items-center gap-3">
                <div className="text-white font-poppins uppercase font-extrabold text-xl">Total Profit</div>
                <div className="text-white font-poppins uppercase font-extrabold text-4xl">$ <span>{totalProfit}</span></div>
            </div>

            <div className="bg-primary h-52 flex-1 rounded-xl shadow-xl flex flex-col justify-center items-center gap-3">
                <div className="text-white font-poppins uppercase font-extrabold text-xl">Verified Transactions</div>
                <div className="text-white font-poppins uppercase font-extrabold text-4xl">
                    <span>{totalVerified}</span>
                </div>
            </div>

            <div className="bg-blue-500 h-52 flex-1 rounded-xl shadow-xl flex flex-col justify-center items-center gap-3">
                <div className="text-white font-poppins uppercase font-extrabold text-xl">Pending Withdrawals</div>
                <div className="text-white font-poppins uppercase font-extrabold text-4xl">
                    <span>{pendingWithdrawals}</span>
                </div>
            </div>

            <div className="bg-black h-52 flex-1 rounded-xl shadow-xl flex flex-col justify-center items-center gap-3">
                <div className="text-white font-poppins uppercase font-extrabold text-xl">Total Withdrawals</div>
                <div className="text-white font-poppins uppercase font-extrabold text-4xl">
                    <span>{withdrawals.length}</span>
                </div>
            </div>


            <div className="bg-primary h-52 flex-1 rounded-xl shadow-xl flex flex-col justify-center items-center gap-3">
                <div className="text-white font-poppins uppercase font-extrabold text-xl">Total Deposits</div>
                <div className="text-white font-poppins uppercase font-extrabold text-4xl">
                    <span>{transactions.length}</span>
                </div>
            </div>
        </div >
    )
}

export default Blocks
