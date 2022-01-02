/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6"


const TransactionWrapper = () => {
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
        <div className="h-screen w-full p-3 flex flex-col gap-3">
            <div className="text-center text-2xl">Transactions</div>
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

    function updateTransaction() {
        axios.put(import.meta.env.VITE_BACKEND_URL + "admin/" + transaction._id)
            .then((result) => {
                alert("Transaction Successfully updated. Please refresh the browser")
            }).catch((err) => {
                alert("Error verifying transaction try again later or contact the developer")
                console.log(err);
            });
    }

    return (
        <div className="w-full rounded-lg shadow-xl bg-white flex flex-col gap-2 p-3">
            <div className="text-xl">Amount: <span> ${transaction.amount}</span></div>
            <div className="">Category: <span>{transaction.category}</span></div>
            <div className="">Payment Coin: <span>{transaction.coin}</span></div>
            <div onClick={updateTransaction} className={transaction.verified ? "text-green-500" : "text-red-500"}>{transaction.verified ? <FaThumbsUp /> : <FaThumbsDown />}</div>
            <img className="h-[400px]" src={import.meta.env.VITE_BACKEND_URL + "public/images/" + transaction.file} />
        </div>
    )
}

export default TransactionWrapper
