import React from 'react';
import smoothScroll from 'smoothscroll';

import styles from './Main.scss';

const scrollTo = selector =>
    setTimeout(function() {
        smoothScroll(document.querySelector(selector));
    }, 50);

export default () => (
    <section className={`${styles.section} ${styles.about}`} id="about">
        <div className={styles.content}>
            <h5>О КОНКУРСЕ</h5>
            <h2>Фотовыставка-2017</h2>
            <div className={styles.toLeft}>
                <p className={styles.ident_20}>
                    Ежегодная фотовыставка{' '}
                    <b>«Туризм – мой здоровый образ жизни»</b> проводится в
                    рамках областного социального проекта «Здоровая молодежь -
                    здоровый регион» при поддержке управления молодежной
                    политики Липецкой области.
                </p>
                <p>
                    <b>Участники:</b>
                </p>
                <p className={styles.ident_20}>
                    Жители Липецкой области без возрастных ограничений.
                </p>
                <p>
                    <b>
                        Основные цели и задачи (можешь не читать, но это очень
                        важно):
                    </b>
                </p>
                <p>
                    <ul>
                        <li>
                            привлечение внимания молодежи к самодеятельному
                            туризму и здоровому образу жизни, приятному
                            времяпровождению на природе и необходимости ее
                            сохранения, ценности природного наследия для каждого
                            человека;
                        </li>
                        <li>
                            выявление талантливых туристов-фотографов,
                            представляющих свои работы в области туризма;
                        </li>
                        <li>
                            стимулирование познавательной деятельности молодежи;
                        </li>
                        <li>
                            привлечение внимания к туристическим и спортивным
                            клубам Липецкой области;
                        </li>
                        <li>
                            развитие самостоятельности, творческих способностей
                            участников, раскрытие их творческого потенциала в
                            сфере туриндустрии и здорового образа жизни;
                        </li>
                        <li>популяризация фотоискусства.</li>
                    </ul>
                </p>
                <p>
                    <b>Организатор:</b>
                </p>
                <p className={styles.ident_20}>
                    Липецкая областная молодежная спортивно-оздоровительная
                    общественная организация «Ассоциация мультиспорта». Можешь
                    погуглить, какие мы хорошие. И да, фон сайта – это
                    снимки-победители прошлой фотовыставки.
                </p>
                <p>
                    <b>Партнер:</b>
                </p>
                <p className={styles.ident_20}>
                    Липецкая областная универсальная научная библиотека.
                </p>
                <p>
                    <b>
                        Сроки проведения выставки по итогам конкурсного отбора:
                    </b>
                </p>
                <p className={styles.ident_20}>
                    24 ноября 2018 г. по 24 декабря 2018 г.
                </p>
                <p>
                    <b>Открытие:</b>
                </p>
                <p className={styles.ident_20}>
                    24 ноября 2018 года в 15.00. Планируется демонстрация
                    интересных видеороликов, беседы с представителями туристских
                    клубов и сообществ, встречи с туристами и путешественниками.
                    Приходи, будет интересно.
                </p>
                <p>
                    <b>Место проведения:</b>
                </p>
                <p className={styles.ident_20}>
                    Ждем тебя в Липецкой областной универсальной научной
                    библиотеке (адрес: г. Липецк, ул.Кузнечная, 2).
                </p>
                <p>
                    <b>Номинация фотовыставки:</b>
                </p>
                <p>
                    <ul>
                        <li>
                            <b>«Туризм - мой здоровый образ жизни»</b>{' '}
                            (фотографии, на которых показаны «активности»
                            человека (людей) в водных, пеших, горных и иных
                            походах и турсоревнованиях). Иными словами, ждем
                            таких твоих снимков, которые заставят каждого
                            посмотревшего на них (и особенно жюри) сказать:
                            «Хочу в поход!». Человек в кадре обязателен!
                        </li>
                        <li>
                            <b>«Эх, просторы» и «Родные просторы»</b>{' '}
                            (фотографии природных объектов, сделанные в походе,
                            на маршруте, в экспедиции и т.д.). Ага-ага, красота
                            спасет мир. Давай такие снимки, будем спасать мир
                            вместе!
                        </li>
                        <li>
                            <b>«Мое Селф»</b>
                        </li>
                    </ul>
                </p>
                <p>
                    <b>Количество работ от одного участника:</b>
                </p>
                <p className={styles.ident_20}>
                    <b>Не более 3 штук</b> в номинации «Туризм - мой здоровый
                    образ жизни», <b>не более 2 штук</b> в номинации «Эх,
                    просторы» и «Родные просторы» и не более не более{' '}
                    <b>1 штуки</b> в номинации «Мое Селфи».
                </p>
                <p>
                    <b>Заявка на участие в фотовыставке:</b>
                </p>
                <p className={styles.ident_20}>Только через этот сайт.</p>
                <p className={styles.ident_20}>
                    Прием работ для фотовыставки осуществляется до{' '}
                    <b>23:59 15 ноября 2018 года</b>. Убедительная просьба не
                    тянуть до 23:58 указанного дня (из-за количества участников,
                    решивших отправить свои заявки именно в это время, сайт
                    может включить функцию самоспасения и быстренько передвинуть
                    стрелки вперед).
                </p>
                <p>
                    <b>Итоги:</b>
                </p>
                <p className={styles.ident_20}>
                    После выборки лучших работ (не забудь посмотреть раздел{' '}
                    <a onClick={() => scrollTo('#jury')}>«Жюри»</a> на главной
                    странице сайта) организаторы печатают фотографии в размере
                    А-4 для фотовыставки за счет своих средств.
                </p>
                <p className={styles.ident_20}>
                    Победители в каждой номинации награждаются призами и
                    грамотами в день открытия выставки.
                </p>
                <p className={styles.ident_20}>
                    И да, каждый посетитель фотовыставки может проголосовать за
                    самую интересную работу (ага, почувствуй себя жюри!).Через
                    месяц по итогам мы обязательно определим лучший снимок и
                    вручим его автору приз зрительских симпатий. Приглашать
                    друзей только приветствуется!
                </p>
                <p>
                    <b>Иное:</b>
                </p>
                <p className={styles.ident_20}>
                    Если у тебя еще остались вопросы, не стесняйся, заглядывай в
                    раздел{' '}
                    <a onClick={() => scrollTo('#contacts')}>«Контакты»</a> на
                    главной странице, пиши или звони. Так и быть, ответим!
                </p>
            </div>
        </div>
    </section>
);
