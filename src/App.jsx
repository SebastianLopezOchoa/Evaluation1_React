import styles from './App.module.css'
import data from './data'
import ProductList from "./components/ProductList"
import Header from './components/Header'
import { useState } from 'react'
import ShoppingCart from './components/ShoppingCart'
import CartSummary from './components/CartSummary'
const App = () => {
  const { products } = data;
  const [prod, setProd] = useState(products.map((pro) => { return { ...pro, quantityShopping: 0 } }))
  const [shoppingCarts, setShoppingCarts] = useState([]);
  const [inputCupon, setInputCupon] = useState('');
  const [cupon, setCupon] = useState(10)

  const addToCart = (product) => {
    const exist = shoppingCarts.find((shoppingCart) => shoppingCart.id === product.id);
    if (exist) {
      setShoppingCarts(shoppingCarts.map((shoppingCart) => shoppingCart.id === product.id ? { ...exist, quantityShopping: exist.quantityShopping + 1 } : shoppingCart));
      setProd(prod.map((pro) => pro.id === product.id ? { ...product, quantityShopping: exist.quantityShopping + 1 } : pro));
    } else {
      setShoppingCarts([...shoppingCarts, { ...product, quantityShopping: 1 }]);
      setProd(prod.map((pro) => pro.id === product.id ? { ...product, quantityShopping: 1 } : pro));
    }
  };

  const removeToCart = product => {
    const exist = shoppingCarts.find((shoppingCart) => shoppingCart.id === product.id);
    if (exist.quantityShopping === 1) {
      setShoppingCarts(shoppingCarts.filter((shoppingCart) => shoppingCart.id !== product.id));
      setProd(prod.map((pro) => pro.id === product.id ? { ...product, quantityShopping: exist.quantityShopping - 1 } : pro));
    } else {
      setShoppingCarts(shoppingCarts.map((shoppingCart) => shoppingCart.id === product.id ? { ...exist, quantityShopping: exist.quantityShopping - 1 } : shoppingCart));
      setProd(prod.map((pro) => pro.id === product.id ? { ...product, quantityShopping: exist.quantityShopping - 1 } : pro));
    }
  }

  return (
    <>
      <Header
        shoppingCarts={shoppingCarts}
      />
      <div className={styles.line} />
      <ProductList
        products={prod}
        addToCart={addToCart}
      />
      <div className={styles.line} />
      <div className={styles.container}>
        <div className={styles.main}>
          <h2 className={styles.secundaryTitle}>Shopping Cart</h2>
          <div className={styles.line} />
          <ShoppingCart
            shoppingCarts={shoppingCarts}
            addToCart={addToCart}
            removeToCart={removeToCart}
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