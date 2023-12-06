/* eslint-disable react/prop-types */
import axios from "axios"
import { useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { HiOutlineUser } from "react-icons/hi"

const AllUsersList = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState()

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "admin")
            .then((result) => {
                setUsers(result.data.users)
            }).catch((err) => {
                console.log(err);
            });
    }, [])


    return (
        <div className="w-screen h-screen flex flex-col">
            <div className="w-full h-16 bg-primary flex flex-row justify-between items-center p-2">
                <FaArrowLeft color="white" size={24} onClick={() => { navigate(-1) }} />
                <p className="text-white font-poppins text-2xl">Messages</p>
            </div>

            <div className="h-full w-full flex flex-col gap-3 p-2">
                {users?.map(user => {
                    return (
                        <UserMessageItem key={user._id} user={user} />
                    )
                })}

            </div>

        </div>
    )
}


function UserMessageItem({ user }) {
    return (
        <Link to={user.username} className="w-full h-24 rounded-xl shadow-xl flex items-center gap-4 p-2">
            <div className="bg-primary rounded-full h-16 w-16 flex justify-center items-center text-2xl text-white">
                <HiOutlineUser />
            </div>
            <div className="flex flex-col">
                <div className="capitalize text-xl font-poppins">{user.username}</div>
            </div>
        </Link>
    )
}

export default AllUsersList
