import React from 'react';
import AddBtn from '../containers/add-btn';
import AddInput from '../containers/add-input';

class AddTodo extends React.Component {
    render() {
        return (
            <div className="add-form">
                <div className="input-group">
                    <AddBtn />
                    <AddInput />
                </div>
            </div>
        )
    }
}

export default AddTodo;