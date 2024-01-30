import clsx from "clsx";
import PropTypes from 'prop-types';
import styles from '../OptionSize/OptionSize.module.scss'


const OptionSize = ({ sizes, currentSize, setCurrentSize, }) => {
    return (
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
    )
}
OptionSize.propTypes = {
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired, 
    setCurrentSize: PropTypes.func.isRequired
}
export default OptionSize;