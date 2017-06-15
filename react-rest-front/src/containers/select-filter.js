import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectFilter} from  '../actions/index'; // Apply selected filter to the page

class SelectFilter extends React.Component {
    render() {
        return (
            <select onChange={this.props.selectFilter} value={this.props.activeFilter}>
                {this.props.filterList.map( function(option, i) {
                   return <option key={i} value={option}>{option}</option>
                })}
            </select>
        )
    }
}
    
function mapStateToProps(state) {
    return {
        activeFilter: state.activeFilter,
        filterList: state.filterList
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectFilter: selectFilter}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SelectFilter);