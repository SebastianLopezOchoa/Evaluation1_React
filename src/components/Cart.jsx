import styles from './Cart.module.css'
import Img from './Img'
const Cart = ({ shoppingCart }) => {
    return (
        <div key={shoppingCart.id} className={styles.container}>
            <Img
                product={shoppingCart}
            />
            <div className={`${styles.content} ${styles.main}`}>
                <p className={styles.uppercase}>{shoppingCart.name}</p>
                <p className={styles.color}>{shoppingCart.description}</p>
                <p>${shoppingCart.price}</p>
            </div>
            <div className={styles.secundary}>
                <p>{shoppingCart.quantityShopping}</p>
            </div>
        </div>
    )
}

export default Cart