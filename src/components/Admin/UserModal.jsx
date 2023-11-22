/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserModal = ({ user }) => {
    const navigate = useNavigate()
    const [balance, setBalance] = useState(user.balance)
    const [profit, setProfit] = useState(user.profit)
    const [updateButton, setUpdateButton] = useState(false)

    function updateUserInfo() {
        axios.put(import.meta.env.VITE_BACKEND_URL + 'admin/edit/' + user._id,
            { balance: balance, profit: profit })
            .then((result) => {
                alert(`Succesfully Update user ${user.username}`)
                navigate(0)
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className='w-full h-auto p-2 rounded-lg shadow-lg bg-white flex flex-col gap-2'>
            <div className="text-xl"><strong>Username: </strong>{user?.username}</div>

            <div className="text-xl"><strong>Email:</strong> {user?.email}</div>

            <div className="text-xl"><strong>Telephone:</strong> {user?.telephone}</div>

            <div className="flex flex-row items-center gap-2">
                <strong className="text-xl">Balance:</strong>$
                <input value={balance} type="number" onChange={(e) => { setUpdateButton(true), setBalance(e.target.value) }} className="border-2 border-gray-500 rounded-md w-full p-1" />
            </div>

            <div className="flex flex-row items-center gap-2 ">
                <strong className="text-xl">Profit:</strong>$
                <input value={profit} type="number" onChange={(e) => { setUpdateButton(true), setProfit(e.target.value) }} className="border-2 border-gray-500 rounded-md w-full p-1" />
            </div>

            <button className={updateButton ? 'bg-blue-500 h-12 rounded-xl' : 'bg-primary h-12 rounded-xl'} onClick={updateUserInfo}>Update</button>
        </div>
    )
}

export default UserModal
