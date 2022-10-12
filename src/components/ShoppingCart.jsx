import Cart from './Cart'
import styles from './ShoppingCart.module.css'
const ShoppingCart = ({ shoppingCarts, inputAvailability, setinputAvailability, availability, setAvailability }) => {
    if (shoppingCarts.length === 0) return <h5 className={styles.textEmpty}>Your shopping cart is empty</h5>
    return (
        <div>
            {shoppingCarts.map((shoppingCart) => (
                <Cart key={shoppingCart.id}
                    shoppingCart={shoppingCart}
                    inputAvailability={inputAvailability}
                    setinputAvailability={setinputAvailability}
                    availability={availability}
                    setAvailability={setAvailability}
                />
            ))}
        </div>
    )
}

export default ShoppingCart