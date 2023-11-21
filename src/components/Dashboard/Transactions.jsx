import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FaThumbsUp, FaThumbsDown, FaArrowLeft } from "react-icons/fa6"

const Transactions = () => {
    const navigate = useNavigate()
    const { username } = useParams()
    const [userTransactions, setUserTransactions] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "dashboard/" + username + "/transactions")
            .then((result) => {
                setUserTransactions(result.data.transactions)
            }).catch((err) => {
                console.log(err);
            });
    }, [])

    function goBack() {
        navigate(-1)
        console.log("I was clicked");
    }

    return (
        <>
            <div className="w-screen h-screen bg-white flex flex-col">
                <div
                    className="bg-primary w-screen h-14 flex justify-between items-center text-2xl text-white font-poppins font-extrabold p-2">
                    <FaArrowLeft onClick={goBack} />  <span className="text-center">Transactions</span>
                </div>

                {/* Transaction Wrapper */}
                <div className="h-full w-full p-3 flex flex-col gap-3">
                    {userTransactions.map(transaction => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <Transaction amount={transaction.amount} category={transaction.category} coin={transaction.coin} file={transaction.file} verified={transaction.verified} />
                        )
                    })
                    }
                </div>
            </div></>
    )
}



// eslint-disable-next-line react/prop-types
function Transaction({ amount, category, coin, file, verified, }) {
    return (
        <div className="w-full rounded-lg shadow-xl bg-white flex flex-col gap-2 p-3">
            <div className="text-xl">Amount: <span> ${amount}</span></div>
            <div className="">Category: <span>{category}</span></div>
            <div className="">Payment Coin: <span>{coin}</span></div>
            <div className={verified ? "text-green-500" : "text-red-500"}>{verified ? <FaThumbsUp /> : <FaThumbsDown />}</div>
        </div>
    )
}

export default Transactions
