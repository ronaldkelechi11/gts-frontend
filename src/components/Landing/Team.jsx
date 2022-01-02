import TeamItem from "./TeamItem"


const Team = () => {
    return (
        <div id="team" className='w-screen bg-white  p-2 md:p-5'>
            <div className="text-black font-extrabold font-poppins uppercase text-center text-3xl md:text-5xl">Meet the Team</div>
            <div className="text-gray-400 text-center font-popins">Get to know the minds behind this great company</div>

            <div className="w-full h-full mt-2 flex gap-3 flex-col md:grid md:grid-cols-3">
                <TeamItem image={"/src/assets/team-2.jpg"} name={"David Krugger"} position={"C.E.O"} />
                <TeamItem image={"/src/assets/team-31.jpg"} name={"Japser Frake"} position={"Regional Manager U.S.A"} />
                <TeamItem image={"/src/assets/team-21.jpg"} name={"Fiona Alabaska"} position={"Marketing Director"} />
                <TeamItem image={"/src/assets/team-34.jpg"} name={"Felicia Braca"} position={"Finicial Adviser"} />
                <TeamItem image={"/src/assets/team-35.jpg"} name={"Alejandro Ramirez"} position={"Market Analysis Adviser"} />
                <TeamItem image={"/src/assets/team-4.jpg"} name={"Patricia Izambard"} position={"Marketing Strategist"} />
            </div>
        </div>
    )
}

export default Team
