import Cart from './Cart'
import styles from './ShoppingCart.module.css'
const ShoppingCart = ({ shoppingCarts }) => {
    if (shoppingCarts.length === 0) return <h5 className={styles.textEmpty}>Your shopping cart is empty</h5>
    return (
        <div>
            {shoppingCarts.map((shoppingCart) => (
                <Cart key={shoppingCart.id}
                    shoppingCart={shoppingCart}
                />
            ))}
        </div>
    )
}

export default ShoppingCart