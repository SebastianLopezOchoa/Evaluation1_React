import styles from './App.module.css'
import data from './data'
import ProductList from "./components/ProductList"
import Header from './components/Header'
const App = () => {
  const { products } = data;
  return (
    <>
      <Header />
      <div className={styles.line} />
      <ProductList
        products={products}
      />
      <div className={styles.line} />
      <div className={styles.container}>
        <div className={styles.main}>
          <h2 className={styles.secundaryTitle}>Shopping Cart</h2>
          <div className={styles.line} />

        </div>
        <div className={styles.secundary}>
          <h2 className={styles.secundaryTitle}>Summary</h2>
          <div className={styles.line} />

        </div>
      </div>
    </>
  )
};

export default App