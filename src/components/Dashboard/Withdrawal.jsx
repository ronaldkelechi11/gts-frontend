import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CancelButton from './CancelButton'

const Withdrawal = () => {
    const navigate = useNavigate()
    const { username } = useParams()
    const [showing, setShowing] = useState(false)
    const [WithdrawalAmount, setWithdrawalAmount] = useState(0)
    const [walletAddress, setWalletAddress] = useState("")
    const [coins, setCoins] = useState([
        { name: "Choose me", address: "" },
        { name: "USDT Trc 20", address: "TS5D4hJCZkuXL8w45MMqBtHPxrc4gQ1crc" },
        { name: "Bitcoin", address: "1DNmBYKPbhCUcbd5TqiRiMDNTzjDKC19Kv" },
        { name: "Litecoin", address: "0x924c316d09408d60c44f020acb9e78256341245c" },
        { name: "BNB Bep 20", address: "0x924c316d09408d60c44f020acb9e78256341245c" }
    ])

    function whineClient(e) {
        e.preventDefault();
        setShowing(!showing)
    }

    return (
        <div className='w-screen h-screen flex flex-col justify-center bg-[rgba(0,0,0,0.5)]'>

            <CancelButton />

            <div className={showing ? "flex items-center w-screen p-2 rounded-xl" : 'hidden'}>
                <div className="bg-white w-full p-2 roundex-xl flex flex-col gap-3">
                    <img src="/assets/white_logo.JPG" className="w-32 h-32 self-center" />
                    <div className="self-start text-xl font-poppins">
                        Hello <strong className='font-extrabold'>{username},</strong> <br />
                        You have requested to withdraw the sum of ${WithdrawalAmount}.<br />
                    </div>
                    <button className="bg-primary font-poppins font-extrabold h-[50px] rounded-xl te" onClick={(e) => { e.preventDefault(); navigate(-1) }}>Dashboard</button>
                </div>
            </div>


            <div className="w-screen p-2">
                <div className={showing ? "hidden" : "h-full w-full bg-white md:rounded-xl flex flex-col justify-between gap-5 p-2"}>
                    <div className="text-black text-xl text-center font-extrabold font-poppins">Select Withdrawal Amout:</div>
                    <form className='flex flex-col gap-3' onSubmit={whineClient}>
                        <input className="h-[50px] w-full border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="number" placeholder="$100" value={WithdrawalAmount} onChange={(e) => { setWithdrawalAmount(e.target.value) }}
                            min={100} title='You can only withdraw $100 to $300 daily' required />

                        <select
                            className="w-full h-[50px] p-2 font-poppins outline-none border-primary border-solid border rounded-xl" >
                            {coins.map(coin => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <option >
                                        {coin.name}
                                    </option>
                                );
                            })}
                        </select>

                        <input className="h-[50px] w-full border-primary border-solid border rounded-xl p-2 font-poppins outline-none" type="text" placeholder="Wallet Address" value={walletAddress} onChange={(e) => { setWalletAddress(e.target.value) }} minLength={12} maxLength={45} required />


                        <input type="submit" className="bg-primary font-poppins font-extrabold h-[50px] rounded-xl" value="Withdraw" />
                    </form>
                </div>
            </div>


            <div className='w-screen bg-primary fixed bottom-0 flex justify-center items-center p-3 md:p-5'>
                <div className="font-extrabold uppercase text-center">Copyright © Global Technology Services, 2019.</div>
            </div>
        </div >
    )
}

export default Withdrawal

