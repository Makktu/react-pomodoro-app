import React, { useState } from "react";
import Button from "./components/Button";
import Timer from "./components/Timer";
import Apple from "./assets/Apple.svg";

import "./App.css";

function App(props) {
    const startClicked = () => {
        console.log("CLICKED START");
    };

    let theTimer = ["25", "00", false];
    return (
        <>
            <div className="App">
                <h1>McPomodoro</h1>
                <img className="big_apple" src={Apple}></img>

                <Timer time={theTimer} />
                <div className="all_buttons">
                    <Button type="start" onClickStart={startClicked} />
                    <br />
                    <br />
                    <Button type="stop" />
                </div>
            </div>
        </>
    );
}

export default App;
