import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import '../App.css'

const Input = ({ handleChange, spacing, runes }) => (
  <form id="translate-form">
    <FormGroup
      controlId="formControlsTextarea"
      validationState={null}>
      <ControlLabel>Runic Unicode translator</ControlLabel>
      <FormControl
        componentClass="textarea"
        placeholder="Enter text"
        onChange={(e) => handleChange(e, spacing, runes)} />
      <HelpBlock>Start typing and your text will be translated into unicode runes.</HelpBlock>
    </FormGroup>
  </form>
)

export default Input;
