import styles from './navbar.module.css'
import {BsCart4} from 'react-icons/bs'
import Logo from '@/components/logo/logo'
import Input from '@/components/forms/input/input'
import Cartbutton from '@/components/forms/cartbutton/cartbutton'


export default function Navbar({cart, onRemove }) {
    return (
        <nav className={styles.navbar}>
            <Logo />
            <div className={styles.search}>
            <Input type="text" placeholder= "Buscar" fullWidth/>
            </div>
            <Cartbutton 
              cart={cart}  
              onRemove={onRemove}
            />
        </nav>
    )
}