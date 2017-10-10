import React from 'react';
import Input from 'Controls/Input.jsx';
import Select from 'Controls/Select.jsx';
import Textarea from 'Controls/Textarea.jsx';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 

export default (props) => (
    <div>
        <Row>
            <Col number={8}>
                <Input 
                    label="Название снимка" 
                    {...props.init('title')}
                />
            </Col>
            <Col number={4}>
                <Select 
                    label="Категория" 
                    {...props.init('category')}
                >
                    <option>Категория 1</option>
                    <option>Категория 2</option>
                </Select>  
            </Col>
        </Row>
        <Row>
            <Col number={8}>
                <Input 
                    label="Название похода" 
                    {...props.init('description')}
                />
            </Col>
            <Col number={4}>
                <Input 
                    label="Год" 
                    type="number"
                    maxLength={4}
                    {...props.init('year')}    
                />   
            </Col>
        </Row>

        <Input 
            label="Где сделано фото" 
            {...props.init('info')}
        />
    </div>
);