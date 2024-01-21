import React from "react";
import HomeView from "./letsPlay";

let isPlayBoard = false;

function PlayerSelect () {
    return(
        <div className="text-white  background-dark">
            {isPlayBoard ? 
               
               <div>  Lets code</div>
            :
                <HomeView />
                
            }
           
        </div>
    )
}

export default PlayerSelect;