/**
 *
 * @param {String} text
 * @param {String} clsNames Array of class names
 */

const Button = ({text, clsNames}) => (
  <button className={clsNames}>{text}</button>
)

export default Button