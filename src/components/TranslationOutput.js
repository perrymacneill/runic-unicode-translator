import { connect } from 'react-redux'
import Output from './Output'

const mapStateToProps = (state) => {
  return {
    translation: state.translation
  }
}

const TranslationOutput = connect(
  mapStateToProps
)(Output)

export default TranslationOutput
