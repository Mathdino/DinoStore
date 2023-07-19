import styles from './baseboard.module.css'
import Image from 'next/image'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsSendFill} from 'react-icons/bs'
import Input from '@/components/forms/input/input'

export default function Baseboard () {
    return (
        <div className={styles.base}>
            <div className={styles.basetotal}>
                <Image src="/products/logodino.png" width={200} height={200}/>
                <div className={styles.media}>
                     <ul className={styles.contact}>Contatos</ul>
                    <li><BsInstagram className={styles.insta}/>  Instagram/Dino.Store</li>
                    <li><BsFacebook className={styles.faceb}/>  Facebook/Dino.Store</li>
                    <li><BsWhatsapp className={styles.wpp}/>  (11) 99999-9999</li>
                </div>
               <div className={styles.input}>
                <p>Receba notificações de Lançamentos: </p>
                <Input type="text" placeholder= "Digite seu e-mail . . ." fullWidth/> 
                <BsSendFill className={styles.send}/>
               </div>
        </div>
        <div className={styles.copy}>
            <p>© Copyright 2023 Dino Store S.A.</p>
        </div>
        </div>
    )
}