

import { Rubik } from 'next/font/google';
import styles from './ButtonDefault.module.scss'

import { Button } from 'antd';

export const rubik = Rubik({
    subsets: ['latin'],
})

export default function ButtonDefault({ children, className, classNameTitle }) {

    const cls = [styles.wrp, rubik.className]
    if (className) cls.push(className)

    return <Button className={cls.join(" ")}>
        <div className={classNameTitle}>
            {children}
        </div>

    </Button>
}

