import Image from "next/image";
import styles from './logo.module.css'

export default function Logo(){
    return (
        <div className={styles.logo}>
            <Image src="/products/logodino.png" width={100} height={100}/>
            <h1 className={styles.name}>DinoStore</h1>
        </div>
    )
}