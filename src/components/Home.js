import React from "react";
import {useNavigate} from "react-router-dom";

function Home(){

    const [roomCode,setRoomCode] = React.useState("");
    const navigate = useNavigate();
    const submitCode = (event)=>{
        event.preventDefault();
        navigate(`room/${roomCode}`);
    }

    return(
        <div>
            <form action="" onSubmit={submitCode}
            className="flex flex-col items-center justify-center"
            >
                <label htmlFor="" className="font-bold text-[20px] pt12">Enter room Code</label>
                <input type="text"
                       required
                       placeholder="Enter room code"
                       value={roomCode}
                       onChange={
                           (event)=>setRoomCode(event.target.value)
                       }
                       className="bg-blue-500 placeholder:text-white py-2 w-[16rem]
                       rounded-full pl-8 mt-4"
                />
                <button type="submit"
                className="bg-orange-500 rounded-[0.5-rem] mt-4 py-1.5 px-4 font-bold"
                >Enter room</button>
            </form>
        </div>
    )
}
export default Home;