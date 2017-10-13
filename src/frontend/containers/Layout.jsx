import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'Layout/Header.jsx';
import MainScreen from 'Layout/MainScreen.jsx';
import { logoutUser } from 'actions/appActions';

function mapStateToProps(state) {
    return {
        visible: state.layout.visible,
        title: state.layout.title,
        showMainLink: state.layout.showMainLink,
        adminDashboard: state.layout.adminDashboard,
        role: state.app.role
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogout: () => dispatch(logoutUser())
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
            onLogout
        } = this.props;
        return (
            <MainScreen>
                { visible && <Header 
                    title={title} 
                    showMainLink={showMainLink} 
                    adminDashboard={adminDashboard}
                    role={role}
                    onLogout={onLogout}
                />}
                {this.props.children}
            </MainScreen>
        );
    }
}