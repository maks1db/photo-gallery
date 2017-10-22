import React from 'react';
import styles from './Jury.scss';
import Rating from 'react-star-rating-component';
import Button from 'Controls/RaisedButton.jsx';

export default (props) => {
    const item = props.items.data[props.index];
    return (
        props.open && <div className={styles.fullImg}>
            <div className={styles.title}>{item.title} </div>
            <div className={styles.count}>{props.index + 1} из {props.items.data.length}</div>
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
            <div className={styles.comment}>
                <Button option="primary"><i className="fa fa-comments" aria-hidden="true"></i></Button>
                <div className={styles.commentMessage}>Комментрировать (осталось 3шт.)</div>
            </div>
            {props.index !== 0 && 
                <div 
                    onClick={() => props.onSetModalImg(props.index - 1)}
                    className={styles.left}
                ><i className="fa fa-chevron-left"></i></div>
            }
            {props.index !== props.items.data.length -1 && 
                <div 
                    className={styles.right}
                    onClick={() => props.onSetModalImg(props.index + 1)}
                ><i className="fa fa fa-chevron-right"></i></div>
            }
            <div 
                className={styles.close}
                onClick={()=>props.onSetModal(false)}    
            ><i className="fa fa-times"></i></div>
            
        </div>
    );
};
