
import { useState, useEffect } from "react"
import CancelButton from "./CancelButton"

const Deposit = () => {

    const [amount, setAmount] = useState()
    const [currencies, setcurrencies] = useState(["USDT", "Bitcoin", "Litecoind", "BNB Bep 20"])
    const [walletAddress, setWalletAddress] = useState("")
    const [category, setCategory] = useState("Basic Plan")

    useEffect(() => {
        if (amount >= 50) {
            setCategory("Basic Plan")
        }
        if (amount >= 500) {
            setCategory("Regular Plan")
        }
        if (amount >= 1000) {
            setCategory("Crypto Plan")
        }
        if (amount > 20000) {
            setCategory("VIP Plan")
        }
    }, [amount])


    return (
        <div className='w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.5)]'>
            <CancelButton />

            <div className="w-screen p-2 h-80">
                <div className="h-full w-full bg-white md:rounded-xl flex flex-col justify-between gap-3 p-2">
                    <div className="text-black text-xl text-center font-poppins">Select Amout:</div>
                    <form className="w-full">
                        <input className="h-[50px] w-full border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="number" placeholder="$100" value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                    </form>
                    <div className="text-black">You are going for the <span className="text-green-400 font-extrabold">{category}</span></div>


                    <select className="w-full h-[50px] outline-none border-primary border-solid border rounded-xl" placeholder="Crypto">
                    </select>

                    <div className="text-black text-2xl">{walletAddress}</div>

                    <button className="bg-primary font-poppins font-extrabold h-[50px] rounded-xl">Continue</button>
                </div>
            </div>



            <div className='w-screen bg-primary fixed bottom-0 flex justify-center items-center p-3 md:p-5'>
                <div className="font-extrabold uppercase text-center">Copyright © Global Technology Services, 2019.</div>
            </div>
        </div>
    )
}

export default Deposit
