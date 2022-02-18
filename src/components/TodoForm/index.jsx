import React, { useContext } from "react";
import "./TodoForm.css";
import { Button } from "../Button";

//context
import { TodoContext } from "../../contexts/todoContext";

const TodoForm = () => {
    //states
    const [input, setInput] = React.useState("");
    const [error, setError] = React.useState(false);

    //context
    const { todos, setTodos, setModal } = useContext(TodoContext);

    const handleInput = (e) => {
        setError(false);
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === "") {
            setError(true);
        } else {
            setError(false);
            let newTodo = {
                text: input,
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setInput("");
            setModal(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <label htmlFor='tarea'>Escribe una nueva tarea</label>
            <input
                name='tarea'
                value={input}
                type='text'
                onChange={handleInput}
            />
            {error && <span className='form-error'>Ingresa alguna tarea!</span>}
            <Button type='success' size='medium'>
                <i className='fa-solid fa-check'></i>
            </Button>
        </form>
    );
};

export { TodoForm };
