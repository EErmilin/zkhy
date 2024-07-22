
"use client"
import React from 'react';
import styles from './Form.module.scss'
import { Checkbox, Input, Select } from 'antd';
import Link from 'next/link';



export default function Form({ type }) {
    let title;
    switch (type) {
        case 'verification':
            title = `Осуществляем поверку 
счетчиков воды`
            break;
        case 'replacement':
            title = `Осуществляем замену 
счетчиков воды`
            break;
        case 'installation':
            title = `Осуществляем установку
счетчиков воды`
            break;
        default:
            title = `Осуществляем поверку, замену
и установку счетчиков воды`
            break;
    }

    const optionsSelect = [
        {
            value: 'Южный АО',
            label: 'Южный АО',
        },
        {
            value: 'lucy',
            label: 'Lucy',
        },

    ]
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    return <form className={styles.form}>
        <h3 className={styles.title}>{title}
            <div className={styles.sub_title}>во всех округах Москвы</div>
        </h3>

        <div className={styles.select_label}>Выберите свой округ</div>
        <Select
            className={styles.select}
            showSearch
            value={optionsSelect[0]}
            placeholder="Select a person"
            optionFilterProp="label"
            onChange={onChange}
            onSearch={onSearch}
            options={optionsSelect}
        />
        <div className={styles.bottom}>
            <div className={styles.bottom_info}>
                <div className={styles.omr}>
                    <span className={styles.omr_selected}>ОМР №15</span>
                    <span className={styles.omr_noselected}>ОМР №16</span>
                </div>
                <div className={styles.bottom_info_address}>Нагатинская улица, 11к1</div>
                <div>
                    <div className={styles.bottom_info_title}>Ответственный:</div>
                    <b>Бочаров Ярослав Иванович</b>
                </div>
                <div>
                    <div className={styles.bottom_info_title}>Телефон диспетчерской:</div>
                    <b>+7 (499) 460-66-58</b> добавочный <b>511</b>
                </div>
            </div>
            <div className={styles.data}>
                <Input className={styles.input}></Input>
                <Input className={styles.input}></Input>
                <button>Получить консультацию</button>
                <Checkbox><span className={styles.checkbox}>Даю <Link href={""} className={styles.checkbox}>согласие</Link> на обработку данных</span></Checkbox>
            </div>
        </div>
    </form>
}

