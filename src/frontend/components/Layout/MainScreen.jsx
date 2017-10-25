import React from 'react';
import styles from './Screen.scss';
import ClassName from 'className.js';
import info from '../../../../public/assets/images/info.json';

const imgCount = 6;

export default class MainScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            width: 0,
            activeImg: 0,
            setActive: true
        };
    }

    onResize = () => {
        this.setState({
            width: window.innerWidth
        });
    };

    componentWillMount() {
        window.addEventListener('resize', this.onResize);
        this.onResize();

        this.timer = setInterval(() => {
            let activeImg = this.state.activeImg + 1;
            if (activeImg > imgCount - 1) {
                activeImg = 0;
            }

            this.setState({activeImg, setActive:true});
        },25000);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
        clearInterval(this.timer);
    }

    render() {
        const {
            width,
            activeImg,
            setActive
        } = this.state;
        const {appScroll} = this.props;

        const photoInfo = info[`img_${activeImg +1}`];

        let items = [];
        let i = 1;
        for (i = 1; i<=imgCount; i++) {
            items.push({
                id:i-1,
                url: `/assets/images/img_${i}.jpg`,
                position: 0
            });
        }

        let a = activeImg -1; i= 0;
        while (a>= 0) {
            i++;
            items[a].position = -i * width;
            a -= 1;
        }

        a = activeImg + 1; i = 0;
        for (a = activeImg + 1; a<=imgCount-1; a++) {
            i++;
            items[a].position = i * width;
        }
        return (
            (
                <div className={`${styles.subheader}`} id="main">
                    <div className={styles.screens}>
                        {
                            items.map(x=>(<div
                                {...ClassName({[styles.scale]: x.id === activeImg})}
                                key={x.id} 
                                style={
                                    {
                                        background:`url("${x.url}")`,
                                        //left: `-${x.position}px`,
                                        transform: `translateX(${x.position}px)`,
                                        backgroundSize:`cover`,
                                        backgroundPosition: '50% 50%'
                                    }
                                }
                            ></div>))       
                        }  
                    </div>
                    {!appScroll && <div className={styles.screenInfo}>
                        <div className={styles.author}>{photoInfo.author}</div>
                        <div className={styles.description}>{photoInfo.description}</div>
                    </div>}
                    {this.props.children}
                </div>
            )
        );
    }
}