import React from "react";
import "./TodoMessage.css";

const TodoMessage = ({ icon, message }) => {
    return (
        <div className='message'>
            <div className='icon'>{icon}</div>
            <h3>{message}</h3>
        </div>
    );
};

export { TodoMessage };
