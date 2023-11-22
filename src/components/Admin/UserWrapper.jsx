import axios from 'axios'
import { useEffect, useState } from 'react'
import UserModal from './UserModal'

const UserWrapper = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND_URL + "admin")
            .then((result) => {
                setUsers(result.data.users)
            }).catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <div>
            <div className="p-2 md:p-5 text-4xl font-extrabold font-poppins">Users</div>

            <div className="h-full w-full flex flex-col gap-4 p-2 md:p-5">
                {
                    users.map(user => {
                        return (
                            <UserModal key={user._id} user={user} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserWrapper
