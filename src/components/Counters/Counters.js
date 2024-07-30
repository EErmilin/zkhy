
import styles from './Counters.module.scss'
import cnt1 from '../../assets/img/cnt/cnt1.png'
import cnt2 from '../../assets/img/cnt/cnt2.png'
import cnt3 from '../../assets/img/cnt/cnt3.png'
import cnt4 from '../../assets/img/cnt/cnt4.png'
import cnt5 from '../../assets/img/cnt/cnt5.png'
import cnt6 from '../../assets/img/cnt/cnt6.png'
import cnt7 from '../../assets/img/cnt/cnt7.png'
import cnt8 from '../../assets/img/cnt/cnt8.png'
import cnt9 from '../../assets/img/cnt/cnt9.png'
import cnt10 from '../../assets/img/cnt/cnt10.png'
import cnt11 from '../../assets/img/cnt/cnt11.png'
import cnt12 from '../../assets/img/cnt/cnt12.png'
import Image from 'next/image'
import ButtonDefault from '../ButtonDefault/ButtonDefault'

const stamps = [
  {
    title: 'ITELMA',
    price: 400,
    oldPrice: 400,
    img: cnt1
  },
  {
    title: 'VALTEC',
    price: 400,
    oldPrice: 400,
    img: cnt2
  },
  {
    title: 'DECAST',
    price: 400,
    oldPrice: 400,
    img: cnt3
  },
  {
    title: 'SAURES',
    price: 400,
    oldPrice: 400,
    img: cnt4
  },
  {
    title: 'БЕТАР',
    price: 400,
    oldPrice: 400,
    img: cnt5
  },
  {
    title: 'МЕТЕР',
    price: 400,
    oldPrice: 400,
    img: cnt6
  },
  {
    title: 'НОРМА',
    price: 400,
    oldPrice: 400,
    img: cnt7
  },
  {
    title: 'ПУЛЬС',
    price: 400,
    oldPrice: 400,
    img: cnt8
  },
  {
    title: 'ПУЛЬСАР',
    price: 400,
    oldPrice: 400,
    img: cnt9
  },
  {
    title: 'ТЕПЛОВОДОМЕР',
    price: 400,
    oldPrice: 400,
    img: cnt10
  },
  {
    title: 'ЭКОНОМ',
    price: 400,
    oldPrice: 400,
    img: cnt11
  },
  {
    title: 'ЭКОМЕРА',
    price: 400,
    oldPrice: 400,
    img: cnt12
  },
]

export default function Counters({ type }) {

  const title = type === 'verification' ? 'Проводим поверку водосчетчиков всех производителей'
    : type === 'replacement' ? 'Проводим замену водосчетчиков всех производителей'
      : 'Проводим поверку, замену и установку водосчетчиков всех производителей'

  const renderStamps = () => {
    return stamps.map((item, key) => <div className={styles.counters_item} key={key}>
      <div>{item.title}</div>
      <Image src={item.img} />
      <div>
        <div className={styles.counters_item_price}>от <b>{item.price}</b> рублей</div>
        {type === 'replacement' && <div className={styles.counters_item_price_old}>от {item.oldPrice} рублей</div>}
      </div>
      <ButtonDefault className={styles.counters_item_btn}>{type !== 'verification' ? 'Заказать замену' : 'Заказать поверку'}</ButtonDefault>
    </div>)
  }

  return <div className={styles.counters}>
    <h3>{title}</h3>
    <div className={styles.counters_wrp}>
      {renderStamps()}
    </div>
    <div className={styles.counters_text}>Не каждая организация возьмется за поверку водосчетчиков, если ваш прибор учета расхода холодного или горячего водоснабжения нестандартного типа. Попали в такую ситуацию — вызывайте специалиста. Работаем с десятками партнеров с аккредитацией, которые обслуживают водомеры всех типов (ХВС И ГВС) и марок.
      Сегодня поверка счетчика воды проходит без снятия самого прибора учета в узле водоснабжения квартиры. Такая проверка дороже на 100—200 рублей, однако при этом нет необходимости демонтировать, а потом заново монтировать водомер.</div>
  </div>
}

