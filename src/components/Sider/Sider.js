
'use client'
import React, { useMemo } from 'react';
import styles from './Sider.module.scss'
import gosuslugiIcon from "../../assets/svg/gosuslugi.svg";
import mosruIcon from "../../assets/svg/mosru.svg";
import kontrolIcon from "../../assets/svg/kontrol.svg";
import Image from 'next/image';
import counterIcon from "../../assets/svg/menu-counter.svg";
import changeIcon from "../../assets/svg/menu-change.svg";
import installIcon from "../../assets/svg/menu-install.svg";
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import useWindowSize from '@/app/hooks/useWindowSize';



const linksArray = [
    {
        title: 'Поверка счетчиков',
        url: '/',
        icon: counterIcon
    },
    {
        title: 'Замена счетчиков',
        url: '/replacement',
        icon: changeIcon
    },
    {
        title: 'Установка счетчиков',
        url: '/installation',
        icon: installIcon
    },
]

export default function Sider({ isOpen, toggleSidebar }) {
    const { width, height } = useWindowSize();
    const pathname = usePathname()
    const templateLinks = useMemo(() => {
        return linksArray.map((item, key) =>
            <Link className={[styles.link, pathname === item.url ? styles.link_active : ""].join(" ")} href={item.url} key={key} onClick={isOpen && toggleSidebar}>
                <Image src={item.icon} />{item.title}</Link>)

    }, [pathname, isOpen])




    return (
        <aside className={[styles.wrp, isOpen ? styles.active : ''].join(" ")}>
            <div>
                <div className={styles.arrow} onClick={toggleSidebar}>
                    <div className={[styles.arrow_right, isOpen ? '' : styles.arrow_left].join(" ")}>
                    </div>
                </div>
                <div className={styles.title}>КЛЮЧЕВЫЕ НАПРАВЛЕНИЯ</div>
                <div className={[styles.links, isOpen ? '' : styles.links_closed].join(" ")}>
                    {templateLinks}
                    {//                    <div><Image src={workIcon} /> <span>Сантехнические<br />работы</span></div>
                    }
                </div>
            </div>
            <div className={[styles.logos, isOpen ? '' : styles.logos_hide].join(" ")}>
                <Image src={gosuslugiIcon} />
                <Image src={mosruIcon} />
                <Image src={kontrolIcon} />
            </div>
            <div className={styles.phone}>
                <div>
                    <div className={styles.time}>Ежедневно с 8:00 до 21:00</div>
                    <a href="tel:+74994606658" className={styles.phone_number}><b>+7 (499) 460-66-58</b></a>
                </div>
            </div>
        </aside>
    );
}


