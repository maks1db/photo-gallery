import React from 'react';
import styles from './Screen.scss';
import ClassName from 'className.js';


const imgCount = 3;

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
            // setTimeout(() => {
            //     this.setState({setActive:true})
            // },1000)
        },60000);
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
                                //{...ClassName({[styles.active]: setActive && x.id === activeImg})}
                                key={x.id} 
                                style={
                                    {
                                        background:`url("${x.url}")`,
                                        transform: `translateX(${x.position}px)`
                                    }
                                }
                            ></div>))     
                        }
                    </div>
                    {this.props.children}
                </div>
            )
        );
    }
}