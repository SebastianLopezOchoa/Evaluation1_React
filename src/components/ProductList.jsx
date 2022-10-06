import Product from './Product'
import styles from './ProductList.module.css'
const ProductList = ({ products }) => {
    return (
        <main className={styles.container}>
            <div className={styles.column}>
                {products.map((product) => (
                    <Product key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </main>
    )
}

export default ProductList