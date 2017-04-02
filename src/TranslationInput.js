import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import './TranslationInput.css'

const TranslationInput = (props) => (
  <form id="translate-form">
    <FormGroup
      controlId="formControlsTextarea"
      validationState={props.validation}>
      <ControlLabel>Unicode runic translator</ControlLabel>
      <FormControl
        componentClass="textarea"
        id="translation-input"
        value={props.value}
        placeholder="Enter text"
        onChange={(e) => props.handleChange(e)} />
      <FormControl.Feedback />
      <HelpBlock>Start typing and your text will be translated into unicode runes.</HelpBlock>
    </FormGroup>
  </form>
)

TranslationInput.propTypes = {
  validation: React.PropTypes.string,
  value: React.PropTypes.string,
  handleChange: React.PropTypes.func.isRequired
};

export default TranslationInput;
