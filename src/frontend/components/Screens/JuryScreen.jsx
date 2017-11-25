import React from 'react';
import styles from './Main.scss';
import Col from 'Controls/Col.jsx';
import Row from 'Controls/Row.jsx'; 

const Jury = ({ img, name, posY, children }) => (
    <Col number={4}>
        <div className={styles.box}>
            <div className={styles.img} style={{
                backgroundImage: `url("/assets/images/jury/${img}")`,
                backgroundPositionY: posY ? '0px' : 'none'
            }}></div>
            <h3 className={styles.bold}>{name}</h3>
            <p>{children}</p>
        </div>
    </Col>
);

export default () => (
    <section className={`${styles.section} ${styles.jury}`} id="jury">
        <div className={styles.content}>
            <h5>НАШЕ ЖЮРИ</h5>
            
            <Row>
                <Jury 
                    img={'Estropov.jpg'}
                    posY={'0px'}
                    name={'Анатолий Евстропов'}
                >
                    Редактор отдела фотоиллюстраций издательского дома "Липецкая газета". Интересуется фотографией с 15 лет. В 1990 году увлечение переросло в профессию. Лауреат и дипломант всероссийских и областных фотоконкурсов.
                </Jury>
                <Jury 
                    img={'Sorokin.jpg'}
                    name={'Юрий Сорокин'}
                >
                    Офицер запаса. Заинтересовался фотографией после выхода на пенсию. В основном увлекает природная фотография. Неоднократный победитель и лауреат фотоконкурсов "Дикая природа России", "Самая красивая страна", "Лучшие фотографии России", финалист конкурса "Золотая черепаха". 
                </Jury>
                <Jury 
                    img={'Astahov.jpg'}
                    name={'Тимофей Астахов'}
                >
                    В настоящее время работаю в телекомпании ГТРК "Липецк". С 1994 по 2003 г. работал фотолаборантом. В 2003 году ушел на телевидение, и до осени 2016 года проработал телеоператором на канале ТВК. Регулярно хожу в походы около 10 лет. Был в Карпатах, Хибинских и Ловозерских тундрах, на Алтае, Полярном и Южном Урале, на Кавказе.
                </Jury>
            </Row>
            <Row>
                <Jury 
                    img={'Panin.jpg'}
                    name={'Сергей Панин'}
                >
                    В туризме с 2001 года, был КМС. Руководитель многочисленных водных и горных походов от Мурманска до Владивостока. Любитель фото- и видеосъёмки.
                </Jury>
                <Jury 
                    img={'Dina.jpg'}
                    name={'Дина Кюнбергер'}
                >
                    Pr-специалист Липецкой областной научной библиотеки. Люблю хорошие книги, уютные встречи, осенний лес и далёкие путешествия.
                </Jury>
                <Jury 
                    img={'Cherkasov.jpg'}
                    name={'Николай Черкасов'}
                >
                Старший фотокорреспондент отдела иллюстраций Издательского дома "Липецкая газета",  член Союза художников России, Международной ассоциации изобразительных искусств –АИАП ЮНЕСКО, Международной федерации журналистов, Союза журналистов России. Участник многих художественных выставок в стране и за рубежом. Победитель и лауреат различных фотоконкурсов. 
                </Jury>
            </Row>
        </div>
        
        
    </section>
);