import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

//context
import { TodoContext } from "../../contexts/todoContext";

//components
import { Button } from "../Button";

const Modal = (props) => {
    const { modal, setModal } = React.useContext(TodoContext);

    return ReactDOM.createPortal(
        <div className={`${modal ? "container-modal" : "disable"}`}>
            <div className='modal'>
                <div className='modal-header'>
                    <Button
                        type='danger'
                        size='small'
                        handleClick={() => setModal(false)}
                    >
                        <i className='fa-solid fa-xmark'></i>
                    </Button>
                </div>
                <div className='modal-content'>{props.children}</div>
            </div>
        </div>,
        document.getElementById("modal")
    );
};

export { Modal };
