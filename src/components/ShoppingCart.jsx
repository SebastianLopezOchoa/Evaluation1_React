import Cart from './Cart'
import styles from './ShoppingCart.module.css'
const ShoppingCart = ({ shoppingCarts }) => {
    if (shoppingCarts.length === 0) return <h5 className={styles.textEmpty}>Your shopping cart is empty</h5>
    return (
        <div>
            {shoppingCarts.map((product) => (
                <Cart key={product.id}
                    product={product}
                />
            ))}
        </div>
    )
}

export default ShoppingCart