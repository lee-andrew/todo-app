import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setInput, addTodo} from '../actions/index'; // Add todo item based on the input


class AddInput extends React.Component {
    // Make sure string is not empty and does not contain only whitespaces after pressing Enter in the input box
    handleKeyPress(input, idCount, e) {
        if (e.key === 'Enter' && input && input.trim() !== '') {
            this.props.addTodo(input, idCount)
        }
    }
    
    render() {
        return <input onChange={this.props.setInput} onKeyPress={this.handleKeyPress.bind(this, this.props.input, this.props.idCount)} value={this.props.input} className="form-control" placeholder="add a todo" />
    }
}

function mapStateToProps(state) {
    return {
        input: state.input,
        idCount: state.idCount
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({setInput: setInput, addTodo: addTodo}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AddInput);