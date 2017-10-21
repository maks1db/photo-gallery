import React from 'react';
import stylesCommon from 'Register/Input.scss';
import styles from 'Jury/Jury.scss';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 
import categories from 'categories.js';
import ClassName from 'className.js';
import Masonry from 'react-masonry-component';
import Rating from 'react-star-rating-component';

const masonryOptions = {
    transitionDuration: 0
};

export default (props) => {
    return (
        <div className={stylesCommon.form}>
            <div className={styles.categories}>
                <div 
                    onClick={() => props.onChangeCategory(0)}
                    {...ClassName({[styles.active]: props.category === 0}, `${styles.btn}`)}>
                    <i>Все</i>
                </div>
                {categories.map(x => {
                    return (<div 
                        onClick={() => props.onChangeCategory(x === categories[0] ? 1 : 2)}
                        key={x}
                        {...ClassName({[styles.active]: props.category === (x === categories[0] ? 1 : 2)}, 
                            `${styles.btn}`)}><i>{x}</i></div>);})
                }
                <div 
                    onClick={() => props.onChangeCategory(-1)}
                    {...ClassName({[styles.active]: props.category === -1}, `${styles.btn}`)}>
                    <i>Без оценок</i>
                </div>
            </div>
            {!props.items.isFetching && <div className={styles.items}>
                <Masonry
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false}
                >
                    {props.items.data.filter(x=> props.category === -1 ? x.value === 0 : true).map(x => 
                        <div key={x._id} className={styles.item}>
                            <div className={styles.title}>{x.title}</div>
                            <img 
                                src={x.smallPicture}
                                onClick={() => props.onPreview(props.items.data.indexOf(x))}    
                            />
                            <div className={styles.rating}>
                                <Rating 
                                    starCount={10}
                                    name={x._id}
                                    onStarClick={(value) => props.onUpdateRating(x._id, value)}
                                    value={x.value}
                                />
                            </div>
                                
                        </div>)}   
                </Masonry>
            </div>}
        </div>);
};