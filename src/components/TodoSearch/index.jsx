import React, { useContext } from "react";
import "./TodoSearch.css";

//context
import { TodoContext } from "../../contexts/todoContext";

function TodoSearch() {
    const { setSearch } = useContext(TodoContext);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <input
            name='search'
            className='TodoSearch'
            placeholder='Buscar'
            onChange={handleSearch}
        />
    );
}

export { TodoSearch };
