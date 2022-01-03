
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Notfound = () => {

    return (
        <div className='bg-primary w-screen h-screen flex flex-col justify-center items-center'>
            <div className="text-black text-4xl">404 - Not Found</div>
        </div>
    )
}

export default Notfound
