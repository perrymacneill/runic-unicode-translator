import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const TranslationInput = (props) => (
  <form id="translate-form">
    <FormGroup
      controlId="formBasicText"
      validationState={props.validation}>
      <ControlLabel>Unicode runic translator</ControlLabel>
      <FormControl
        type="text"
        value={props.value}
        placeholder="Enter text"
        onChange={(e) => props.handleChange(e)} />
      <FormControl.Feedback />
      <HelpBlock>Start typing and your text will be translated in unicode runes.</HelpBlock>
    </FormGroup>
  </form>
)

TranslationInput.propTypes = {
  validation: React.PropTypes.string,
  value: React.PropTypes.string,
  handleChange: React.PropTypes.func.isRequired
};

export default TranslationInput;
