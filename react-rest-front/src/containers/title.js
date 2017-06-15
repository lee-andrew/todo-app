import React from 'react';
import {connect} from 'react-redux';

class Title extends React.Component {
    render() {
        return <h1 className="text-center"> {this.props.title}</h1>;
    }
}

function mapStateToProps(state) {
    return {
        title: state.title
    };
}

export default connect(mapStateToProps)(Title);