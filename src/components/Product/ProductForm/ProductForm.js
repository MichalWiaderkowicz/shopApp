import styles from './ProductForm.module.scss';
import Button from './Button/Button.js';
import PropTypes from 'prop-types';
import OptionColor from './OptionColor/OptionColor.js'

import OptionSize from './OptionSize/OptionSize.js';

const ProductForm = ({ cart, colors, sizes, currentColor, currentSize, setCurrentColor, setCurrentSize, prepareColorClassName }) => {
      return (
        <form>
          <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
          <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} prepareColorClassName={prepareColorClassName} cart={cart} />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart"  onClick={cart}/>
          </Button>
        </form>
      )
}

ProductForm.propTypes = {
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
}
export default ProductForm;