
"use client"
import './Questions.scss'
import { Collapse } from 'antd';
import styles from './Questions.module.scss'

export default function Questions({ type }) {

  const text = <div>
    <ul>
      Обязанность вовремя поверять водосчетчики возложена на собственника жилья, так как бытовые приборы учета — личное имущество граждан. Подробно эти требования расписаны в следующих законодательных актах:
      <li>ФЗ-№ 102</li>
      <li>постановлении Правительства № 354</li>
      <li>приказе Минпромторга № 2510</li>
    </ul>
  </div>;
  const items = [
    {
      key: '1',
      label: 'Почему поверка счетчиков воды нужна обязательно?',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'Как узнать, что пришло время делать поверку?',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'Что будет, если пропустить срок поверки?',
      children: <p>{text}</p>,
    },
    {
      key: '4',
      label: 'Как проходит поверка счетчиков воды?',
      children: <p>{text}</p>,
    },
    {
      key: '5',
      label: 'Что будет, если счетчик не пройдет поверку?',
      children: <p>{text}</p>,
    },
    {
      key: '6',
      label: 'Что делать после поверки и куда нести документы?',
      children: <p>{text}</p>,
    },
  ];

  return <div>
    <h3 className={styles.title}>Ответы на частые вопросы</h3>
    <Collapse defaultActiveKey={['1']} ghost items={items} accordion onChange={(e) => console.log(e)} expandIconPosition="right" />
  </div>
}

