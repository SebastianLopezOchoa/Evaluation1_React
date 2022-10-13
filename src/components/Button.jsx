import styles from './Button.module.css';
const Button = ({ product, addToCart, completed }) => {
	return (
		<>
			<button
				onClick={() => addToCart(product)}
				className={`${styles.btn} ${completed ? styles.none : ''}`}
			>
				Add To Cart
			</button>
			<button className={`${styles.btn2} ${completed ? '' : styles.none}`}>
				No Stock
			</button>
		</>
	);
};

export default Button;
