

const About = () => {
    return (
        <div id='about' className='w-screen  bg-white p-2 md:p-5'>
            <div className="text-black font-extrabold font-poppins uppercase text-center text-3xl md:text-5xl">About Us</div>

            <div className="w-full h-full flex flex-col md:items-center md:flex-row">
                <div className="h-[50%] w-full md:w-[50%] md:h-full">
                    <img src="/assets/white_logo.JPG" alt="" />
                </div>
                <div className="h-auto w-full md:w-[50%] md:h-full"><strong>Global Technology Services</strong> also actively analyzes market trends and develops business
                    directions, which is associated with exploring the mining systems and trading in the crypto currency
                    markets. We have successfully engaged in trading activities on many world exchanges, such as OKCoin,
                    BTC-E and Bit stamp. As the main tool to trade we use Bitcoins, litecoins, dogecoin, dash and other
                    crypto currencies. <br /> It enables fast and easy direct transactions and allows instant exchange in the
                    most profitable way.

                    We have carefully analyzed the international financial market and take into account all the
                    preferences of investors to offer the best service with the most advanced and handy tools that will
                    undoubtedly make our project a simple, intuitive and attractive to proponents of online earnings.</div>
            </div>
        </div>
    )
}

export default About
