import Image from "next/image";
import styles from "./page.module.scss";
import Form from "@/components/Form/Form";
import Icon1 from "../../assets/svg/install/1.svg";
import Icon2 from "../../assets/svg/install/2.svg";
import Icon3 from "../../assets/svg/install/3.svg";
import Icon4 from "../../assets/svg/install/4.svg";
import garantIcon from "../../assets/svg/garant.svg";
import locationIcon from "../../assets/svg/location.svg";
import insuranceIcon from "../../assets/svg/insurance.svg";
import timingIcon from "../../assets/svg/timing.svg";

export default function Home() {

  return (
    <div>
      <div className={styles.top_bg}>
        <div className={styles.top}>
          <div>
            <div className={styles.title}>
              <div className={styles.sub_title}>Установка счетчиков воды в Москве</div>
              от 2 300 рублей
            </div>
            <div className={styles.text}>Проверенные и надежные метрологи. Выбирайте округ, дату и время — мастер приедет в течение дня. Результаты поверки водосчетчиков вносятся во ФГИС Аршин.</div>

            <div className={styles.stats_wrp}>
              <div className={styles.stats}>
                <div className={styles.stats_value}>114 046</div>
                <div className={styles.stats_title}>Заявок обработано</div>
              </div>
              <div className={styles.rct} />
            </div>
          </div>
          <Form type={'installation'}/>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.info_item}>
            <Image src={garantIcon} />
            <div className={styles.info_item_title}>Гарантии на все работы</div>
            <div className={styles.info_item_text}>Гарантии на комплектующие и на работу</div>
          </div>
          <div className={styles.info_item}>
            <Image src={locationIcon} />
            <div className={styles.info_item_title}>Работаем в Москве и МО</div>
            <div className={styles.info_item_text}>Выезд мастера возможен в любой район Московской области</div>
          </div>
          <div className={styles.info_item}>
            <Image src={insuranceIcon} />
            <div className={styles.info_item_title}>Лицензия и страховка</div>
            <div className={styles.info_item_text}>Вы защищены законом и страховым полисом</div>
          </div>
          <div className={styles.info_item}>
            <Image src={timingIcon} />
            <div className={styles.info_item_title}>Мастер придет вовремя</div>
            <div className={styles.info_item_text}>Мастер выполнит заявку в день оформления заказа</div>
          </div>
        </div>
        <div >
          <h3 className={styles.price_title}>Установите счетчик и платите меньше за ЖКУ</h3>
          <div className={styles.price}>
            <div className={styles.price_item}>
              <Image src={Icon3} />
              <div>
                <div className={styles.price_item_title}>Вы <b>экономите 13 800 ₽</b> в месяц</div>
                <div className={styles.price_item_sum}>1 163 ₽ со счетчиком</div>
                <div className={styles.price_item_sum_full}><span>14 963 ₽</span> без счетчика</div>
              </div>
            </div>
            <div className={styles.price_item}>
              <Image src={Icon1} />
              <div>
                <div className={styles.price_item_title}>Вы <b>экономите 13 800 ₽</b> в месяц</div>
                <div className={styles.price_item_sum}>1 163 ₽ со счетчиком</div>
                <div className={styles.price_item_sum_full}><span>14 963 ₽</span> без счетчика</div>
              </div>
            </div>
            <div className={styles.price_item}>
              <Image src={Icon2} />
              <div>
                <div className={styles.price_item_title}>Вы <b>экономите 13 800 ₽</b> в месяц</div>
                <div className={styles.price_item_sum}>1 163 ₽ со счетчиком</div>
                <div className={styles.price_item_sum_full}><span>14 963 ₽</span> без счетчика</div>
              </div>
            </div>
            <div className={styles.price_item}>
              <Image src={Icon4} />
              <div>
                <div className={styles.price_item_title}>Вы <b>экономите 13 800 ₽</b> в месяц</div>
                <div className={styles.price_item_sum}>1 163 ₽ со счетчиком</div>
                <div className={styles.price_item_sum_full}><span>14 963 ₽</span> без счетчика</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
