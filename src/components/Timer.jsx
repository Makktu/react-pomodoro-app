import { useState } from "react";
import "./Timer.css";
import Soundfx from "../assets/Uplong.wav";

const Timer = (props) => {
    const [timerState, setTimerState] = useState(false);
    let currentTimer = false;

    if (currentTimer !== props.timerOn) {
        if (props.timerOn) {
            console.log("Timer On From Parent!");
            currentTimer = props.timerOn;
        }
        if (!props.timerOn) {
            console.log("Timer Off From Parent!");
            currentTimer = props.timerOn;
        }
    }

    return (
        <>
            <div className="timer">{props.time[0] + ":" + props.time[1]}</div>
        </>
    );
};

export default Timer;
