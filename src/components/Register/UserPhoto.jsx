import React from 'react';
import Input from 'Controls/Input.jsx';
import Textarea from 'Controls/Textarea.jsx';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 
import RaisedButton from 'Controls/RaisedButton.jsx';
import styles from './Register.scss';
import ImgLoad from 'ImgLoad/ImgLoad.jsx';

const ImgRow = (props) => {

    const init = (key) => {
        return {
            onChange: (e) => {
                props.changePhotoKey(props.id, key, 
                    key === 'picture' ? e.target.files : e.target.value);
                if (props.validationShow) {
                    props.onValidation(false);
                }
            },
            defaultValue: props.values[key].value,
            errorMessage: props.values[key].errorMessage
        };
    };

    return (<Row className={styles.row}>
        <Col number={4}>
            <ImgLoad 
                title={`Загрузить фото ${props.number}`}
                {...init('picture')}
            />   
        </Col>
        <Col number={8}>
            <Row>
                <Col number={8}>
                    <Input 
                        label="Название снимка" 
                        {...init('title')}
                    />
                </Col>
                <Col number={4}>
                    <Input 
                        label="Год" 
                        type="number"
                        {...init('year')}    
                    />   
                </Col>
            </Row>
            <Input 
                label="Название похода" 
                {...init('description')}
            />
            <Input 
                label="Где сделано фото" 
                {...init('info')}
            />
        </Col>
    </Row>); 
};

export default (props) => {

    let number = 0;
    return (<div>
        <div className={styles.controls}>
            { props.photo.length > 0 && <RaisedButton 
                mini={true}
                onClick={props.addPhoto}
                children={<i className={'fa fa-times'}></i>} 
                option="danger"
                className={styles.remove}    
            />}
            <RaisedButton 
                mini={true}
                onClick={props.addPhoto}
                children={<i className={'fa fa-plus'}></i>} 
                option="primary"
                className={styles.add}    
            />
            <h3>{props.photo.length} фото из 6</h3>
        </div>
        
        {
            props.photo.map(x=> {
                number++;
                return (
                    <ImgRow 
                        number={number}
                        key={x.id} 
                        id={x.id}
                        values={x}
                        changePhotoKey={props.changePhotoKey}
                    />
                );
            })
        }
        
    </div>);
};