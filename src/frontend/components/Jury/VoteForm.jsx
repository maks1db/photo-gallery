import Calendar from 'Calendar/Calendar.jsx';
import categories from 'categories.js';
import ClassName from 'className.js';
import styles from 'Jury/Jury.scss';
import React from 'react';
import Masonry from 'react-masonry-component';
import Rating from 'react-star-rating-component';
import stylesCommon from 'Register/Input.scss';

const masonryOptions = {
    transitionDuration: 500
};

const Timer = ({ dateEnd }) => (
    <div>
        {dateEnd && dateEnd > new Date() && <Calendar dateEnd={dateEnd} />}
        {dateEnd &&
            dateEnd < new Date() && (
                <h2 className={styles.reg_info}>
                    Спасибо. Срок голосования завершен.
                </h2>
            )}
    </div>
);

export default props => {
    return (
        <div className={stylesCommon.form}>
            <Timer dateEnd={props.dateEnd} />
            <div className={styles.categories}>
                <div
                    onClick={() => props.onChangeCategory(0)}
                    {...ClassName(
                        { [styles.active]: props.category === 0 },
                        `${styles.btn}`
                    )}
                >
                    <i>Все</i>
                </div>
                {categories.map((x, ind) => {
                    return (
                        <div
                            onClick={() => props.onChangeCategory(ind + 1)}
                            key={x}
                            {...ClassName(
                                { [styles.active]: props.category === ind + 1 },
                                `${styles.btn}`
                            )}
                        >
                            <i>{x}</i>
                        </div>
                    );
                })}
                <div
                    onClick={() => props.onChangeCategory(-1)}
                    {...ClassName(
                        { [styles.active]: props.category === -1 },
                        `${styles.btn}`
                    )}
                >
                    <i>Без оценок</i>
                </div>
            </div>
            {!props.items.isFetching && (
                <div className={styles.items}>
                    <Masonry
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false}
                    >
                        {props.items.data.map(x => (
                            <div
                                key={x._id}
                                {...ClassName(
                                    { [styles.item_comment]: x.comment !== '' },
                                    `${styles.item}`
                                )}
                            >
                                <div className={styles.title}>{x.title}</div>
                                <img
                                    src={x.smallPicture}
                                    onClick={() =>
                                        props.onPreview(
                                            props.items.data.indexOf(x)
                                        )
                                    }
                                />
                                {x.comment && (
                                    <i
                                        className="fa fa-commenting-o"
                                        aria-hidden="true"
                                    />
                                )}
                                <div
                                    {...ClassName(
                                        {
                                            [styles.rating_update]:
                                                props.ratingUpdate,
                                            [styles.vote_end]:
                                                props.dateEnd &&
                                                props.dateEnd < new Date()
                                        },
                                        styles.rating
                                    )}
                                >
                                    {
                                        <Rating
                                            starCount={10}
                                            name={x._id}
                                            onStarClick={value =>
                                                props.onUpdateRating(
                                                    x._id,
                                                    value
                                                )
                                            }
                                            value={x.value}
                                        />
                                    }
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </div>
            )}
        </div>
    );
};
