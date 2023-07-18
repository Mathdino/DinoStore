import { useState } from 'react'
import Head from 'next/head'

import styles from '@/styles/index.module.css'

import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import Gamecard from '@/components/cards/gameCard/gameCard'


export default function Home() {
  const [cart, setCart] = useState ([])

  const handleAddProduct = (info) => {
    setCart ([...cart, info]) /* esta função é para add um produto*/
  }

  const handleRemoveProdutc = (pos) => {
    setCart (cart.filter((obj, posObj) => posObj !== pos)) /*Pega os obj q estão na posição e remove do carrinho*/ 
  }
  return (
    <>
      <Head>
        <title>DinoStore: A sua loja online de games</title>
        <meta name="description" content="DinoStore: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProdutc}/>
        <Container>
          <div className={styles.session}>
            <Subtitle>Promoções</Subtitle>      {/* CHAVE "CHILDREN"*/}
            <div className={styles.salecontainer}>
              <SaleCard 
                image = {'league-of-legends.jpg'}
                fullPrice='59,99'
                discountPrice='11,99'
                discount='80%'
                onAdd={() =>
                  handleAddProduct ({ name:'League of Legends', price:11.99, image: 'league-of-legends.jpg'})}
              />
              <SaleCard 
                image = {'dota-2.jpg'}
                fullPrice='49,99'
                discountPrice='19,99'
                discount='60%'
                onAdd={() =>
                  handleAddProduct ({ name:'Dota 2', price:19.99, image: 'dota-2.jpg'})}
              />
              <SaleCard 
                image = {'valorant.jpg'}
                onAdd={() =>
                  handleAddProduct ({ name:'Valorant', price:49.99, image: 'valorant.jpg'})}
              />
            </div>
          </div>
          <div className={styles.session}>
            <Subtitle>Outros Jogos</Subtitle>   {/* CHAVE "CHILDREN"*/}
            <div className={styles.gamecontainer}>
            <Gamecard 
                card ={'gtavi.jpg'}
                title ={'GTA VI'}
                category ={'Mundo aberto, Jogo eletrônico de ação, Jogabilidade não linear'}
                price= {'0,99'}
                onAdd={() =>
                  handleAddProduct ({ name:'GTA VI', price:0.99, image: 'gtavi.jpg'})}
              />
              <Gamecard
              card ={'avatar-frontiers-of-pandora.jpg'}
              title ={'Avatar Frontiers of Pandora'}
              category ={'Mundo aberto, Jogo eletrônico de ação e aventura'}
              price= {'0,99'}
              onAdd={() =>
                handleAddProduct ({ name:'Avatar Frontiers of Pandora', price:0.99, image: 'avatar-frontiers-of-pandora.jpg'})}
              />
              <Gamecard 
                card ={'fc-2024.jpg'}
                title ={'EA Sports FC 24'}
                category ={'Jogo eletrônico de esporte, Jogo eletrônico de simulação'}
                price= {'299,99'}
                onAdd={() =>
                  handleAddProduct ({ name:'EA Sports FC 24', price:299.99, image: 'fc-2024.jpg'})}
              />
              <Gamecard 
                card ={'nba2k24.jpg'}
                title ={'NBA 2K24'}
                category ={'Jogo eletrônico de esporte, Jogo eletrônico de simulação '}
                price= {'249,99'}
                onAdd={() =>
                  handleAddProduct ({ name:'NBA 2K24', price:249.99, image: 'nba2k24.jpg'})}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
