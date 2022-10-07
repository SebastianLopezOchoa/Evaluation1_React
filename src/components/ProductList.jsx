import Product from './Product'
import styles from './ProductList.module.css'
const ProductList = ({ products, addToCart }) => {
    return (
        <main className={styles.container}>
            <div className={styles.column}>
                {products.map((product) => (
                    <Product key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </main>
    )
}

export default ProductList