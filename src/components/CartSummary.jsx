import styles from './CartSummary.module.css'
const CartSummary = ({ shoppingCarts }) => {
    const subTotalPrice = shoppingCarts.reduce(
        (prev, act) => (prev += act.price * act.quantityShopping),
        0
    );
    if (shoppingCarts.length === 0) return <></>
    return (
        <div className={styles.container}>
            <div>
                <span className={styles.bold}>ENTER COUPON CODE</span>
                <input type="number" className={styles.right} min={0} max={100} />
            </div>
            <div className={styles.line}></div>
            <div className={`${styles.margin} ${styles.colorGray}`}>
                <span>SUBTOTAL</span>
                <span className={styles.right}>${subTotalPrice}</span>
            </div>
            <div className={`${styles.margin} ${styles.colorGray}`}>
                <span>SHIPPING</span>
                <span className={styles.right}>FREE</span>
            </div>
            <div className={styles.colorGray}>
                <span>COUPON</span>
                <span className={styles.right}>$</span>
            </div>
            <div className={styles.line}></div>
            <div>
                <span className={styles.font}>TOTAL</span>
                <span className={`${styles.right} ${styles.font} ${styles.bold}`}>${subTotalPrice}</span>
            </div>
        </div>
    )
}

export default CartSummary