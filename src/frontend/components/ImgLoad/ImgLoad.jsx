import React from 'react';
import styles from './ImgLoad.scss';
import Button from 'Controls/Button.jsx';
import ClassName from 'className.js';

export default class ImgLoad extends React.Component {
    constructor() {
        super();
        this.state = {
            imgSrc: '',
            minSizeError: false,
            maxSizeError: false,
            typeError: false
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

    onChangeImg = (e) => {
        
        this.setState({
            minSizeError: false,
            maxSizeError: false,
            typeError: false
        });

        const files = e.target.files;
        if (files.length === 0) {
            this.props.onChange(e);
            return;
        }

        const size = files[0].size / 1024;
        const name = files[0].name.split('.');
        let type = '';
        let error = false;
        
        if (name.length > 1) {
            type = name[name.length - 1].toLowerCase();
        }

        if (this.props.minSize) {
            if (this.props.minSize > size) {
                this.setState({minSizeError: true});
                error = true;
            }
        }

        if (this.props.maxSize) {
            if (this.props.maxSize < size) {
                this.setState({maxSizeError: true});
                error = true;
            }
        }

        if (this.props.imgType && this.props.imgType.map(x=>x.toLowerCase()).indexOf(type) < 0) {
            this.setState({typeError: false});
            error = true;
        }

        if (error) {
            e.target.value = '';
            return;
        }
        this.props.onChange(e);

    }

    componentWillReceiveProps(props) {
        if (this.state.imgSrc && props.defaultValue) {
            return;
        }
        this.updateImg(props);  
    }

    errorList = () => {
        const {minSizeError, maxSizeError, typeError} = this.state;
        return (
            <ul className={styles.errors}>
                {minSizeError && <li>Минимальный размер файла {this.props.minSize} кб.</li>}
                {maxSizeError && <li>Максимальный размер файла {this.props.maxSize} кб.</li>}
                {typeError && <li>Допустимые типы файлов: {this.props.imgType.join(', ')}</li>}
            </ul>
        )
    }

    render() {

        
        return (
            <div className={styles.loader}>
                <input ref={(e) => { this.input = e; }}
                    type="file"
                    onChange={this.onChangeImg}   
                />
                { !this.props.defaultValue && <div className={styles.button}>
                <Button 
                    children={(
                        <i>{this.props.title}<i className={'fa fa-picture-o'}></i></i>
                    )}
                    option={this.props.errorMessage ? 'danger' : 'info'}
                    onClick={() => this.input.click()}    
                /></div>}
                {this.errorList()}
                <div {...ClassName({[styles.hide]:!this.props.defaultValue},styles.img)}>
                    <img src={this.state.imgSrc}/>
                    <button onClick={() => {
                        this.input.value = '';
                        this.setState({
                            minSizeError: false,
                            maxSizeError: false,
                            typeError: false
                        });
                        this.props.deletePhotoItem(this.props.id);
                    }}><i className="fa fa-times"></i></button>
                </div>
            </div>
        );
    }
}