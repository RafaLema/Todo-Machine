import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {
    //return (react_1.default.createElement("button", { className: "CreateTodoButton" }, "+"));
    const { openModal, setOpenModal } = React.useContext(TodoContext);
    return (
        <button
            className={`CreateTodoButton ${openModal && 'CreateTodoButton--opened'}`}
            onClick={() => setOpenModal( open => !open)}
        >
            +
        </button>
    );
}

export { CreateTodoButton };