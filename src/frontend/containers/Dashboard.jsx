import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from 'Admin/Dashboard/Content.jsx';
import { setTab } from 'actions/dashboard';
import Download from 'Admin/Dashboard/Download.jsx';
import { getUsers } from 'api/adminApi';
import * as saver from 'file-saver';

function mapStateToProps(state) {
    return {
        tab: state.dashboard.tab
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onSetTab: (tab) => dispatch(setTab(tab))
    };
}

const onDownload = (route) => {
    let func, name;
    if (route === 'users') {
        func = getUsers;
        name = 'users.zip';
    }

    func()
        .then(x => {
            var blob = new Blob([x.data], {type: 'octet/stream'});
            saver.saveAs(blob, name);
        });
};

const DashboardComponent = (props) => {
    switch (props.tab) {
    case 1: return <Download onDownload={onDownload} {...props} />;
    }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Dashboard extends Component {
    constructor() {
        super();
    }

    

    render() {
        const {
            tab,
            onSetTab
        } = this.props;
        return (
            <Content 
            onSetTab={onSetTab}
            tab={tab}>
                {DashboardComponent(this.props)}
            </Content>
        );
    }
}