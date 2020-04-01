import React from "react";


class TodoListHeader extends React.Component {
    state = {
        error: false,
        title: "",
    };

    // обработчик нажатия на Enter
    onKeyPress = (e) => {
        if (e.key === "Enter") this.onAddTaskClick();
    };

    onTitleChanged = (e) => {
        this.setState({title: e.currentTarget.value})
    };

    onAddTaskClick = () => {
        let newText = this.state.title;

        // передаём новый текст наружу
        if (newText !== "") {
            this.props.onTaskAdded(newText);
            this.setState({error: false, title: ""});
        } else {
            this.setState({error: true});
        }
    };

    render = () => {

        const inputClassName = this.state.error === true ? "error" : "";
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input type="text" placeholder="New task name" className={inputClassName}
                           onKeyPress={this.onKeyPress}
                           value={this.onTitleChanged}/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;