import React from "react";
import Player from "./player";
import players from "./players";

const PlayerList = () =>{
    return(
        <div>
            {players.map((ele) => (
                <div>
                    <Player key={ele.name} {...ele}/>
                </div>
            ))}
        </div>
    );
};
export default PlayerList;