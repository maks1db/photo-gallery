import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'Layout/Header.jsx';
import MainScreen from 'Layout/MainScreen.jsx';

function mapStateToProps(state) {
    return {
        visible: state.layout.visible,
        title: state.layout.title,
        showMainLink: state.layout.showMainLink
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
            showMainLink
        } = this.props;
        return (
            <MainScreen>
                { visible && <Header 
                    title={title} 
                    showMainLink={showMainLink} 
                />}
                {this.props.children}
            </MainScreen>
        );
    }
}