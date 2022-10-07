import styles from './Button.module.css'
const Button = ({ product, addToCart }) => {

  return (
    <button onClick={() => addToCart(product)} className={styles.btn}>Add To Cart</button>
  )
}

export default Button