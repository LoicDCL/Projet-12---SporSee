import PropTypes from 'prop-types'

function NavItem({ src, alt }) {
  return (
    <button className="nav-left__icon" title={alt}>
      <img src={src} alt={alt} />
    </button>
  )
}

NavItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default NavItem
