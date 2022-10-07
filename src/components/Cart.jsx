import styles from './Cart.module.css'
import Img from './Img'
import React from 'react'

const Cart = ({ product }) => {
    return (
        <div key={product.id} className={styles.container}>
            <Img
                product={product}
            />
            <div className={styles.content}>
                <p className={styles.uppercase}>{product.name}</p>
                <p className={styles.color}>{product.description}</p>
                <p>${product.price}</p>
            </div>

        </div>
    )
}

export default Cart