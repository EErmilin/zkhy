import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import valuesIcon from "../../assets/svg/info-values.svg";
import noWorkIcon from "../../assets/svg/info-nowork.svg";
import timeIcon from "../../assets/svg/info-time.svg";
import unityIcon from "../../assets/svg/docs-unity.svg";
import counterIcon from "../../assets/svg/counter.svg";
import docsIcon from "../../assets/svg/docs.svg";
import masterIcon from "../../assets/svg/master.svg";
import plombIcon from "../../assets/svg/plomb.svg";
import counterHeatIcon from "../../assets/svg/counter-heat.svg";
import counterWaterIcon from "../../assets/svg/counter-water.svg";
import Form from "@/components/Form/Form";
import Counters from "@/components/Counters/Counters";


export default function Home() {


  const renderIncludes = () => {
    const includes = [
      {
        title: 'ВОДОСЧЕТЧИК',
        img: counterIcon
      },
      {
        title: 'РАБОТА МАСТЕРА',
        img: docsIcon
      },
      {
        title: 'ОПЛОМБИРОВКА',
        img: masterIcon
      },
      {
        title: 'ПАКЕТ ДОКУМЕНТОВ ДЛЯ УК',
        img: plombIcon
      },
    ]
    return includes.map((item, key) => <div className={styles.includes_item} key={key}><Image src={item.img} /><span className={styles.includes_item_title}>{item.title}</span></div>)
  }


  return (
    <div>
      <div className={styles.top_bg}>
        <div className={styles.top}>
          <div>
            <div className={styles.title}>
              <div className={styles.sub_title}>Замена счетчиков воды в Москве</div>
              от 2 150 рублей
            </div>
            <div className={styles.text}>Проверенные и надежные метрологи. Выбирайте округ, дату и время — мастер приедет в течение дня. Результаты поверки водосчетчиков вносятся во ФГИС Аршин.</div>
            <div className={styles.stats_wrp}>
              <div className={styles.stats}>
                <div className={styles.stats_value}>54 045</div>
                <div className={styles.stats_title}>Заявок обработано</div>
              </div>
              <div className={styles.rct} />
            </div>
          </div>
          <Form type={'replacement'}/>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.info_item}>
            <Image src={valuesIcon} />
            <div className={styles.info_item_title}>Отклонения в показаниях</div>
            <div className={styles.info_item_text}>Выбирайте удобный день и часовой <br /> интервал, работаем без выходных</div>
          </div>
          <div className={styles.info_item}>
            <Image src={timeIcon} />
            <div className={styles.info_item_title}>Счетчику более 12 лет</div>
            <div className={styles.info_item_text}>Это максимальный период <br /> эксплуатации</div>
          </div>
          <div className={styles.info_item}>
            <Image src={noWorkIcon} />
            <div className={styles.info_item_title}>Некорректная работа</div>
            <div className={styles.info_item_text}>Неравномерное вращение <br /> крыльчатки, подтеки, конденсат</div>
          </div>
        </div>
        <div className={styles.docs}>
          <h3>Законодательство, регулирующее процедуру замены счетчиков воды</h3>
          <p>Порядок проведения замены индивидуальных приборов учета регламентирован следующими законодательными актами:</p>
          <div className={styles.docs_wrp}>
            <div>
              <div className={styles.docs_item}>
                <Image src={unityIcon} />
                <div>
                  Федеральный закон № 102-ФЗ от 26.06.2008<br />
                  <Link href={''}>«Об обеспечении единства измерений»</Link>
                </div>
              </div>
              <div className={styles.docs_item}>
                <Image src={unityIcon} />
                <div>
                  Федеральный закон № 416-ФЗ от 07.12.2011<br />
                  <Link href={''}> «О водоснабжении и водоотведении»</Link>
                </div>
              </div>
              <div className={styles.docs_item}>
                <Image src={unityIcon} />
                <div>Федеральный закон № 261-ФЗ от 23.11.2009<br />
                  <Link href={''}>«Об энергосбережении и о повышении энергетической эффективности и о внесении изменений в отдельные законодательные акты Российской Федерации»</Link>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.docs_item}>
                <Image src={unityIcon} />
                <div>Постановление Правительства РФ от 4.09.2013 № 776<br />
                  <Link href={''}>«Об утверждении Правил организации коммерческого учета воды, сточных вод»</Link>
                </div>
              </div>
              <div className={styles.docs_item}>
                <Image src={unityIcon} />
                <div>Постановление Правительства РФ от 06.05.2011 № 354<br />
                  <Link href={''}>«О предоставлении коммунальных услуг собственникам и пользователям помещений в многоквартирных домах»</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Counters />
        <div className={styles.includes}>
          <h3>Что входит в стоимость замены счетчиков воды</h3>
          <div className={styles.includes_wrp}>
            {renderIncludes()}
          </div>
        </div>
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
              <button className={styles.price_btn}>Заказать</button>
            </div>
            <div className={styles.price_item}>
              <div className={styles.price_item_text}>
                <Image src={counterHeatIcon} className={styles.price_item_img} />
                <div>
                  <div className={styles.price_title}>Замена счетчиков тепла</div>
                  <div className={styles.price_sum}><span>3 700</span> <span>₽</span></div>
                </div>
              </div>
              <button className={styles.price_btn}>Заказать</button>
            </div>
          </div>
        </div>
        <div className={styles.request}>
          <h3>Выберите подходящую дату и время приема мастера</h3>
          <div>Заполните заявку сейчас и ждите специалиста сегодня или завтра. Выезжаем в течение суток после обращения в удобное время. Результаты будут во ФГИС Аршин на следующий день.</div>
        </div>
        <div className={styles.request}>
          <h3>Ответы на частые вопросы</h3>
          <div>Ответы на частые вопросы</div>
        </div>
      </div>
    </div>
  );
}
