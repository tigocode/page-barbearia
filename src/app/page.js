'use client';
import { useState } from 'react';
import Image from 'next/image';
import { BsSun, BsMoon } from 'react-icons/bs';

import styles from './page.module.css';
import Logo from '../../public/barbearia.png';

export default function Home(props) {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.container_topo}>
          <Image src={Logo} className={styles.image} />
          <button /* onClick={} */>
            <BsSun className={styles.icon} />
          </button>
        </div>
      </header>
      <main className={styles.container_main}>
        <section className={styles.container_banner}>
        </section>
        <section className={styles.container_text}>
          <h1>Bem-vindo a Barber Shop</h1>
          <p className={styles.text}>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
          <p className={styles.text}>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
          <p className={styles.assinatura}>S. Kelly</p>
        </section>
      </main>
    </>
  );
}
