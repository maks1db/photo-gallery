import React from 'react';
import styles from './Jury.scss';
import Rating from 'react-star-rating-component';
import Button from 'Controls/RaisedButton.jsx';
import Textarea from 'Controls/Textarea.jsx';
import ClassName from 'className.js';

export default class ImgForm extends React.PureComponent{

    constructor() {
        super();
    }

    onKeyUp = (e) => {
        const props = this.props;

        if (e.keyCode === 39 && props.index !== props.items.data.length -1) {
            props.onSetModalImg(props.index + 1);     
        }

        if (e.keyCode === 37 && props.index !== 0) {
            props.onSetModalImg(props.index - 1);     
        }
    }

    componentWillMount() {
        document.addEventListener('keyup', this.onKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener('keyup', this.onKeyUp);
    }

    render() {
        const props = this.props;

        const item = props.items.data[props.index];
        return (
            props.open && <div {...ClassName({[styles.item_comment]: item.comment !== ''}, `${styles.fullImg}`)}>
                <div className={styles.title}>{item.title} </div>
                <div className={styles.count}>{props.index + 1} из {props.items.data.length}</div>
                {!props.commentActive && <div className={styles.preview}>
                    <img src={item.smallPicture}/>
                    {[1,2].indexOf(props.category) >= 0 && (item.comment && !props.commentActive) && <i className="fa fa-commenting-o" aria-hidden="true"></i>}
                </div>} 
                <div className={styles.description}>
                    {item.info}
                </div>
                
                {props.commentActive && <div className={styles.commentArea}>
                    <Textarea 
                        defaultValue={props.commentMessage || item.comment || ''}
                        errorMessage={false}
                        label="Ваш комментарий"
                        rows={15}
                        placeholder="Введите ваш комментарий..."
                        onChange={(e) => props.onChangeComment(e.target.value)}
                    />
                </div>}
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
                {(!props.commentActive && (item.comment || props.commentCount < 3)) && [1,2].indexOf(props.category) >= 0 && <div className={styles.comment}>
                    <Button 
                        onClick={() => props.onCommentShow(true)}
                        option="primary"
                    ><i className="fa fa-comments" aria-hidden="true"></i></Button>
                    <div 
                        className={styles.commentMessage}
                        children={item.comment ? 'Редактировать комментарий' : `Комментрировать (осталось ${3 - props.commentCount} шт.)`}    
                    ></div>
                </div>}
                {props.commentActive && <div className={`${styles.comment} ${styles.buttonSave}`}>
                    <Button 
                        onClick={() => props.onUpdateComment(item._id)}
                        option="success"
                        mini={true}
                    ><i className="fa fa-floppy-o" aria-hidden="true"></i></Button>
                    <div className={styles.commentMessage}>Сохранить комментарий</div>
                </div>}
                {props.commentActive && <div className={`${styles.comment} ${styles.buttonClose}`}>
                    <Button 
                        onClick={() => props.onCommentShow(false)}
                        option="danger"
                        mini={true}
                    ><i className="fa fa-times" aria-hidden="true"></i></Button>
                    <div className={styles.commentMessage}>Закрыть</div>
                </div>}
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
    }
}