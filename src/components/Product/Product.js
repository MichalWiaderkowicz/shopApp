import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage.js';
import ProductForm from '../ProductForm/ProductForm.js';

const Product = (props) => {

const {title, basePrice, colors, name, sizes, } = props

const [currentColor, setCurrentColor] = useState(colors[0]);
const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const price = useMemo(() => {
    let sizePrice = sizes.find((element) => element.name === currentSize);
    let addPrice = sizePrice.additionalPrice;
    const totalPrice = basePrice + addPrice;
    
    return totalPrice;
  },[basePrice, sizes, currentSize]);

  const cart = e => {
    e.preventDefault();
    console.log('Summary',);
    console.log('==========',);
    console.log('Name', title);
    console.log('Price', price);
    console.log('Size', currentSize);
    console.log('Color', currentColor);
  }

 return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm cart={cart} colors={colors} sizes={sizes} currentColor={currentColor} currentSize={currentSize} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize} />
      </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;