import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';   // Add todo item based on the input

class AddBtn extends React.Component {
    constructor(){
        super();
        this.handleAddClick = this.handleAddClick.bind(this);
	}
    
    handleAddClick(input, idCount) {
        // Make sure string is not empty and does not contain only whitespaces
        if (input && input.trim() !== '') {
            this.props.addTodo(input, idCount);
        }
    }
    
    render() {
        return (
            <span className="input-group-btn">
                <button onClick={() => {this.handleAddClick(this.props.input, this.props.idCount)}} className="btn btn-primary">Add</button>
            </span>
        )
    }
}

function mapStateToProps(state) {
    return {
        input: state.input,
        idCount: state.idCount
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({addTodo: addTodo}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AddBtn);