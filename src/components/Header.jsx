import styles from './Header.module.css'
import { MdShoppingCart } from 'react-icons/Md'
const Header = ({ shoppingCarts }) => {
  return (
    <header className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.overallTitle}>Evaluation 1</h1>
      </div>
      <div className={styles.secundary}>
        <button className={styles.btn}>
          <MdShoppingCart /> {shoppingCarts.length} {shoppingCarts.length == 1 ? 'Product' : 'Products'} 
        </button>
      </div>
    </header>
  )
}

export default Header