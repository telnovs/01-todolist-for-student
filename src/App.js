import React from 'react';
import './App.css';
import TodoListTasks from './TodoListTasks.js';
import  TodoListFooter from './TodoListFooter.js';
import TodoListHeader from './TodoListHeader.js';
class App extends React.Component {
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
               <TodoListTasks/>
               <TodoListHeader/>
               <TodoListFooter/>

              </div>
            </div>
        );
    }
}

export default App;

