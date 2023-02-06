import "./Button.css";

const Button = (props) => {
    return (
        <>
            <button className={props.type}>{props.type.toUpperCase()}</button>
        </>
    );
};

export default Button;
