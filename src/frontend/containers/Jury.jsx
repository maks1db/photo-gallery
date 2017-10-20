import React, { Component } from 'react';
import { connect } from 'react-redux';
import VoteForm from 'Jury/VoteForm.jsx';
import { changeCategory, getPhotoByCategory } from 'actions/juryActions';

function mapStateToProps(state) {
    return {
        category: state.jury.activeCategory,
        items: state.jury.items
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onChangeCategory: (value) => {
            dispatch(changeCategory(value));
            dispatch(getPhotoByCategory(value));
        },
        onGetPhoto: (value) => dispatch(getPhotoByCategory(value))
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Jury extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.onGetPhoto(this.props.category);
    }

    render() {

        const { 
            category,
            onChangeCategory,
            items
        } = this.props;

        return (
            <VoteForm 
                category={category}
                onChangeCategory={onChangeCategory}
                items={items}
            />

        );
    }
}