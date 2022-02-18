import React, { useContext } from "react";
import "./CreateTodoButton.css";

import { TodoContext } from "../../contexts/todoContext";

function CreateTodoButton() {
    const { setModal } = useContext(TodoContext);

    const handleClick = () => {
        setModal(true);
    };
    //console.log(modal);

    return (
        <button className='CreateTodoButton' onClick={handleClick}>
            <i className='fa-solid fa-plus'></i>
        </button>
    );
}

export { CreateTodoButton };
