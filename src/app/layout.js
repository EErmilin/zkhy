import "./globals.scss";
import 'react-calendar/dist/Calendar.css';
import Header from "@/components/Header/Header";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import styles from "./layout.module.scss";
import { Rubik } from 'next/font/google'
import QuestionForm from "@/components/QuestionForm/QuestionForm";
import Logos from "@/components/Logos/Logos";
import Footer from "@/components/Footer/Footer";
import Questions from "@/components/Questions/Questions";
import RequestForm from "@/components/RequestForm/RequestForm";
import Head from "next/head";

export const rubik = Rubik({
  subsets: ['latin'],
})

export const metadata = {
  title: "ЖКХ Управление",
  description: "ПОВЕРКА, ЗАМЕНА И УСТАНОВКА счетчиков воды в Москве",
};



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className={[styles.wrp, rubik.className].join(" ")}>
        <AntdRegistry>

          <div className={styles.content}>
            <Header />
            {children}
            <RequestForm />
            <Questions />
            <QuestionForm />
            <Logos />
            <Header bg={'#E4E9F0'} isShowMenu={false} isShowPhone={true} />
            <Footer />
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
