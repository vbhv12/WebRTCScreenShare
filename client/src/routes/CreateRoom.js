import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import './CreateRoom.css';
const CreateRoom = (props) => {

    const [code,setcode]=useState('');

    function create() {
        const id = code;
        props.history.push(`/room/${id}`);
    }

    return (
        <div className="TextField">
        <form > 
                 <label>Enter the Room Code you want to visit </label>
                 <input
                           type="text"
                           required 
                           value={code}
                           onChange={(e)=>setcode(e.target.value)}
                 />
        
        </form>
       <button onClick={create}>Create</button>
       </div>
       );
}

export default CreateRoom;