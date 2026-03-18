import PropTypes from 'prop-types'
import './KeyData.css'

function KeyData({ icon, value, label, color }) {
  return (
    <div className="key-data">
      <div className="key-data__icon-wrapper" style={{ backgroundColor: color }}>
        <img src={icon} alt={label} className="key-data__icon" />
      </div>
      <div className="key-data__info">
        <span className="key-data__value">{value}</span>
        <span className="key-data__label">{label}</span>
      </div>
    </div>
  )
}

KeyData.propTypes = {
  icon:  PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default KeyData
