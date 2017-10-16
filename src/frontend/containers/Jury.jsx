import React, { Component } from 'react';
import { connect } from 'react-redux';
import VoteForm from 'Jury/VoteForm.jsx';
import { changeCategory } from 'actions/juryActions';

function mapStateToProps(state) {
    return {
        category: state.jury.activeCategory
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onChangeCategory: (value) => dispatch(changeCategory(value))
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Jury extends Component {
    constructor() {
        super();
    }

    render() {

        const { 
            category,
            onChangeCategory
        } = this.props;

        return (
            <VoteForm 
                category={category}
                onChangeCategory={onChangeCategory}
            />

        );
    }
}