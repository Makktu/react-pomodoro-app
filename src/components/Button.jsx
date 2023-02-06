import { useState } from "react";

import "./Button.css";

const Button = (props) => {
    const [clicked, setClicked] = useState(false);

    const clickHandler = () => {
        setClicked(!clicked);
        console.log(clicked);
    };

    return (
        <>
            <button className={props.type} onClick={props.onClickStart}>
                {props.type.toUpperCase()}
            </button>
        </>
    );
};

export default Button;
