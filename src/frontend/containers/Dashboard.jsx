import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from 'Admin/Dashboard/Content.jsx';
import { setTab, setPhotoTab } from 'actions/dashboard';
import Download from 'Admin/Dashboard/Download.jsx';
import Photo from 'Admin/Dashboard/Photo.jsx';
import { download } from 'api/adminApi';
import * as saver from 'file-saver';

function mapStateToProps(state) {
    return {
        tab: state.dashboard.tab,
        photoTab: state.dashboard.photoTab
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onSetTab: (tab) => dispatch(setTab(tab)),
        onSetPhotoTab: (tab) => dispatch(setPhotoTab(tab))
    };
}

const onDownload = (route) => {

    download(route)
        .then(x => {
            var blob = new Blob([x.data], {type: 'octet/stream'});
            saver.saveAs(blob, `${route}.zip`);
        });
};

const DashboardComponent = (props) => {
    switch (props.tab) {
    case 0: return <Download onDownload={onDownload} {...props} />;
    case 1: return <Photo onDownload={onDownload} {...props} />;
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