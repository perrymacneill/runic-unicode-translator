import { connect } from 'react-redux'
import { setRunes, setSpacing, setTranslation } from '../actions/index.js'
import Buttons from './Buttons'

const mapStateToProps = (state) => {
  return {
    spacing: state.spacing,
    runes: state.runes,
    value: state.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSpacingClick: (value, spacing, runes) => {
      dispatch(setSpacing(spacing))
      dispatch(setTranslation(value, spacing, runes))
    },
    onRunesClick: (value, spacing, runes) => {
      dispatch(setRunes(runes))
      dispatch(setTranslation(value, spacing, runes))
    }
  }
}

const InputButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons)

export default InputButtons;
