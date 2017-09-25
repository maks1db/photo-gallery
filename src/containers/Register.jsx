import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterComponent from 'Register/Register.jsx';

function mapStateToProps(state) {
    return {
        dateEnd: new Date(2017,11,1)
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Register extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <RegisterComponent />
        );
    }
}