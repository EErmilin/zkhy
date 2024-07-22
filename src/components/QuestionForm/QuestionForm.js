
"use client"
import React from 'react';
import styles from './QuestionForm.module.scss'
import { Checkbox, Input } from 'antd';
import Link from 'next/link';



export default function QuestionForm() {



    return <form className={styles.form}>
        <div className={styles.form_wrp}>
            <div className={styles.title}>Остались вопросы?</div>
            <div className={styles.text}>Заполните форму и наши специалисты ответят на все ваши вопросы</div>

            <div className={styles.data}>
                <div className={styles.input}>
                    <div className={styles.input_label}>Введите ваше имя</div>
                    <Input></Input>
                </div>
                <div className={styles.input}>
                    <div className={styles.input_label}>Телефон</div>
                    <Input value={'+7 ('}></Input>
                </div>
                <button className={styles.btn}>Получить консультацию</button>

            </div>
            <Checkbox><span className={styles.checkbox}>Я принимаю условия <Link href={""} className={styles.checkbox}>политики конфиденциальности</Link></span></Checkbox>
        </div>
    </form>
}

