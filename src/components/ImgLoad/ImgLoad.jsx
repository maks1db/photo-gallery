import React from 'react';
import styles from './ImgLoad.scss';
import Button from 'Controls/Button.jsx';
import ClassName from 'className.js';

export default class ImgLoad extends React.Component {
    constructor() {
        super();
        this.state = {
            imgSrc: ''
        };
    }

    updateImg = (props = this.props) => {
        if (props.defaultValue && props.defaultValue[0]) {
            const reader = new FileReader();
    
            reader.onload = (e) => {
                this.setState({imgSrc: e.target.result});
            };
    
            reader.readAsDataURL(props.defaultValue[0]);
        }
        else {
            this.setState({imgSrc: ''});
        }
    }
    componentWillMount() {
        this.updateImg();
    }

    componentWillReceiveProps(props) {
        if (this.state.imgSrc && props.defaultValue) {
            return;
        }
        this.updateImg(props);  
    }

    render() {
        return (
            <div className={styles.loader}>
                <input ref={(e) => { this.input = e; }}
                    type="file"
                    onChange={this.props.onChange}    
                />
                { !this.props.defaultValue && <Button 
                    className={styles.button}
                    children={(
                        <i>{this.props.title}<i className={'fa fa-picture-o'}></i></i>
                    )}
                    option={this.props.errorMessage ? 'danger' : 'info'}
                    onClick={() => this.input.click()}    
                />}
                <div {...ClassName({[styles.hide]:!this.props.defaultValue},styles.img)}>
                    <img src={this.state.imgSrc}/>
                    <button onClick={() => {
                        this.input.files = undefined;
                        this.props.deletePhotoItem(this.props.id);
                    }}><i className="fa fa-times"></i></button>
                </div>
            </div>
        );
    }
}