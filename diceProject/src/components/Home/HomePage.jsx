import React, { useState } from "react";
import Button from "./Button";
import styles from "./HomePage.module.css";
import GamePage from "../game/GamePage";

export default function HomePage(){

  
    const[play,setPlay]=useState(false)
    function playing(){
        setPlay((prev)=>{
            return !prev;
        })
    }
    return <>
    {play==false ? <div className={styles.home}>
        <div className="section1">
            <img height="400px" src="/images/dices1.png" alt="dices" />
        </div>
        <div className="section2">
            <h1>DICE GAME</h1>
            <Button handleClick={()=>playing()} name="Play Now" />

        </div>
    </div>: <GamePage onClick={playing}/> }
    </>
}