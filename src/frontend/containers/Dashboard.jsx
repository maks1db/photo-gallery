import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from 'Admin/Dashboard/Content.jsx';
import { setTab, setPhotoTab, getRatingPhoto, requestDownload, receiveDownload } from 'actions/dashboard';
import Download from 'Admin/Dashboard/Download.jsx';
import Photo from 'Admin/Dashboard/Photo.jsx';
import { download } from 'api/adminApi';
import * as saver from 'file-saver';

function mapStateToProps(state) {
    return {
        tab: state.dashboard.tab,
        photoTab: state.dashboard.photoTab,
        photo: state.dashboard.photo,
        downloadFile: state.dashboard.downloadFile
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onRequestDownload: () => dispatch(requestDownload()),
        onReceiveDownload: () => dispatch(receiveDownload()),
        onSetTab: (tab) => dispatch(setTab(tab)),
        onSetPhotoTab: (tab) => {
            dispatch(setPhotoTab(tab))
            dispatch(getRatingPhoto(tab))
        },
        onGetRatingPhoto: (tab) => dispatch(getRatingPhoto(tab))
    };
}

const onDownload = (route, type = 'txt', onRequestDownload, onReceiveDownload) => {
    
    onRequestDownload();
    download(route)
        .then(x => {
            var blob = new Blob([x.data], {type: 'octet/stream'});
            saver.saveAs(blob, `${route}.${type}`);
            onReceiveDownload();
        });
};

const DashboardComponent = (props) => {

    switch (props.tab) {
    case 0: return <Download onDownload={(route, type) => 
            onDownload(route, 
                type, 
                props.onRequestDownload,
                props.onReceiveDownload)} {...props} />;
    case 1: return <Photo {...props} />;
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