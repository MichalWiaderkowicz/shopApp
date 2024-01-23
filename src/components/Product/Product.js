import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage.js';
import ProductForm from '../ProductForm/ProductForm.js';

const Product = (props) => {

const {title, basePrice, colors, name, sizes, } = props

const [currentColor, setCurrentColor] = useState(colors[0]);
const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    let sizePrice = sizes.find((element) => element.name === currentSize);
    let addPrice = sizePrice.additionalPrice;
    let totalPrice = basePrice + addPrice;
    
    return totalPrice;
  };

  const cart = e => {
    e.preventDefault();
    console.log('Summary',);
    console.log('==========',);
    console.log('Name', title);
    console.log('Price', getPrice());
    console.log('Size', currentSize);
    console.log('Color', currentColor);
  }

 return (
    <article className={styles.product}>
      <ProductImage name={name} title={title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
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