import { useState } from "react";

import "./Button.css";

const Button = (props) => {
    const [clicked, setClicked] = useState(false);

    const onButtonClicked = () => {
        if (props.type === "stop") {
            setClicked(false);
        } else {
            setClicked(true);
        }
        console.log("Button.jsx: ", clicked);
        props.buttonClicked(props.type, clicked);
    };

    return (
        <>
            <button className={props.type} onClick={onButtonClicked}>
                {props.type.toUpperCase()}
            </button>
        </>
    );
};

export default Button;
