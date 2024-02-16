import{useState}from "react";
import './Like.css'
export default function(){
    let [count,setCount]=useState(false);
    function inCount(){
        setCount(!count);
    }
    return(
        <>
        <div className="Main">
        <div className="box">
        <h1>Like Button</h1>
        <p onClick={inCount}>
        {
            count ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>
        }
        </p>
        </div>
        </div>
        </>
    );
}