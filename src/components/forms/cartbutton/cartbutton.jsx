import { useState } from 'react' /* State é como se fosse uma variavél, é usado para criar funções*/

import styles from './cartbutton.module.css'
import {BsCart4} from 'react-icons/bs'

import CartMenu from '@/components/cartMenu/cartMenu'

export default function Cartbutton ({ cart, onRemove }) {
    const [open, setOpen] = useState (false) 
    /*Open começara como falso e só será abreto se o usuário clicar no ícone*/
    return(
        <div>
            <BsCart4 className={styles.icon}  size={40} 
            onClick={() => {setOpen (!open)}} /*Toda vez que clicar ele irá inverter o valor, assim só poderá abrir se clicar no ícone e para fechar tb*/
            />
            {open && <CartMenu cart={cart} onRemove={onRemove}/>} 
            {/*Validar o valor da variavel e so aparecer quando for true (clicar)*/}
        </div>

    )
}