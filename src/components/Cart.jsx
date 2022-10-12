import styles from './Cart.module.css'
import Img from './Img'
const Cart = ({ shoppingCart, inputAvailability, setinputAvailability, availability, setAvailability }) => {

    const handleInputAvailability = ({ target }) => {
        setinputAvailability(target.value);
    };

    const handlerSubmitAvailability = (env) => {
        //in progress 
        env.preventDefault();
        setAvailability(inputAvailability);
    };


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
                <form onSubmit={handlerSubmitAvailability}>
                    <input type="number" 
                        value={inputAvailability}
                        onChange={handleInputAvailability}
                         required/>
                    <button type='submit'>Apply</button>
                </form>
            </div>
        </div>
    )
}

export default Cart