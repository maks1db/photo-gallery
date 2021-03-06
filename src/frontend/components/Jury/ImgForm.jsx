import React from 'react';
import styles from './Jury.scss';
import Rating from 'react-star-rating-component';
import Button from 'Controls/RaisedButton.jsx';
import Textarea from 'Controls/Textarea.jsx';
import ClassName from 'className.js';

const FormInfo = ({ title, index, items }) => (
    <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.count}>{index + 1} из {items.data.length}</div>
    </div>
);

const Img = ( { ratingInfoShow, src, category, item, commentActive }) => (
    (!commentActive) && <div {...ClassName({[styles.ratingShowImg]:ratingInfoShow},styles.preview)}>
    <img src={src}/>
    {[1,2].indexOf(category) >= 0 && (item.comment && !commentActive) && <i className="fa fa-commenting-o" aria-hidden="true"></i>}
    </div>
);

const RatingInfo = ({ item}) => ( 
        <div className={styles.rating_info}>
            <h2>Оценки</h2>
            {
                item.ratingInfo.map(x => 
                    <div>
                        <b>{x.user}: </b>{x.value}
                    </div>)
            }
            {
                item.ratingInfo.find(x=>x.comment) !== undefined &&
                (
                <h2>Комментарии</h2>)}
            {item.ratingInfo.filter(x=>x.comment).map(x => 
                <div>
                    <b>{x.user}: </b>{x.comment}
                </div>)
            }
        </div>  
)

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
                <FormInfo 
                    title={item.title}
                    index={props.index}
                    items={props.items}
                />
                <Img 
                    ratingInfoShow={props.ratingInfoShow}
                    src={item.smallPicture}
                    category={props.category}
                    item={item}
                    commentActive={props.commentActive}
                />
                {props.ratingInfoShow &&<RatingInfo 
                    item={item} 
                />}
                {!props.ratingInfoShow && <div className={styles.description}>
                    {item.info}
                </div>}
                
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
                {props.shortRating !== true && <div className={styles.ratingPreview}>
                    <div {...ClassName({
                        [styles.rating_update]: props.ratingUpdate,
                        [styles.vote_end]: props.dateEnd && props.dateEnd < new Date()
                    }, styles.content)}>
                        <Rating 
                            starCount={10}
                            name="rating"
                            onStarClick={(value) => props.onUpdateRating(item._id, value)}
                            value={item.value}
                        />
                    </div>   
                </div>}
                
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
                {(item.ratingInfo && !props.ratingInfoShow) && <div className={styles.comment}>
                    <Button 
                        onClick={() => props.onRatingInfoShow(true)}
                        option="primary"
                    ><i className="fa fa-star-half-o" aria-hidden="true"></i></Button>
                </div>}
                {item.ratingInfo && <div className={styles.selectPhoto}>
                    <Button 
                        onClick={() => props.onSelectPhoto(item._id, !item.selected)}
                        option={!item.selected ? 'primary' : 'warning'}
                    ><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></Button>
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
                {props.ratingInfoShow && <div className={`${styles.comment} ${styles.buttonClose}`}>
                    <Button 
                        onClick={() => props.onRatingInfoShow(false)}
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