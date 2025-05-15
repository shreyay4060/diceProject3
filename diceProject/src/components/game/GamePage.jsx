import React, { useState } from "react";
import Button from "../Home/Button";
import styles from "./GamePage.module.css";

export default function GamePage(props) {
    const [dice, setDice] = useState(1);
    const [score, setScore] = useState(0);
    const [value, setValue] = useState();
    const [click, setClick] = useState(false);

    function changeNum() {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        setDice(randomNum);

        if (value === randomNum) {
            setScore((prev)=>prev + randomNum);
        } else {
            setScore((prev)=>prev - 1);
        }
    }

    function clicked(newValue) {
        setValue(newValue);
        setClick(true);
    }

    const [rule,setRule]=useState(false)

    function showRules(){
        setRule((prev)=>!prev)

    }
    function resetScore(){
        setScore(0)
    }

    return (
        <div className={styles.container} id="props.id">
            <div className={styles.div}>
                <div className="score">
                    <h1>{score}</h1>
                    <p>Score</p>
                </div>

                <div className="select-num">
                    {!click && <p style={{color:"red"}}>You have not selected any number</p>}
                    <ul>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <li key={num} onClick={() => clicked(num)}>{num}</li>
                        ))}
                    </ul>
                    <h3>Select Number</h3>
                    {click && <h3>Selected Number is: {value}</h3>}
                </div>
            </div>

            <div className="dicee">
                
                <div className="dice">
                    <div className="img"  onClick={changeNum}>
                        <img height="150px" src={`/images/dice${dice}.png`} alt={`Dice ${dice}`} />
                    </div><br />
                    <h3>Click on dice to roll</h3><br />
                    <Button name="Reset Score" handleClick={resetScore}/><br />
                    <Button name="Show Rules" handleClick={showRules} />
                    <br />
                    <br />
                    {rule && 
                    <div className={styles.rules}>

                    <h2>Rules : How to play dice game </h2>
                    <p>Select any number</p>
                    <p>Click on dice image</p>
                    <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                    <p>if you get wrong guess then  1 point will be dedcuted</p>
                    </div>
            }
                </div>
            </div>
            <br /><br />
            <button style={customeStyle} onClick={props.onClick}>Go Back</button>
        </div>
    );
}

const customeStyle={
    padding : "10px 0px",
    backgroundColor: "gray",
    color : "white",
    border : "1px solid white"
}
