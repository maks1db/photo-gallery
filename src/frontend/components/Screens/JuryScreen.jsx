import React from 'react';
import styles from './Main.scss';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 

export default () => (
    <section className={`${styles.section} ${styles.jury}`} id="jury">
        <div className={styles.content}>
            <h5>НАШЕ ЖЮРИ</h5>
            <Row>
                <Col number={4}>
                    <div className={styles.box}>
                        <div className={styles.img} style={{
                            backgroundImage: 'url("/assets/images/peter.jpg")'
                        }}></div>
                        <h3 className={styles.bold}>Питер Гриффин</h3>
                        <p>Лучший фотограф липецкой области</p>
                    </div>
                </Col>
                <Col number={4}>
                    <div className={styles.box}>
                        <div className={styles.img} style={{
                            backgroundImage: 'url("/assets/images/stew.jpg")'
                        }}></div>
                        <h3 className={styles.bold}>Стьюи Гриффин</h3>
                        <p>Совершил восхождение на Эверест с завязанными глазами</p>
                    </div>
                </Col>
                <Col number={4}>
                    <div className={styles.box}>
                        <div className={styles.img} style={{
                            backgroundImage: 'url("/assets/images/cartman.jpg")'
                        }}></div>
                        <h3 className={styles.bold}>Эрик Картмэн</h3>
                        <p>Сплавляется по горным рекам на надувном матрасе</p>
                    </div>
                </Col>
            </Row>
        </div>
        
        
    </section>
);