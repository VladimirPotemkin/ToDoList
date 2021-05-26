import React from 'react';
import './ToDoItem.css';

const ToDoItem = props => {
    const resolvedClass = {
        textDecoration : 'line-through'
    }
    return (
        <div className="todo-item">
            <h2>
                <div className="description-wrapper">
                    <p 
                        style={props.completed === true ? resolvedClass : {}}
                        >
                            {props.description}</p>
                </div>
                <div className="input-wrapper">
                    <input type="checkbox" 
                    defaultChecked={props.completed}
                    onChange={props.handleChange}
                    />
                </div>
            </h2>
        </div>
    )
}

export default ToDoItem;
