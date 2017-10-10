import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'Layout/Header.jsx';
import MainScreen from 'Layout/MainScreen.jsx';

function mapStateToProps(state) {
    return {
        visible: state.layout.visible,
        title: state.layout.title,
        showMainLink: state.layout.showMainLink,
        adminDashboard: state.layout.adminDashboard
    };
}
function mapDispatchToProps(dispatch) {
    return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Layout extends Component {
    constructor() {
        super();
    }

    render() {

        const { 
            visible,
            title,
            showMainLink,
            adminDashboard
        } = this.props;
        return (
            <MainScreen>
                { visible && <Header 
                    title={title} 
                    showMainLink={showMainLink} 
                    adminDashboard={adminDashboard}
                />}
                {this.props.children}
            </MainScreen>
        );
    }
}