import React from 'react';
import './App.css';
import TodoListTasks from './TodoList/TodoListTasks.js';
import TodoListFooter from './TodoList/TodoListFooter.js';
import TodoListHeader from './TodoList/TodoListHeader.js';

class App extends React.Component {

    newTaskTitleRef = React.createRef();
    state = {
        tasks: [
            {title: "JS", isDone: false, priority: "hegh"},
            {title: "HTML", isDone: true, priority: "low"},
            {title: "CSS", isDone: false, priority: "hegh"},
            {title: "React", isDone: true, priority: "hegh"},
            {title: "SaSS", isDone: false, priority: "medium"},
            {title: "Redux", isDone: true, priority: "low"}
        ],
        filterValue: "Completed"
    }
    onAddTaskClick = () => {
        let newTitle = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = "";
        let newTask = {
            title: newTitle,
            isDone: false,
            priority: "hegh"
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        });
    }

    changeFilter = (newFilterValue) => {
            this.setState({
                filterValue : newFilterValue
            })
    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader/>
                    <div className="TodoListHeader">
                        <h3 className="TodoListHeader__title">What to Learn</h3>
                        <div className="TodoListHeader-newTaskForm">
                            <input
                                ref={this.newTaskTitleRef}
                                type="text" placeholder="New task name"/>
                            <button onClick={this.onAddTaskClick}>Add</button>
                        </div>
                    </div>
                    <TodoListTasks tasks={this.state.tasks.filter ( (task) => {
                        switch (this.state.filterValue){
                            case  "All" : return true;
                            case  "Completed" : return task.isDone;
                            case  "Active" : return !task.isDone;
                            default : return true;
                        }

                    } ) }/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>

                </div>
            </div>
        );
    }
}

export default App;

