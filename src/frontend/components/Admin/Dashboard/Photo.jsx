import React, {PureComponent} from 'react';
import styles from 'Jury/Jury.scss';
import ClassName from 'className.js';
import categories from 'categories.js';
import Masonry from 'react-masonry-component';
import ImgForm from 'Jury/ImgForm.jsx';

const masonryOptions = {
    transitionDuration: 500
};

export default class Photo extends PureComponent {

    constructor(){
        super();

        this.state ={
            index: 0,
            open: false,
            ratingInfoShow: false
        }
    }

    onChangeCategory = (category) => {
        this.setState({category});
    }

    onRatingInfoShow = (ratingInfoShow) => {
        this.setState({ratingInfoShow});
    }

    componentWillMount() {
        const {
            photoTab, onGetRatingPhoto
        } = this.props;

        onGetRatingPhoto(photoTab);
    }

    onClickImg = (x) => {
        this.setState({
            open: true,
            index: this.props.photo.data.indexOf(x)
        });
    }

    onChangeIndex = (index) => {
        this.setState({
            index
        });
    }

    onCloseImg = () => {
        this.setState({
            open: false
        });
    }

    render() {

        const {
            photoTab, onSetPhotoTab, photo, onSelectPhoto
        } = this.props;

        const { index, open, ratingInfoShow } = this.state;
        return (
            <div>
                <ImgForm 
                    items={photo}
                    open={open}
                    shortRating={true}
                    index={index}
                    onSetModal={this.onCloseImg}
                    onSetModalImg={this.onChangeIndex}
                    ratingInfoShow={ratingInfoShow}
                    onRatingInfoShow={this.onRatingInfoShow}
                    onSelectPhoto={onSelectPhoto}
                />
                <div className={`${styles.categories}`}>
                    <div 
                        onClick={() => onSetPhotoTab(0)}
                        {...ClassName({[styles.active]: photoTab === 0}, `${styles.btn}`)}>
                        <i>Все</i>
                    </div>
                    {categories.map(x => {
                        return (<div 
                            onClick={() => onSetPhotoTab(x === categories[0] ? 1 : 2)}
                            key={x}
                            {...ClassName({[styles.active]: photoTab === (x === categories[0] ? 1 : 2)}, 
                                `${styles.btn}`)}><i>{x}</i></div>);})
                    }
                    <div 
                        onClick={() => onSetPhotoTab(-1)}
                        {...ClassName({[styles.active]: photoTab === -1}, `${styles.btn}`)}>
                        <i>Без оценок</i>
                    </div>
                    <div 
                        onClick={() => onSetPhotoTab(-2)}
                        {...ClassName({[styles.active]: photoTab === -2}, `${styles.btn}`)}>
                        <i>С комментариями</i>
                    </div>
                </div>
                {!photo.isFetching && <div className={styles.items}>
                    <Masonry
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false}
                    >
                        {photo.data.map(x => 
                            <div key={x._id} 
                                {...ClassName({[styles.item_comment]: x.ratingInfo.find(i => i.comment) !== undefined}, `${styles.item}`)}
                                onClick={() => this.onClickImg(x)}
                                >
                                <div className={styles.title}>{x.title}</div>
                                <img 
                                    src={x.smallPicture}    
                                />
                                {x.selected && <div className={styles.selected}>
                                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                                </div>}
                                {x.ratingInfo.find(i => i.comment) !== undefined && <i className="fa fa-commenting-o" aria-hidden="true"></i>}
                                <div className={styles.value}>{x.rating}</div>
                            </div>)}   
                    </Masonry>
                </div>}
            </div>
        );
    }
}