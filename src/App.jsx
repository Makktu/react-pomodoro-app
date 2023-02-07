import React, { useState } from "react";
import Button from "./components/Button";
import Timer from "./components/Timer";
import Apple from "./assets/Apple.svg";

import "./App.css";

function App(props) {
    let theTimer = ["25", "00", false];
    let timerOn;

    const buttonClicked = (trueOrFalse) => {
        if (trueOrFalse) timerOn = true;
        if (!trueOrFalse) timerOn = false;
    };

    return (
        <>
            <div className="App">
                <h1>McPomodoro</h1>
                <div>
                    <img className="big_apple" src={Apple}></img>
                </div>
                <div>
                    <Timer time={theTimer} timerOn={timerOn} />
                </div>
                <div className="all_buttons">
                    <Button type="start" buttonClicked={buttonClicked} />
                    <br />
                    <br />
                    <Button type="stop" buttonClicked={buttonClicked} />
                </div>
            </div>
        </>
    );
}

export default App;
