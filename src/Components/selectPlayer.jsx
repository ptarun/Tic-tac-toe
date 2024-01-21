import React from "react";
import HomeView from "./letsPlay";

let isPlayBoard = false;

function PlayerSelect () {
    return(
        <div className="text-white  background-dark">
            {isPlayBoard ? 
               
               <div className="center-align  justify-content-cente bg-white">  Lets code</div>
            :
                <HomeView />
                
            }
           
        </div>
    )
}

export default PlayerSelect;