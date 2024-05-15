import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Menu } from '../componentes/Menu';
import 'bootstrap/dist/css/bootstrap.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Menu></Menu>
      <main className={styles.main}>
        <h1 className={styles.maintitle}>Página Inicial</h1>
      </main>
    </div>
  )
}