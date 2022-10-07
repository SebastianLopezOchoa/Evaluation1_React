import Img from './Img'
import Button from './Button'
import styles from './Product.module.css'
const Product = ({ product, addToCart }) => {
    return (
        <div className={styles.container}>
            <Img
                product={product}
            />
            <div className={styles.content}>
                <p>{product.name}</p>
                <p>${product.price}</p>
                <Button
                    addToCart={addToCart}
                    product={product}
                />
            </div>
        </div>
    )
}

export default Product