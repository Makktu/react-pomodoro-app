import "./Timer.css";
import Soundfx from "../assets/Uplong.wav";

const Timer = (props) => {
    console.log(props);
    props.time[1] ? console.log("TimerOn") : console.log("TimerOff");
    // if (props.time[1] && !timerIsOn) {

    // }
    return (
        <>
            <div className="timer">{props.time[0] + ":" + props.time[1]}</div>
        </>
    );
};

export default Timer;
