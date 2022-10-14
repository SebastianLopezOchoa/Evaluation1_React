import { useEffect, useState } from 'react';
import styles from './Cart.module.css';
import Img from './Img';
import { MdDelete } from 'react-icons/Md';
const Cart = ({
	shoppingCart,
	shoppingCarts,
	setShoppingCarts,
	prod,
	setProd,
	deleteShoppingCart,
}) => {
	const [inputAvailability, setinputAvailability] = useState('');
	const [availability, setAvailability] = useState(0);

	const handleInputAvailability = ({ target }) => {
		setinputAvailability(target.value);
	};

	const handlerSubmitAvailability = env => {
		env.preventDefault();
		setAvailability(inputAvailability);
		setinputAvailability('');
	};

	useEffect(() => {
		if (availability !== 0) {
			setShoppingCarts(
				shoppingCarts.map(pro =>
					pro.id === shoppingCart.id
						? { ...shoppingCart, quantityShopping: parseInt(availability) }
						: pro
				)
			);
			setProd(
				prod.map(pro =>
					pro.id === shoppingCart.id
						? { ...shoppingCart, quantityShopping: parseInt(availability) }
						: pro
				)
			);
			setAvailability(0);
		}
	}, [availability]);
	return (
		<div key={shoppingCart.id} className={styles.container}>
			<Img product={shoppingCart} />
			<div className={`${styles.content} ${styles.main}`}>
				<p className={styles.uppercase}>{shoppingCart.name}</p>
				<p className={styles.color}>{shoppingCart.description}</p>
				<p>${shoppingCart.price}</p>
			</div>
			<div className={styles.secundary}>
				<form onSubmit={handlerSubmitAvailability} className={styles.form}>
					<span className={styles.text}>
						{shoppingCart.quantityShopping} pcs{' '}
					</span>
					<input
						type='number'
						className={styles.input}
						placeholder='qty'
						value={inputAvailability}
						onChange={handleInputAvailability}
						min='1'
						max={shoppingCart.quantityAvailable}
						required
					/>
					<button type='submit' className={styles.btn}>
						Apply
					</button>
				</form>
				<button
					onClick={() => deleteShoppingCart(shoppingCart)}
					className={styles.bt}
				>
					<MdDelete />
				</button>
			</div>
		</div>
	);
};

export default Cart;
