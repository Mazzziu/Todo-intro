import React from "react";
import "./TodoCounter.css";

//context
import { TodoContext } from "../../contexts/todoContext";

function TodoCounter() {
    const { completed, total } = React.useContext(TodoContext);

    return (
        <div className='TodoCounter-container'>
            <h2 className='TodoCounter'>
                Has completado {completed} de {total} tareas
            </h2>
            <div className='progres-container'>
                <div
                    className='progres-status'
                    style={{ width: (completed / total) * 100 + "%" }}
                ></div>
            </div>
        </div>
    );
}

export { TodoCounter };
