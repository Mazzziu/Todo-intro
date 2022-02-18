import React from "react";

//hooks
import { useLocalStorage } from "../hooks/useLocalStorage";

// const defaultTodos = [
//     { text: "Cortar cebolla", completed: true },
//     { text: "Tomar el cursso de intro a React", completed: false },
//     { text: "Llorar con la llorona", completed: false },
//     { text: "Alimentar al gato", completed: false },
// ];

const TodoContext = React.createContext();

const TodoProvider = (props) => {
    //states
    const {
        state: todos,
        setState: setTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V1", []);
    const [search, setSearch] = React.useState("");
    const [modal, setModal] = React.useState(false);

    //variables
    const completed = todos.filter((todo) => todo.completed).length;
    const total = todos.length;

    //Other functions
    const finishTodo = (id) => {
        todos[id].completed = !todos[id].completed;
        let aux = [...todos];
        setTodos(aux);
    };

    const deleteTodo = (id) => {
        //let aux = todos.filter((todo) => todo !== todos[id]); //forma 1
        let aux = [...todos]; //otra forma 2
        aux.splice(id, 1); //otra forma 2
        setTodos(aux);
    };

    const findTodo = () => {
        let find = todos;
        if (search.length > 0) {
            find = todos.filter((todo) =>
                todo.text.toLowerCase().includes(search.toLowerCase())
            );
        }
        return find;
    };

    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                completed,
                total,
                search,
                setSearch,
                findTodo: findTodo(),
                finishTodo,
                deleteTodo,
                todos,
                setTodos,
                modal,
                setModal,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };
