
"use client"
import React from 'react';
import styles from './RequestForm.module.scss'
import { Calendar, Input } from 'antd';
import "./Calendar.scss"


const times = ['09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00',]


export default function RequestForm() {

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };

    const renderTime = () => {
        return times.map((item, key) => <div key={key} className={styles.time_btn}>{item}</div>)
    }

    return <div className={styles.container}>
        <h3>Выберите подходящую дату и время приема мастера</h3>
        <div className={styles.text}>Заполните заявку сейчас и ждите специалиста сегодня или завтра. Выезжаем в течение суток после обращения в удобное время. Результаты будут во ФГИС Аршин на следующий день.</div>
        <div className={styles.wrp}>
            <div className={styles.calendar}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                <div className={styles.time}>
                    {renderTime()}
                </div>
            </div>
            <form className={styles.form}>
                <div>
                    <div className={styles.input_label}>Услуга</div>
                    <Input></Input>
                </div>
                <div>
                    <div className={styles.input_label}>Ваше имя</div>
                    <Input></Input>
                </div>
                <div>
                    <div className={styles.input_label}>Адрес</div>
                    <Input></Input>
                </div>
                <div>
                    <div className={styles.input_label}>Ваш телефон</div>
                    <Input value={'+7 ('}></Input>
                </div>
            </form>
        </div>
    </div>
}

