import Image from "next/image";
import styles from "./page.module.scss";
import Form from "@/components/Form/Form";
import Counters from "@/components/Counters/Counters";

import rctIcon from "../assets/svg/rct-gray.svg";
import garant1Icon from "../assets/svg/garant/1.svg";
import garant2Icon from "../assets/svg/garant/2.svg";
import garant3Icon from "../assets/svg/garant/3.svg";
import garant4Icon from "../assets/svg/garant/4.svg";
import garant5Icon from "../assets/svg/garant/5.svg";
import garant6Icon from "../assets/svg/garant/6.svg";
import cardIcon from "../assets/svg/card.svg";

import services1Icon from "../assets/svg/services/services1.svg";
import services2Icon from "../assets/svg/services/services2.svg";
import services3Icon from "../assets/svg/services/services3.svg";
import Metro from "@/components/Regions/Metro";
import ButtonDefault from "../components/ButtonDefault/ButtonDefault";

const prices = [
  {
    label: 'Поверка счетчиков воды',
    sum: '400',
  },
  {
    label: 'Замена счетчиков воды',
    sum: '2 150',
  },
  {
    label: 'Установка счетчиков воды',
    sum: '2 300',
  },
  {
    label: 'Поверка счетчиков тепла',
    sum: '3 700',
  },
  {
    label: 'Поверка счетчиков воды',
    sum: '5 500',
  },
  {
    label: 'Поверка счетчиков воды',
    sum: '14 000',
  }
]


export default function Home() {

  const renderPrice = () => {
    return prices.map((item, key) => <div
      key={key}
      className={[styles.price_items_item_wrp, key < 3 ? styles.price_items_item_white : styles.price_items_item_gray].join(" ")}>
      <div className={styles.price_items_item}>
        <div>
          <div className={styles.price_items_item_label}>{item.label}</div>
          <div className={styles.price_items_item_sum}>{key === 3 ? '' : 'от'} <span>{item.sum} ₽</span></div>
        </div>
        <ButtonDefault>Заказать</ButtonDefault>
      </div>
    </div>)
  }

  return (
    <div>
      <div className={styles.top_bg}>
        <div className={styles.top}>
          <div>
            <div className={styles.title}>
              ПОВЕРКА, ЗАМЕНА И УСТАНОВКА
              <div className={styles.sub_title}>счетчиков воды в Москве</div>
            </div>
            <div className={styles.text}>ЖКХ «Управление» оказывает услуги по установке, поверке, замене и обслуживанию счетчиков воды, а также выполняет широкий спектр сантехнических работ.</div>
            <div className={styles.stats_wrp}>
              <div className={styles.stats}>
                <div className={styles.stats_value}>750 365</div>
                <div className={styles.stats_title}>Поверок СИ в месяц</div>
              </div>
              <div className={styles.stats}>
                <div className={styles.stats_value}>107 109</div>
                <div className={styles.stats_title}>Замен приборов учета</div>
              </div>
              <div className={styles.stats}>
                <div className={styles.stats_value}>109 213</div>
                <div className={styles.stats_title}>Произведено установок СИ</div>
              </div>
            </div>
            <Image src={rctIcon} className={styles.rct} />
          </div>
          <Form />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.certificates_wrp}>
          <div className={styles.certificates}>
            <h2>Сертификаты</h2>
            <p className={styles.certificates_text}>ЖКХ «Управление» оказывает услуги по установке, поверке, замене и обслуживанию счетчиков воды, а также выполняет широкий спектр сантехнических работ. Работая с 2016 года в Москве мы накопили бесценный опыт решения задач любой сложности, укомплектовали штат лучшими мастерами, выработали четкую ценовую политику.</p>
            <div className={styles.discount}>
              <Image src={cardIcon} width={327} />
              <div>
                <div className={styles.discount_title}>Скидка 5%
                  <div className={styles.discount_sub_title}>на замену счетчиков воды</div>
                </div>
                <div className={styles.discount_text}>Скидка предоставляется обладателям социальной карты москвича</div>
                <ButtonDefault>Получить скидку</ButtonDefault>
              </div>
            </div>

            {/*            <ul>
              <li><Link href={''}>Приложение к аттестату аккредитации</Link></li>
              <li><Link href={''}>Аттестат Аккредитации RA.RU.311893</Link></li>
              <li><Link href={''}>Договор страхования гражданской ответственности</Link></li>
            </ul> */}
          </div>
          <div className={styles.garant}>
            <div className={styles.garant_title}>Мы гарантируем</div>
            <ul>
              <li><Image src={garant1Icon} /><span>Приезд метролога в назначенное время</span></li>
              <li><Image src={garant2Icon} /><span>Стоимость согласуется с клиентом до начала работы и не увеличивается</span></li>
              <li><Image src={garant3Icon} /><span>Полный комплект документов для ТСЖ и УК</span></li>
              <li><Image src={garant4Icon} /><span>Внесение в реестр ФГИС «Аршин»</span></li>
              <li><Image src={garant5Icon} /><span>Отсутствие навязанных услуг</span></li>
              <li><Image src={garant6Icon} /><span>Обходительное общение с клиентом</span></li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Услуги</h2>
          <div className={styles.certificate}>
            <div>Наша организация аккредитована в Росаккредитации</div>
            <div className={styles.certificate_number}>Аттестат аккредитации <span>RA.RU.000000</span></div>
          </div>
          <div className={styles.info}>
            <div className={styles.info_item}>
              <Image src={services1Icon} />
              <div className={styles.info_item_title}>Поверка счетчиков воды</div>
            </div>
            <div className={styles.info_item}>
              <Image src={services2Icon} />
              <div className={styles.info_item_title}>Замена счетчиков воды</div>
            </div>
            <div className={styles.info_item}>
              <Image src={services3Icon} />
              <div className={styles.info_item_title}>Установка счетчиков воды</div>
            </div>
          </div>
        </div>
      </div>
      <Metro />
      <div className={styles.container}>
        <Counters />
      </div>
      <div className={styles.price}>
        <div className={styles.price_wrp}>
          <div className={styles.price_title}>Стоимость поверки, замены и установки счетчиков в Москве</div>
          <div className={styles.price_items_wrp}>
            {renderPrice()}
          </div>
        </div>
      </div>
    </div>
  );
}
