'use client';
import { useState } from 'react';
import Image from 'next/image';
import { BsSun, BsMoon } from 'react-icons/bs';

import styles from './Topo.module.css';
import Logo from '../../../public/barbearia.png';

export default function Topo() {
  const [ ehThemeDark, setEhThemeDark ] = useState(false);

  console.log(ehThemeDark);

  function toChangeTheme() {
    setEhThemeDark(!ehThemeDark);
    console.log(ehThemeDark);
  }
  return(
    <header className={styles.container}>
      <div className={styles.container_topo}>
        <Image src={Logo} className={styles.image} />
        <button onClick={toChangeTheme}>
          <BsSun className={styles.icon} />
        </button>
      </div>
    </header>
  );
};
