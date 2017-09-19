import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'Layout/Header.jsx';

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch, ownProps) {
    return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Layout extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}