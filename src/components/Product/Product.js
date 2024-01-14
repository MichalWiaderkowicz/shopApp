import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = (props) => {

const {title, basePrice, colors, name, sizes,} = props

const [currentColor, setCurrentColor] = useState(colors[0]);
const [currentSize, setCurrentSize] = useState(sizes[0].name);
//const [currentPrice, setCurrentPrice] = useState(sizes[0].additionalPrice);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = () => {
    let sizePrice = sizes.find((element) => element.name === currentSize);
    //console.log('sizePrice', sizePrice);
    let addPrice = sizePrice.additionalPrice;
    //console.log('addPrice', addPrice);
    let totalPrice = basePrice + addPrice;
    //console.log('totalPrice', totalPrice);
    
    return totalPrice;
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) => (
                <li key={size.name}>
                  <button type="button" className={clsx(currentSize === size.name && styles.active)} onClick={(e) => setCurrentSize(size.name)}>{size.name}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {colors.map((color) => (
              <li key={color}>
                 <button type="button" className={clsx(prepareColorClassName(color), currentColor === color && styles.active)} onClick={(e) => setCurrentColor(color)}></button>
              </li>
            ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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