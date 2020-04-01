import React from "react";
import TodoListTask from "../Components/TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {

        let tasksElements = this.props.tasks.map( task => <TodoListTask task={task}
                                                                        onTaskStatusChanged={this.props.onTaskStatusChanged}
        />);

        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;
