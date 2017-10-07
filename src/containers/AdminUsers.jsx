import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'Admin/Form.jsx';

function mapStateToProps(state) {
    return {
    };
}
function mapDispatchToProps(dispatch) {
    return {
        activate: (value) => dispatch(activateAdminDashboard(value))
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Admin extends Component {
    constructor() {
        super();
    }

    componentWillMount() {

    }

    render() {

        return (
            <Form>
                <h1>ыы</h1>
                <h2>ыssы</h2>
            </Form>
        );
    }
}