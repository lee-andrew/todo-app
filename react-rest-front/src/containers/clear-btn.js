import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {clearComplete} from '../actions/index'; // Clear completed todos

class ClearBtn extends React.Component {
    render() {
        let disabled = (this.props.completedCount === 0)? true : false; // Disable button if there are no completed todos
        return <button onClick={() => {this.props.clearComplete(this.props.todos)}} className="pull-right btn btn-default" disabled={disabled}>Clear Complete</button>
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        completedCount: state.completedCount
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({clearComplete: clearComplete}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ClearBtn);