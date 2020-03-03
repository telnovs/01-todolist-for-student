import React from "react";

class TodoListTasks extends React.Component {
    render = () => {
        return (

            <div className="TodoListTasks ">
                <div className="TodoListTasks">
                    <input type="checkbox" checked={true}/>
                    <span>CSS</span>
                </div>
                <div className="TodoListTasks">
                    <input type="checkbox" checked={false}/>
                    <span>JS</span>
                </div>
                <div className="TodoListTasks">
                    <input type="checkbox" checked={false}/>
                    <span>ReactJS</span>
                </div>
                <div className="TodoListTasks">
                    <input type="checkbox" checked={true}/>
                    <span>Patterns</span>
                </div>

            </div>
        );
    }
}
export default TodoListTasks;