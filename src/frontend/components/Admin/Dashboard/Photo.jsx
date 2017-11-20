import React, {PureComponent} from 'react';
import styles from 'Jury/Jury.scss';
import ClassName from 'className.js';
import categories from 'categories.js';

export default class Photo extends PureComponent {

    constructor(){
        super();
    }

    onChangeCategory = (category) => {
        this.setState({category});
    }

    render() {

        const {
            photoTab, onSetPhotoTab
        } = this.props;

        return (
            <div>
                <div className={`${styles.categories} ${styles.black}`}>
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
            </div>
        );
    }
}