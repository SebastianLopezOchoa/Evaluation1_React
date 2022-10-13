import { useEffect, useState } from 'react';
import styles from './Cart.module.css';
import Img from './Img';
const Cart = ({ shoppingCart, addToCart, removeToCart }) => {
	const [completed, setCompleted] = useState(false);

	useEffect(() => {
		if (shoppingCart.quantityAvailable === shoppingCart.quantityShopping) {
			setCompleted(true);
		} else {
			setCompleted(false);
		}
	}, [shoppingCart]);

	return (
		<div key={shoppingCart.id} className={styles.container}>
			<Img product={shoppingCart} />
			<div className={`${styles.content} ${styles.main}`}>
				<p className={styles.uppercase}>{shoppingCart.name}</p>
				<p className={styles.color}>{shoppingCart.description}</p>
				<p>${shoppingCart.price}</p>
			</div>
			<div className={styles.secundary}>
				<button
					onClick={() => removeToCart(shoppingCart)}
					className={styles.remove}
				>
					-
				</button>
				<p className={styles.text}>{shoppingCart.quantityShopping} pcs</p>
				<button
					onClick={() => addToCart(shoppingCart)}
					className={`${styles.add} ${completed ? styles.none : ''}`}
				>
					+
				</button>
				<button className={`${styles.addNone} ${completed ? '' : styles.none}`}>
					+
				</button>
			</div>
		</div>
	);
};

export default Cart;
