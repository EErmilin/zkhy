
"use client"
import React, { useState } from 'react';
import styles from './RequestForm.module.scss'
import { Checkbox, Input } from 'antd';
import Calendar from 'react-calendar';
import "./Calendar.scss"
import ButtonDefault from '../ButtonDefault/ButtonDefault';
import Link from 'next/link';

const times = ['09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00', '09:00 - 10:00',]


export default function RequestForm() {
    const [value, onChange] = useState(new Date());

    const renderTime = () => {
        return times.map((item, key) => <div key={key} className={styles.time_btn}>{item}</div>)
    }

    return <div className={styles.container}>
        <h3>Выберите подходящую дату и время приема мастера</h3>
        <div className={styles.text}>Заполните заявку сейчас и ждите специалиста сегодня или завтра. Выезжаем в течение суток после обращения в удобное время. Результаты будут во ФГИС Аршин на следующий день.</div>
        <div className={styles.wrp}>
            <div className={styles.calendar}>
                <Calendar onChange={onChange} value={value} />
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
                    <Input  className={styles.input}></Input>
                </div>
                <div>
                    <div className={styles.input_label}>Ваш телефон</div>
                    <Input value={'+7 ('}></Input>
                </div>
                <div className={styles.btn_wrp}>
                    <Checkbox><span className={styles.checkbox}>Я&#160;принимаю&#160;условия <Link href={""} className={styles.checkbox}>политики конфиденциальности</Link></span></Checkbox>
                    <ButtonDefault className={styles.btn}>Оставить заявку</ButtonDefault>
                </div>
            </form>
        </div>
    </div>
}

