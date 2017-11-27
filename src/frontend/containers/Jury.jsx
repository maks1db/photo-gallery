import React, { Component } from 'react';
import { connect } from 'react-redux';
import VoteForm from 'Jury/VoteForm.jsx';
import ImgForm from 'Jury/ImgForm.jsx';
import { 
        changeCategory, 
        getPhotoByCategory, 
        updateRating,
        setModal,
        setModalImg,
        commentShow,
        changeComment
     } from 'actions/juryActions';

function mapStateToProps(state) {
    return {
        category: state.jury.activeCategory,
        items: state.jury.items,
        rating: state.jury.rating.data,
        openModalImg: state.jury.modal.open,
        indexModalImg: state.jury.modal.index,
        commentActive: state.jury.modal.commentActive,
        commentMessage: state.jury.modal.commentMessage,
        ratingUpdate: state.jury.ratingUpdate,
        dateEnd: state.jury.dateEnd.value
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onChangeCategory: (value) => {
            dispatch(changeCategory(value));
            dispatch(getPhotoByCategory(value));
        },
        onGetPhoto: (value) => dispatch(getPhotoByCategory(value)),
        onUpdateRating: (id, value) => dispatch(updateRating(id, 'value', value)),
        onSetModal: (value)=> dispatch(setModal(value)),
        onSetModalImg: (value) => {
            dispatch(setModalImg(value));
            dispatch(commentShow(false))
        },
        onPreview: (index) => {
            dispatch(setModalImg(index));
            dispatch(setModal(true));
        },
        onCommentShow: (value) => {
            dispatch(commentShow(value))
        },
        onUpdateComment: (id, value) => dispatch(updateRating(id, 'comment', value, 'Комментарий сохранен в базе данных')),
        onChangeComment: (value) => dispatch(changeComment(value))
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

        let { 
            category,
            onChangeCategory,
            onUpdateRating,
            rating,
            items,
            openModalImg,
            indexModalImg,
            onSetModal,
            onSetModalImg,
            onPreview,
            commentActive,
            onCommentShow,
            onUpdateComment,
            commentMessage,
            onChangeComment,
            ratingUpdate,
            dateEnd
        } = this.props;

        let commentCount = 0;
        items.data = items.data.map(x => {
            const item = rating.find(a => a.photoId === x._id);
            x.value = item ? item.value : 0;
            x.comment = item ? item.comment : '';

            if (x.comment) commentCount++;
            return x;
        });

        return (
            <div>
                <VoteForm 
                    category={category}
                    onChangeCategory={onChangeCategory}
                    items={items}
                    onUpdateRating={onUpdateRating}
                    rating={rating}
                    onPreview={onPreview}
                    ratingUpdate={ratingUpdate}
                    dateEnd={dateEnd}
                />
                <ImgForm 
                    dateEnd={dateEnd}
                    ratingUpdate={ratingUpdate}
                    open={openModalImg}
                    items={items}
                    onUpdateRating={onUpdateRating}
                    index={indexModalImg}
                    onSetModalImg={onSetModalImg}
                    onSetModal={onSetModal}
                    commentActive={commentActive}
                    onCommentShow={onCommentShow}
                    onUpdateComment={(id) => onUpdateComment(id, commentMessage)}
                    onChangeComment={onChangeComment}
                    commentMessage={commentMessage}
                    commentCount={commentCount}
                    category={category}
                />
            </div>
        );
    }
}