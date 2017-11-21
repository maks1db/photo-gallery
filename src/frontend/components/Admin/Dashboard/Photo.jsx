import React, {PureComponent} from 'react';
import styles from 'Jury/Jury.scss';
import ClassName from 'className.js';
import categories from 'categories.js';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 500
};

export default class Photo extends PureComponent {

    constructor(){
        super();
    }

    onChangeCategory = (category) => {
        this.setState({category});
    }

    componentWillMount() {
        const {
            photoTab, onGetRatingPhoto
        } = this.props;

        onGetRatingPhoto(photoTab);
    }

    render() {

        const {
            photoTab, onSetPhotoTab, photo
        } = this.props;

        return (
            <div>
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
                </div>
                {!photo.isFetching && <div className={styles.items}>
                    <Masonry
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false}
                    >
                        {photo.data.map(x => 
                            <div key={x._id} className={styles.item}>
                                <div className={styles.title}>{x.title}</div>
                                <img 
                                    src={x.smallPicture}    
                                />
                                <div className={styles.value}>{x.rating}</div>
                            </div>)}   
                    </Masonry>
                </div>}
            </div>
        );
    }
}