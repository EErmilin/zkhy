
import React from 'react';
import styles from './Footer.module.scss'
import Link from 'next/link';

const Footer = () => (

    <footer className={styles.wrp}>
        <div className={styles.content}>
            <div >
                <ul className={styles.links}>
                    <li>- Поверка счетчиков воды</li>
                    <li>- Замена счетчиков воды</li>
                    <li>- Установка счетчиков воды</li>
                    <li>- Поверка теплосчетчиков</li>
                    <li>- Замена теплосчетчиков</li>
                    <li>- Установка теплосчетчиков</li>
                    <li>- Сантехнические работы</li>
                </ul>
            </div>
            <div >
                <ul className={styles.links}>
                    <li>- Диспетчеризация</li>
                    <li>- О компании</li>
                    <li>- Помощь</li>
                    <li>- Техническое обслуживание</li>
                    <li>- Контакты</li>
                </ul>
            </div>
            <div >
                <button type="button" className={styles.btn}>Оставить заявку</button>
                <p className={styles.text}>
                    <Link href={""} className={styles.policity}>Политика конфиденциальности</Link>
                    © 2016-2023 ЖКХ «Управление»
                </p>
            </div>
        </div>
    </footer>

);


export default Footer;
