import React from 'react';
import deleteProps from 'deleteProps.js';

const Control = (props) => {
    if (props.control === 'input') return <input {...deleteProps(props, 'control')} />;
    else if (props.control === 'textarea') return <textarea {...deleteProps(props, 'control')} />;
};

function valid(props, value, init) {

    const { onValidation, name } = props;

    if (onValidation) {
        if (props.minLength && value.length < props.minLength) {
            onValidation(name, `Длина реквизита минимум ${props.minLength} символов`, init);
        }
        else if (props.maxLength && value.length > props.maxLength) {
            onValidation(name, `Длина реквизита максимум ${props.max} символов`, init);     
        }
        else if (props.min && parseInt(value) <= props.min) {
            onValidation(name, `Мин. ${props.min}`, init);  
        }
        else if (props.max && parseInt(value) > props.max) {
            onValidation(name, `Макс. ${props.max}`, init);  
        }
        else if (props.reqired && !value) {
            onValidation(name, 'Не заполнен реквизит', init);  
        }
        else {
            onValidation(name, false, init);
        }
    }
}
export default class Input extends React.Component {
    render() {

        const {
            type
        } = this.props; 

        const onChange = (e) => {
            this.props.onChange(e);
            const value = e.target.value;

            valid(this.props, value);
        };

        return (
            <Control 
                type="text" 
                className="form-control" 
                {...deleteProps(this.props, ['onValidation','reqired'])}
                onChange={onChange}
            />
        );
    }
}