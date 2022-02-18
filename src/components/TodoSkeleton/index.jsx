import React from "react";
import "./TodoSkeleton.css";

const TodoSkeleton = () => {
    const repeat = 3;
    const skeletons = [];

    for (let i = 0; i < repeat; i++) {
        skeletons.push(<li key={i} className='todoSkeleton'></li>);
    }

    return <ul>{skeletons.map((skeleton) => skeleton)}</ul>;
};

export { TodoSkeleton };
