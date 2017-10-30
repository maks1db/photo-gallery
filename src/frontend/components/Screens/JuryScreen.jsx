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
                            backgroundImage: 'url("/assets/images/jury/Estropov.jpg")',
                            backgroundPositionY: '0px'
                        }}></div>
                        <h3 className={styles.bold}>Анатолий Евстропов</h3>
                        <p>Редактор отдела фотоиллюстраций издательского дома "Липецкая газета". Интересуется фотографией с 15 лет. В 1990 году увлечение переросло в профессию. Лауреат и дипломант всероссийских и областных фотоконкурсов.</p>
                    </div>
                </Col>
                <Col number={4}>
                    <div className={styles.box}>
                        <div className={styles.img} style={{
                            backgroundImage: 'url("/assets/images/jury/Sorokin.jpg")'
                        }}></div>
                        <h3 className={styles.bold}>Юрий Сорокин</h3>
                        <p>Офицер запаса. Заинтересовался фотографией после выхода на пенсию. В основном увлекает природная фотография. Неоднократный победитель и лауреат фотоконкурсов "Дикая природа России", "Самая красивая страна", "Лучшие фотографии России", финалист конкурса "Золотая черепаха".</p>
                    </div>
                </Col>
                <Col number={4}>
                    <div className={styles.box}>
                        <div className={styles.img} style={{
                            backgroundImage: 'url("/assets/images/jury/Astahov.jpg")'
                        }}></div>
                        <h3 className={styles.bold}>Тимофей Астахов</h3>
                        <p>В настоящее время работаю в телекомпании ГТРК "Липецк". С 1994 по 2003 г. работал фотолаборантом. В 2003 году ушел на телевидение, и до осени 2016 года проработал телеоператором на канале ТВК. Регулярно хожу в походы около 10 лет. Был в Карпатах, Хибинских и Ловозерских тундрах, на Алтае, Полярном и Южном Урале, на Кавказе.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col number={4}>
                    <div className={styles.box}>
                        <div className={styles.img} style={{
                            backgroundImage: 'url("/assets/images/jury/Panin.jpg")'
                        }}></div>
                        <h3 className={styles.bold}>Сергей Панин</h3>
                        <p>В туризме с 2001 года, был КМС. Руководитель многочисленных водных и горных походов от Мурманска до Владивостока. Любитель фото- и видеосъёмки.</p>
                    </div>
                </Col>
                <Col number={4}>
                    <div className={styles.box}>
                        <div className={styles.img} style={{
                            backgroundImage: 'url("/assets/images/jury/Dina.jpg")'
                        }}></div>
                        <h3 className={styles.bold}>Дина Кюнбергер</h3>
                        <p>Pr-специалист Липецкой областной научной библиотеки. Люблю хорошие книги, уютные встречи, осенний лес и далёкие путешествия.</p>
                    </div>
                </Col>
                
            </Row>
        </div>
        
        
    </section>
);