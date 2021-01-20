/**
 *
 * @param {String} src
 * @param {String} alt
 * @param {String} width
 * @param {String} height
 */
const Image = ({ src, alt, width='', height='', className }) => (
  <img src={src} alt={alt} width={width} height={height} className={className}/>
)

export default Image