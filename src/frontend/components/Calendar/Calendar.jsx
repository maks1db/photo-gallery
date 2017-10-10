import React from 'react';
import Item from './CalendarItem.jsx';
import styles from './Calendar.scss';

export default class Calendar extends React.Component{

    constructor() {
        super();

        this.state = {
            dateBegin: new Date()
        };
    }

    componentWillMount() {
        this.timer = setInterval(() => this.setState({dateBegin: new Date()}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        let hours = 0, days = 0, minutes = 0, seconds = 0;
        let result = Math.ceil((this.props.dateEnd.valueOf() - 
            this.state.dateBegin.valueOf()) / 1000);
    
        if (result > 0) {
            days = Math.ceil(result / (24 * 60 * 60)) - 1;
            result -= days * 24 * 60 * 60;
        }
    
        if (result > 0) {
            hours = Math.ceil(result / (60 * 60)) - 1;
            result -= hours * 60 * 60;
        }
    
        if (result > 0) {
            minutes = Math.ceil(result / (60)) - 1;
            result -= minutes * 60;
        }
    
        if (result > 0) {
            seconds = result;
        }
        
        return (
            <ul className={styles.countdown}>
                <Item 
                    value={days}
                    names={['день','дня','дней']}
                    disableZero={true}
                />
                <Item 
                    value={hours}
                    names={['час','часа','часов']}
                />
                <Item 
                    value={minutes}
                    names={['минуту','минуты','минут']}
                />
                <Item 
                    value={seconds}
                    names={['секунду', 'секунды', 'секунд']}
                />
            </ul>);
    }
    
};