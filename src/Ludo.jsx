import { useState } from "react";

export default function Ludo(){
    let [moves,setMoves]=useState({ blue: 0,red:0,green:0,yellow:0});
    let [wmoves,showMoves]=useState(["no move"]);


        function inYellow(){
            // setMoves((prevValue)=>{
            //     return ({...prevValue, yellow: prevValue.yellow + 1});
            // });
            showMoves((prevMove)=>{
                return([ ...prevMove ,"yellow moves"]);
            });
            console.log(wmoves);

        }
        
    return(
        <>
        <h1>Ludo Game</h1>

        <p>Yellow Moves={moves.yellow}</p>
        <p>{wmoves}</p>
        <button onClick={inYellow}>+1</button>
        <p>Red Moves={moves.red}</p>
        <button>+1</button>
        <p>Blue Moves={moves.blue}</p>
        <button>+1</button>
        <p>Green Moves={moves.green}</p>
        <button>+1</button>
        </>
    )
}