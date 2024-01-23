import clsx from "clsx";
import PropTypes from 'prop-types';
import styles from '../OptionColor/OptionColor.module.scss';



const OptionColor = ({prepareColorClassName, currentColor, setCurrentColor, colors }) => {

    return (
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
    )
}

OptionColor.propTypes = {
    prepareColorClassName: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired, 
    setCurrentColor: PropTypes.func.isRequired
}
export default OptionColor;