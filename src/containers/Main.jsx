import React, { Component } from 'react';
import { connect } from 'react-redux';
import IndexScreen from 'Screens/IndexScreen.jsx';

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch, ownProps) {
    return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Main extends Component {
    constructor() {
        console.log('main')
        super();
    }

    render() {
        return (
            <div>
                <IndexScreen />
            </div>
        );
    }
}