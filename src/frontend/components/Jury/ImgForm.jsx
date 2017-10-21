import React from 'react';
import styles from './Jury.scss';
import Rating from 'react-star-rating-component';

export default (props) => {
    const item = props.items.data[props.index];
    return (
        props.open && <div className={styles.fullImg}>
            <div className={styles.title}>{item.title} ({props.index + 1} из {props.items.data.length})</div>
            <div className={styles.preview}>
                <img src={item.smallPicture}/>
            </div> 
            <div className={styles.description}>
                {item.info}
            </div>
            <div className={styles.ratingPreview}>
                <div className={styles.content}>
                    <Rating 
                        starCount={10}
                        name="rating"
                        onStarClick={(value) => props.onUpdateRating(item._id, value)}
                        value={item.value}
                    />
                </div>
                
            </div>
            {props.index !== 0 && 
                <div 
                    onClick={() => props.onSetModalImg(props.index - 1)}
                    className={styles.left}
                ><i class="fa fa-chevron-left"></i></div>
            }
            {props.index !== props.items.data.length -1 && 
                <div 
                    className={styles.right}
                    onClick={() => props.onSetModalImg(props.index + 1)}
                ><i class="fa fa fa-chevron-right"></i></div>
            }
            <div 
                className={styles.close}
                onClick={()=>props.onSetModal(false)}    
            ><i class="fa fa-times"></i></div>
        </div>
    );
};
