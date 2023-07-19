import styles from './baseboard.module.css'
import Image from 'next/image'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsMdEmail} from 'react-icons/bs'

export default function Baseboard () {
    return (
        <footer>
        <div className={styles.base}>
            <div className={styles.basetotal}>
                <Image src="/products/logodino.png" width={200} height={200}/>
                <div className={styles.media}>
                    <BsInstagram className={styles.insta}/>
                    <BsFacebook className={styles.faceb}/>
                    <BsWhatsapp className={styles.wpp}/>
                </div>
                <div className={styles.list}>
                    <ul className={styles.title}>Institucional</ul>
                    <li>Sobre nós</li>
                    <li>Ajuda</li>
                    <li>Contato</li>

                </div>
                </div>
        </div>





        <div className={styles.copy}>
            <p>© Copyright 2023 Dino Store S.A.</p>
        </div>
            </footer>
    )
}