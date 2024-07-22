
import React from 'react';
import styles from './Metro.module.scss'
import Link from 'next/link';

const districts = ['ЦАО', 'ЗелАО', 'НАО', 'ВАО', 'ЗАО', 'САО', 'СВАО', 'СЗАО', 'ТАО', 'ЮВАО', 'ЮЗАО', 'ЮАО', 'МО']

export default function Metro({ isShowMetro }) {

    const renderMetro = () => {
        return districts.map((item, key) => <Link className={styles.region_btn} href={'/verification'} key={key}>{item}</Link>)
    }

    return <div className={styles.region}>
        <div className={styles.region_wrp}>
            <div className={styles.region_title}>Осуществляем поверку счетчиков воды во всех округах Москвы
                и районах Московской области</div>
            <div className={styles.region_btn_wrp}>
                {renderMetro()}
            </div>
            {isShowMetro && <div className={styles.metro}>
                <div className={styles.metro_title}>Поверка, замена и установка в любой удобный для вас день во всех районах ЦАО</div>
                <div className={styles.metro_wrp}>
                    <div className={styles.district}>Арбат</div>
                    <div className={styles.district}>Арбат</div>
                    <div className={styles.district}>Арбат</div>
                    <div className={styles.district}>Арбат</div>
                    <div className={styles.district}>Арбат</div>
                    <div className={styles.district}>Арбат</div>
                    <div className={styles.district}>Арбат</div>
                    <div className={styles.district}>Арбат</div>
                    <div className={styles.district}>Арбат</div>
                    <div className={styles.district}>Арбат</div>
                    <div className={styles.district}>Арбат</div>
                    <div className={styles.district}>Арбат</div>
                </div>
                <div className={styles.metro_title}>Для вызова мастера выберите ближайшую к вам станцию метро</div>
                <div className={styles.metro_wrp}>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                    <span className={styles.metro_item}>Александровский сад</span>
                </div>
            </div>}
        </div>
    </div>
}

