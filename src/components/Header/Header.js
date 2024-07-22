
import React from 'react';
import styles from './Header.module.scss'
import Link from 'next/link';


const Header = ({ bg }) => (

    <header className={styles.container} style={{ backgroundColor: bg }}>
        <div className={styles.wrp} >
            <Link href={'/'} className={styles.logo_wrp}>
                <div className={styles.logo}></div>
                <div>
                    <div className={styles.logo_link}>Upravlenie.ru</div>
                    <div className={styles.logo_title}>ЖКХ Управление</div>
                    <div className={styles.logo_sub_title}>Аккредитованная компания  г. Москвы</div>
                </div>
            </Link>
            <div className={styles.attestat_wrp}>
                <div className={styles.attestat}></div>
                <div>
                    <div>Аттестат аккредитации</div>
                    <a href="http://zhku.ramzzes.ru/#RA.RU.000000"> <b>RA.RU.000000</b></a>
                </div>

            </div>
            <div >
                <div>
                    <div className={styles.address}>Адрес:</div>
                    <span className={styles.point}><b>г. Москва</b>, Лазаревский переулок, 8</span>
                </div>
            </div>
            <div>
                <div className={styles.time}>Ежедневно с 8:00 до 21:00</div>
                <div className={styles.phone}>
                    <a href="tel:+74994606658"><b>+7 (499) 460-66-58</b></a>
                </div>
            </div>
        </div>
    </header>

);


export default Header;
