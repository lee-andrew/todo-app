import React from 'react';
import {connect} from 'react-redux';
import Todo from './todo';

class TodoList extends React.Component {
    
    render() {
        let filter = this.props.activeFilter;   // Output items based on this filter
        return (
            <ul className="list-group">
                {this.props.todos.map(function(item, i) {
                    if ( filter === "all" ) {
                        return  <Todo item={item} index={i} key={i} />
                    }
                    else if ( filter === "active" && item.done === false) {
                        return  <Todo item={item} index={i} key={i} />
                    }
                    else if ( filter === "complete" && item.done === true ) {
                        return  <Todo item={item} index={i} key={i} />
                    }
                    else {
                        return null;
                    }
                })}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        activeFilter: state.activeFilter
    };
}

export default connect(mapStateToProps)(TodoList);