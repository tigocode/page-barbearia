import Image from 'next/image';
import { BsSun, BsMoon } from 'react-icons/bs';

import styles from './Topo.module.css';
import Logo from '../../../public/barbearia.png';

export default function Topo() {
  return(
    <header className={styles.container}>
      <div className={styles.container_topo}>
        <Image src={Logo} className={styles.image} />
        <button>
          <BsSun className={styles.icon} />
        </button>
      </div>
    </header>
  );
};
