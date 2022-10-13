import Img from './Img';
import Button from './Button';
import styles from './Product.module.css';
import { useEffect, useState } from 'react';
const Product = ({ product, addToCart }) => {
	const [completed, setCompleted] = useState(false);

	useEffect(() => {
		if (product.quantityAvailable === product.quantityShopping) {
			setCompleted(true);
		} else {
			setCompleted(false);
		}
	}, [product]);

	return (
		<div className={styles.container}>
			<Img product={product} />
			<div className={styles.content}>
				<p>{product.name}</p>
				<p>${product.price}</p>
				<Button addToCart={addToCart} product={product} completed={completed} />
			</div>
		</div>
	);
};

export default Product;
