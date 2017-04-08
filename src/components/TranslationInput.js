import { connect } from 'react-redux'
import { setTranslation, setValue } from '../actions/index.js'
import Input from './Input'

const mapStateToProps = (state) => {
  return {
    spacing: state.spacing,
    runes: state.runes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e, spacing, runes) => {
      dispatch(setValue(e.target.value))
      dispatch(setTranslation(e.target.value, spacing, runes))
    }
  }
}

const TranslationInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)

export default TranslationInput;
