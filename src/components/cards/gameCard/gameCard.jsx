import Image from "next/image"

import styles from './gameCard.module.css'

import Button from "@/components/forms/button/button"

export default function GameCard ( {card, title, category, price, onAdd} ) {
    return (
        <div className={styles.gamecard}>
            <Image className={styles.image} src={`/products/${card}`} alt= {`Produto ${card}`} width={300} height={145}/>
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.category}>{category}</p>
                <div className={styles.pricing}>
                    <h2 className={styles.price}>R${price}</h2>
                    <Button onClick={onAdd}>Adicionar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}

GameCard.defaultProps = {
    card: 'counter-strike.jpg',
    title: 'Counter strike: Global offensive',
    category: 'Ação, estratégia, multijogador',
    price: '99,99'
 }