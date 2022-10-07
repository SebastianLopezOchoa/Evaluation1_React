import styles from './App.module.css'
import data from './data'
import ProductList from "./components/ProductList"
import Header from './components/Header'
import { useState } from 'react';
import ShoppingCart from './components/ShoppingCart';
import CartSummary from './components/CartSummary';
const App = () => {
  const { products } = data;
  const [shoppingCarts, setShoppingCarts] = useState([]);
  const [inputCupon, setInputCupon] = useState('');
  const [cupon, setCupon] = useState(10)

  const addToCart = (product) => {
    const exist = shoppingCarts.find((shoppingCart) => shoppingCart.id === product.id);
    if (exist) {
      setShoppingCarts(
        shoppingCarts.map((shoppingCart) =>
          shoppingCart.id === product.id ? { ...exist, quantityShopping: exist.quantityShopping + 1 } : shoppingCart
        )
      );
    } else {
      setShoppingCarts([...shoppingCarts, { ...product, quantityShopping: 1 }]);
    }
  };

  return (
    <>
      <Header
        shoppingCarts={shoppingCarts}
      />
      <div className={styles.line} />
      <ProductList
        products={products}
        addToCart={addToCart}
      />
      <div className={styles.line} />
      <div className={styles.container}>
        <div className={styles.main}>
          <h2 className={styles.secundaryTitle}>Shopping Cart</h2>
          <div className={styles.line} />
          <ShoppingCart
            shoppingCarts={shoppingCarts}
          />
          <div className={styles.line} />
        </div>
        <div className={styles.secundary}>
          <h2 className={styles.secundaryTitle}>Summary</h2>
          <div className={styles.line} />
          <CartSummary
            shoppingCarts={shoppingCarts}
            inputCupon={inputCupon}
            setInputCupon={setInputCupon}
            cupon={cupon}
            setCupon={setCupon}
          />
        </div>
      </div>
    </>
  )
};

export default App