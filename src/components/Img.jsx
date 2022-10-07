import styles from './Img.module.css'
const Img = ({ product }) => {
    return (
        <img src={product.image} alt="Image shoes" className={styles.sizeImg} />
    )
}

export default Img