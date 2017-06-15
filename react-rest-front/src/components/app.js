import React from 'react';
import Title from '../containers/title';
import AddTodo from './add-todo';
import TodoList from '../containers/todo-list';
import SelectFilter from '../containers/select-filter';
import ClearBtn from '../containers/clear-btn';

class App extends React.Component{
	render() {
        return (
            <div className="container">
                <Title />
                <AddTodo />
                <TodoList />
                <SelectFilter />
                <ClearBtn />
            </div>
        )
    }
}

export default App;