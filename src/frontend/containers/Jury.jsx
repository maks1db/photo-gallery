import React, { Component } from 'react';
import { connect } from 'react-redux';
import VoteForm from 'Jury/VoteForm.jsx';

function mapStateToProps(state) {
    return {
        items: state.jury
    };
}
function mapDispatchToProps(dispatch) {
    return {
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Jury extends Component {
    constructor() {
        super();
    }

    render() {

        const { 
            onChangeKey,
            items
        } = this.props;

        return (
            <VoteForm 
            />

        );
    }
}