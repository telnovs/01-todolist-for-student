import  React from 'react';


class TodoListTask  extends React.Component{
    render = () => {
        return (<div className="TodoListTasks">
                <input type="checkbox" checked={this.props.isDone}/>
                <span>{this.props.title}   &nbsp;&nbsp;&nbsp; priority {this.props.priority} </span>

            </div>

        );
       }
    }







export default TodoListTask;
