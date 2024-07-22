
"use client"
import React from 'react';
import styles from './RequestForm.module.scss'
import { Checkbox, Input } from 'antd';
import Link from 'next/link';


const times = ['09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00',]


export default function RequestForm() {

    const renderTime = () => {
        return times.map((item, key) => <button key={key}>{item}</button>)
    }

    return <div>
        <h3>Выберите подходящую дату и время приема мастера</h3>
        <div className={styles.text}>Заполните заявку сейчас и ждите специалиста сегодня или завтра. Выезжаем в течение суток после обращения в удобное время. Результаты будут во ФГИС Аршин на следующий день.</div>
        <div className={styles.wrp}>
            <div className={styles.calendar}>
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
                    <Input></Input>
                </div>

            </form>
        </div>
    </div>
}

