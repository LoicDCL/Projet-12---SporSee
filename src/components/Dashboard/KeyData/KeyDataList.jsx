import PropTypes from 'prop-types'
import KeyData from './KeyData'

import caloriesIcon from '../../../assets/icons/calories-icon.png'
import proteinIcon  from '../../../assets/icons/protein-icon.png'
import carbsIcon    from '../../../assets/icons/carbs-icon.png'
import fatIcon      from '../../../assets/icons/fat-icon.png'

function KeyDataList({ keyData }) {
  return (
    <>
      <KeyData icon={caloriesIcon} value={`${keyData.calories}kCal`}      label="Calories"  color="#FBEAEA" />
      <KeyData icon={proteinIcon}  value={`${keyData.proteins}g`}         label="Proteines" color="#E9F4FB" />
      <KeyData icon={carbsIcon}    value={`${keyData.carbohydrates}g`}    label="Glucides"  color="#FAF6E5" />
      <KeyData icon={fatIcon}      value={`${keyData.lipids}g`}           label="Lipides"   color="#FBEAEF" />
    </>
  )
}

KeyDataList.propTypes = {
  keyData: PropTypes.shape({
    calories:      PropTypes.number.isRequired,
    proteins:      PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    lipids:        PropTypes.number.isRequired,
  }).isRequired,
}

export default KeyDataList
