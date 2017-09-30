import React from 'react';
import styles from './ImgLoad.scss';
import Button from 'Controls/Button.jsx';
import ClassName from 'className.js';

function readURL(input, img) {
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
            img.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

let input = null,
    img = null;
export default class ImgLoad extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={styles.loader}>
                <input ref={(e) => { input = e; }}
                    type="file"
                    onChange={(e) => {
                        readURL(input, img);
                        this.props.onChange(e);
                    }}    
                />
                { !this.props.defaultValue && <Button 
                    className={styles.button}
                    children={(
                        <i>{this.props.title}<i className={'fa fa-picture-o'}></i></i>
                    )}
                    option="info"
                    onClick={() => input.click()}    
                />}
                <div {...ClassName({[styles.hide]:!this.props.defaultValue}
                    ,styles.img)}>
                    <img ref={(e) => { 
                        img = e; 
                    }}/>
                </div>
            </div>
        );
    }
}