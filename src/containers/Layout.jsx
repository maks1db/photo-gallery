import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'Layout/Header.jsx';
import MainScreen from 'Layout/MainScreen.jsx';

function mapStateToProps(state) {
    return {
        visible: state.layout.visible
    };
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

        const { visible } = this.props;
        return (
            <div>
                { visible && <Header />}
                {this.props.children}
            </div>
        );
    }
}