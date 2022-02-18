import React from "react";
import "./Button.css";

const Button = (props) => {
    const handleClick = () => {
        if (props.handleClick) props.handleClick();
    };

    return (
        <button
            className={`button ${props.type ? props.type : "info"} ${
                props.size ? props.size : "medium"
            } `}
            onClick={handleClick}
        >
            {props.children}
        </button>
    );
};

export { Button };
