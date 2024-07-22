
import styles from './Logos.module.scss'
import p1 from "../../assets/svg/logos/p1.svg";
import p2 from "../../assets/svg/logos/p2.svg";
import p3 from "../../assets/svg/logos/p3.svg";
import p4 from "../../assets/svg/logos/p4.svg";
import p5 from "../../assets/svg/logos/p5.svg";
import p6 from "../../assets/svg/logos/p6.svg";
import p7 from "../../assets/svg/logos/p7.svg";
import p8 from "../../assets/svg/logos/p8.svg";
import p9 from "../../assets/svg/logos/p9.svg";
import p10 from "../../assets/svg/logos/p10.svg";
import Image from 'next/image';

export default function Logos() {



    return <div className={styles.wrp}>
        <Image src={p1}/>
        <Image src={p2}/>
        <Image src={p3}/>
        <Image src={p4}/>
        <Image src={p5}/>
        <Image src={p6}/>
        <Image src={p7}/>
        <Image src={p8}/>
        <Image src={p9}/>
        <Image src={p10}/>
    </div>
}

