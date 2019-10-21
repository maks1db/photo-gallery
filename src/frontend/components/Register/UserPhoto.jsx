import ClassName from 'className.js';
import Col from 'Controls/Col.jsx';
import RaisedButton from 'Controls/RaisedButton.jsx';
import Row from 'Controls/Row.jsx';
import ImgLoad from 'ImgLoad/ImgLoad.jsx';
import React from 'react';

import styles from './Input.scss';
import PhotoInputs from './PhotoInputs.jsx';

const PHOTO_COUNT = 6;

const ImgRow = props => {
    const init = key => {
        return {
            onChange: e => {
                props.changePhotoKey(
                    props.values.id,
                    key,
                    key === 'picture' ? e.target.files : e.target.value
                );
                if (props.validationShow) {
                    props.onValidation(false);
                }
            },
            defaultValue: props.values[key].value,
            errorMessage: props.values[key].errorMessage
        };
    };

    return (
        <Row
            {...ClassName({ [styles.active]: props.values.active }, styles.row)}
            onClick={() => {
                props.setPhotoActive(props.values.id);
            }}
        >
            <Col number={4}>
                <ImgLoad
                    id={props.values.id}
                    title={`Загрузить фото ${props.number}`}
                    {...init('picture')}
                    deletePhotoItem={props.deletePhotoItem}
                    imgType={['jpeg', 'jpg']}
                    minSize={300}
                    maxSize={15000}
                />
            </Col>
            <Col number={8}>
                <PhotoInputs {...props} init={init} />
            </Col>
        </Row>
    );
};
const Controls = props =>
    !props.userRegister && (
        <div
            {...ClassName(
                { [styles.down]: props.photo.length > 0 },
                `${styles.controls}`
            )}
        >
            {props.photo.length > 0 && (
                <RaisedButton
                    mini={true}
                    {...props.photo.filter(x => x.active).length === 0 && {
                        disabled: true
                    }}
                    onClick={props.deletePhoto}
                    children={<i className={'fa fa-times'} />}
                    option="danger"
                    className={styles.remove}
                />
            )}
            <RaisedButton
                mini={true}
                {...props.photo.length === PHOTO_COUNT && { disabled: true }}
                onClick={() => {
                    if (props.photo.length < PHOTO_COUNT) {
                        props.addPhoto();
                    }
                }}
                children={<i className={'fa fa-plus'} />}
                option="primary"
                className={styles.add}
            />
            <h3>
                {props.photo.length} фото из {PHOTO_COUNT}
            </h3>
        </div>
    );

export default props => {
    let number = 0;
    return (
        <div>
            <Controls {...props} />
            {props.photo.length === 0 &&
                !props.userRegister && (
                    <h2 className={styles.info}>Добавьте ваши фото</h2>
                )}
            {props.userRegister && (
                <h2 className={styles.info}>Ваша заявка на участие принята</h2>
            )}
            {props.photo.map(x => {
                number++;
                return (
                    <ImgRow number={number} key={x.id} values={x} {...props} />
                );
            })}
        </div>
    );
};
