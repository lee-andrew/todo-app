import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {handleToggle} from '../actions/index'; // Toggle the checkbox when clicked

class Todo extends React.Component {
    render() {
        let item = this.props.item;
        let index = this.props.index;
        let done = (item.done === true) ? "done" : "";  // Class name for label
        return (
            <li className="list-group-item">
                <input onChange={()=> {this.props.handleToggle(this.props.todos, index, this.props.completedCount)}} type="checkbox" checked={done} /> 
                {<label className={done}>{item.text}</label>}
            </li>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        completedCount: state.completedCount
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({handleToggle: handleToggle}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Todo);