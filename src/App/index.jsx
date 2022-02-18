import React from "react";
import { TodoProvider } from "../contexts/todoContext";
import { AppUI } from "./AppUI";

//hooks

// const defaultTodos = [
//     { text: "Cortar cebolla", completed: true },
//     { text: "Tomar el cursso de intro a React", completed: false },
//     { text: "Llorar con la llorona", completed: false },
//     { text: "Alimentar al gato", completed: false },
// ];

function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;
