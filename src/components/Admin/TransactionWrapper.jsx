/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TransactionWrapper = () => {
    const navigate = useNavigate()
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "admin")
            .then((result) => {
                setTransactions(result.data.transactions)
            }).catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <div className="h-auto w-full flex flex-col gap-3">


            <div className="text-end p-4 text-white bg-primary font-poppins text-3xl flex flex-row justify-between items-center">
                <FaArrowLeft size={24} color="white" onClick={() => { navigate(-1) }} />
                Transactions
            </div>


            <div className="flex flex-col gap-3">
                {
                    transactions.map(transaction => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <Transaction transaction={transaction} />
                        )
                    })
                }
            </div>
        </div>
    )
}




function Transaction({ transaction }) {
    const navigate = useNavigate()

    function updateTransaction() {
        axios.put(import.meta.env.VITE_BACKEND_URL + "admin/transaction/verified/" + transaction._id)
            .then((result) => {
                alert('Transaction Succesfully Updated')
                navigate(0)
            }).catch((err) => {
                alert("Error verifying transaction try again later or contact the developer")
                console.log(err);
            });
    }

    return (
        <div className="w-full rounded-lg shadow-xl bg-white flex flex-col gap-2 p-3">
            <div className="text-xl"><strong>Username:</strong> {transaction.user.username}</div>
            <div className="text-xl"><strong>Amount:</strong> <span> ${transaction.amount}</span></div>
            <div className="text-xl"><strong>Category:</strong> <span>{transaction.category}</span></div>
            <div className="text-xl"><strong>Payment Coin:</strong> <span>{transaction.coin}</span></div>

            <div onClick={updateTransaction}
                className={
                    transaction.verified ?
                        "bg-green-500 p-3 text-white rounded-xl text-xl w-fit cursor-pointer hover:scale-110" :
                        "bg-red-500 p-3 text-white rounded-xl text-xl w-fit cursor-pointer hover:scale-110"}>
                {transaction.verified ? 'Verified' : 'Un-Verified'}
            </div>

            <img className="h-[350px]" src={import.meta.env.VITE_BACKEND_URL + "public/images/" + transaction.file} />
        </div>
    )
}

export default TransactionWrapper
