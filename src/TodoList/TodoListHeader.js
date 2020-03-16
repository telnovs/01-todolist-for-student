import React from "react";

class TodoListHeader extends React.Component {
    render = () => {
        return (
            <div className="TodoListHeader">
                <h3 className="TodoListHeader__title">What to Learn</h3>
                <div className="TodoListHeader-newTaskForm">
                    <input type="text" placeholder="New task name"/>
                    <button>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;