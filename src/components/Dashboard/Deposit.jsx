import { useState, useEffect } from "react"
import CancelButton from "./CancelButton"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const Deposit = () => {
    const navigate = useNavigate()
    const { username } = useParams()

    const [walletAddress, setWalletAddress] = useState("")
    const [file, setFile] = useState()
    const [category, setCategory] = useState("Basic Plan")
    const [amount, setAmount] = useState(0)
    const [cryptoCoin, setCryptoCoin] = useState("Bitcoin")


    const [coins, setCoins] = useState([
        { name: "Choose me", address: "" },
        { name: "USDT Trc 20", address: "TS5D4hJCZkuXL8w45MMqBtHPxrc4gQ1crc" },
        { name: "Bitcoin", address: "1DNmBYKPbhCUcbd5TqiRiMDNTzjDKC19Kv" },
        { name: "Litecoin", address: "0x924c316d09408d60c44f020acb9e78256341245c" },
        { name: "BNB Bep 20", address: "0x924c316d09408d60c44f020acb9e78256341245c" }
    ])

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

    function createNewDeposit(e) {
        e.preventDefault();
        const formData = new FormData()
        formData.append("coin", cryptoCoin)
        formData.append("file", file)
        formData.append("category", category)
        formData.append("amount", amount)


        axios.post(import.meta.env.VITE_BACKEND_URL + "dashboard/" + username + "/deposit", formData)
            .then((result) => {
                navigate(-1)
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.5)]'>
            <CancelButton />

            <div className="w-screen p-2 ">
                <div className="h-full w-full bg-white md:rounded-xl flex flex-col justify-between gap-5 p-2">
                    <div className="text-black text-xl text-center font-extrabold font-poppins">Select Amout:</div>
                    <form className="w-full flex flex-col gap-3">
                        <input className="h-[50px] w-full border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="number" placeholder="$100" value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                        <div className="text-black">You are going for the <span className="text-green-400 font-extrabold">{category}</span></div>
                    </form>

                    <select onChange={(e) => { setWalletAddress(e.target.value) }}
                        className="w-full h-[50px] p-2 font-poppins outline-none border-primary border-solid border rounded-xl" >
                        {coins.map(coin => {
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <option value={coin.address}>
                                    {coin.name}
                                </option>
                            );
                        })}
                    </select>


                    <div className="text-black text-sm font-extrabold text-center border rounded-xl p-2">{walletAddress}</div>

                    <div className="text-center">You are to make a payment of <span className="font-extrabold">${amount}</span> using your selected crypto currency. Screenshot and upload the proof of payment. Then wait for 24 hours for our staff to verify if. Thank you</div>

                    <input className="self-center bg-primary font-poppins file:border-none file:bg-black file:text-white h-[50px] file:h-full rounded-lg file:cursor-pointer" type="file" accept="image/*" required onChange={(e) => { setFile(e.target.files[0]) }} />


                    <button onClick={createNewDeposit} className="bg-primary font-poppins font-extrabold h-[50px] rounded-xl">Done</button>
                </div>
            </div>


            <div className='w-screen bg-primary fixed bottom-0 flex justify-center items-center p-3 md:p-5'>
                <div className="font-extrabold uppercase text-center">Copyright © Global Technology Services, 2019.</div>
            </div>
        </div >
    )
}



export default Deposit
