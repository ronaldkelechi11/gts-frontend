/* eslint-disable react/prop-types */


const TeamItem = ({ image, name, position }) => {
    return (
        <div className="w-full h-[300px] flex flex-col shadow-xl">
            <img className="h-[70%] w-full" src={image} alt="" />
            <div className="h-[30%] w-full flex flex-col justify-center p-1 md:p-3">
                <div className="text-black text-2xl font-extrabold">{name}</div>
                <div className="text-black">{position}</div>
            </div>
        </div>
    )
}

export default TeamItem
