import Image from "next/image";
import styles from "./page.module.scss";
import Form from "@/components/Form/Form";
import counterHeatIcon from "../../assets/svg/counter-heat.svg";
import counterWaterIcon from "../../assets/svg/counter-water.svg";
import garantIcon from "../../assets/svg/garant.svg";
import locationIcon from "../../assets/svg/location.svg";
import insuranceIcon from "../../assets/svg/insurance.svg";
import timingIcon from "../../assets/svg/timing.svg";
import Counters from "@/components/Counters/Counters";
import Metro from "@/components/Regions/Metro";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";

export default function Home() {

  return (
    <div>
      <div className={styles.top_bg}>
        <div className={styles.top}>
          <div>
            <div className={styles.title}>
              <div className={styles.sub_title}>Поверка счетчиков воды в ЦАО</div>
              от 400 рублей
            </div>
            <div className={styles.text}>Проверенные и надежные метрологи. Выбирайте округ, дату и время — мастер приедет в течение дня. Результаты поверки водосчетчиков вносятся во ФГИС Аршин.</div>
            <div className={styles.stats_wrp}>
              <div className={styles.stats}>
                <div className={styles.stats_value}>750 365</div>
                <div className={styles.stats_title}>Поверок СИ в месяц</div>
              </div>
              <div className={styles.rct} />
            </div>
          </div>
          <Form type={'verification'} />
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
        <Counters type={"verification"} />
      </div>
      <Metro isShowMetro={true} />
      <div className={styles.container}>
        <div className={styles.price}>
          <h3>Стоимость замены счетчиков в Москве</h3>
          <div className={styles.price_wrp}>
            <div className={styles.price_item}>
              <div className={styles.price_item_text}>
                <Image src={counterWaterIcon} />
                <div>
                  <div className={styles.price_title}>Замена счетчиков воды</div>
                  <div className={styles.price_sum}>от <span>400</span> <span>₽</span></div>
                </div>
              </div>
              <ButtonDefault className={styles.price_btn}>Заказать</ButtonDefault>
            </div>
            <div className={styles.price_item}>
              <div className={styles.price_item_text}>
                <Image src={counterHeatIcon} className={styles.price_item_img} />
                <div>
                  <div className={styles.price_title}>Замена счетчиков тепла</div>
                  <div className={styles.price_sum}><span>3 700</span> <span>₽</span></div>
                </div>
              </div>
              <ButtonDefault className={styles.price_btn}>Заказать</ButtonDefault>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
