import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'Layout/Header.jsx';
import MainScreen from 'Layout/MainScreen.jsx';
import { logoutUser } from 'actions/appActions';
import { onScroll as onScrollAction } from 'actions/layoutActions';

function mapStateToProps(state) {
    return {
        visible: state.layout.visible,
        title: state.layout.title,
        showMainLink: state.layout.showMainLink,
        adminDashboard: state.layout.adminDashboard,
        role: state.app.role,
        appScroll: state.layout.onScroll
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogout: () => dispatch(logoutUser()),
        onScroll: (value) => dispatch(onScrollAction(value))
    };
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
            adminDashboard,
            role,
            onLogout,
            onScroll,
            appScroll
        } = this.props;
        return (
            <MainScreen
                appScroll={appScroll}
            >
                { visible && <Header 
                    title={title} 
                    showMainLink={showMainLink} 
                    adminDashboard={adminDashboard}
                    role={role}
                    onLogout={onLogout}
                    onScroll={onScroll}
                />}
                {this.props.children}
            </MainScreen>
        );
    }
}