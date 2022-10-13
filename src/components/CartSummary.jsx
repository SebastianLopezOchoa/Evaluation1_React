import styles from './CartSummary.module.css';
const CartSummary = ({
	shoppingCarts,
	inputCupon,
	setInputCupon,
	cupon,
	setCupon,
}) => {
	const subTotalPrice = shoppingCarts.reduce(
		(prev, act) => (prev += act.price * act.quantityShopping),
		0
	);

	const handleInputCupon = ({ target }) => {
		setInputCupon(target.value);
	};

	const handlerSubmitCupon = env => {
		env.preventDefault();
		setCupon(inputCupon);
		setInputCupon('');
	};

	if (shoppingCarts.length === 0) return <></>;
	return (
		<div className={styles.container}>
			<div>
				<form onSubmit={handlerSubmitCupon}>
					<input
						type='number'
						placeholder='ENTER COUPON CODE'
						className={styles.inputNumber}
						value={inputCupon}
						onChange={handleInputCupon}
						min='0'
						max='100'
						required
					/>
					<button type='submit'>Apply</button>
					<span className={`${styles.marginCupon} ${styles.right}`}>
						{cupon}
					</span>
				</form>
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
				<span className={styles.right}>${cupon}</span>
			</div>
			<div className={styles.line}></div>
			<div>
				<span className={styles.font}>TOTAL</span>
				<span className={`${styles.right} ${styles.font} ${styles.bold}`}>
					${subTotalPrice - cupon}
				</span>
			</div>
		</div>
	);
};

export default CartSummary;
