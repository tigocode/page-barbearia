import Image from 'next/image';

import styles from './Topo.module.css';
import Logo from '../../../public/barbearia.png';
import { BsSun, BsMoon } from "react-icons/bs";

export default function Topo() {
  return(
    <header>
      <div>
        <Image src={Logo} />
        <button>
          <BsSun />
        </button>
      </div>
    </header>
  );
};
