/* eslint-disable react/prop-types */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Withdrawals = () => {
    const navigate = useNavigate()
    const [withdrawals, setWithdrawals] = useState()

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "admin")
            .then((result) => {
                setWithdrawals(result.data.withdrawals)
            }).catch((err) => {
                console.log(err);
            });
    }, [])
    return (
        <div className='h-auto w-full flex flex-col gap-3'>
            <div className="text-end p-4 text-white bg-primary font-poppins text-3xl flex flex-row justify-between items-center">
                <FaArrowLeft size={24} color="white" onClick={() => { navigate(-1) }} />
                Withdrawals
            </div>

            <div className="flex flex-col gap-3">
                {
                    withdrawals?.map(withdrawal => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <Withdrawal key={withdrawal._id} withdrawal={withdrawal} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Withdrawals

function Withdrawal({ withdrawal }) {
    const navigate = useNavigate()


    function verifyWithdrawal() {
        axios.put(import.meta.env.VITE_BACKEND_URL + 'admin/withdrawal/verified/' + withdrawal?._id)
            .then((result) => {
                if (result.status == 200)
                    alert('Withdrawal Verified')
                navigate(0)
            }).catch((err) => {
                alert('Could not verify withdrawal')
            });
    }

    return (
        <div className="w-full rounded-lg shadow-xl bg-white flex flex-col gap-2 p-3">
            <div className="text-xl"><strong>Username:</strong> {withdrawal.user?.username}</div>
            <div className="text-xl"><strong>Amount:</strong> ${withdrawal.amount}</div>
            <div className="text-xl"><strong>Coin:</strong> {withdrawal.coin}</div>
            <div className="text-xl text-ellipsis"><strong>Wallet Address:</strong> {withdrawal.walletAddress}</div>
            <div onClick={verifyWithdrawal}
                className={
                    withdrawal.verified ?
                        "bg-green-500 p-3 text-white rounded-xl text-lg w-fit cursor-pointer hover:scale-110" :
                        "bg-red-500 p-3 text-white rounded-xl text-lg w-fit cursor-pointer hover:scale-110"}>
                {withdrawal.verified ? 'Verified' : 'Un-Verified'}
            </div>
        </div>
    )
}