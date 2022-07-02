import React from "react";
import s from './Messages.module.css'
import Friends from "./Friends";
import Letters from "./Letters";

const Messages = () => {
    return(
        <div className={s.messages}>
            <div><Friends /> </div>
               
            
            <div> <Letters /> </div>
           
            
        </div>
    )
}
export default Messages;