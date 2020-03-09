import React from 'react';
import './App.css';
import TodoListTasks from './TodoListTasks.js';
import  TodoListFooter from './TodoListFooter.js';
import TodoListHeader from './TodoListHeader.js';
class App extends React.Component {
    tasks = [
        {title:"JS",    isDone:  false, priority:    "hegh"},
        {title:"HTML",  isDone:  true,  priority:   "low"},
        {title:"CSS",   isDone:  false, priority:   "hegh"},
        {title:"React", isDone:  true,  priority:  "hegh"},
        {title:"SaSS",  isDone:  false, priority:  "medium"},
        {title:"Redux", isDone:  true,  priority:  "low"}
    ] ;
    filterValue ="Completed";

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader/>
               <TodoListTasks tasks={this.tasks}/>
               <TodoListFooter filterValue={this.filterValue}/>

              </div>
            </div>
        );
    }
}

export default App;

