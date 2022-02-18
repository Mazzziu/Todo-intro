import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    return (
        <li className='TodoItem'>
            <div
                className={`Icon Icon-check ${
                    props.completed && "Icon-check--active"
                }`}
                onClick={props.finishTodo}
            >
                <i className='fa-solid fa-check'></i>
            </div>
            <p
                className={`TodoItem-p ${
                    props.completed && "TodoItem-p--complete"
                }`}
            >
                {props.text}
            </p>
            <span className='Icon Icon-delete' onClick={props.deleteTodo}>
                <i className='fa-solid fa-trash'></i>
            </span>
        </li>
    );
}

export { TodoItem };
