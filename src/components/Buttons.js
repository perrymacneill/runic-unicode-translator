import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { single, multiple, cross } from '../constants/RuneMap'
import '../App.css'

const Buttons = ({ value, spacing, runes, onSpacingClick, onRunesClick }) => (
  <div id="translation-buttons">
    <div>
      <ButtonGroup>
        <Button onClick={() => onSpacingClick(value, single, runes)} checked>Single</Button>
        <Button onClick={() => onSpacingClick(value, multiple, runes)}>Multiple</Button>
        <Button onClick={() => onSpacingClick(value, cross, runes)}>Cross</Button>
      </ButtonGroup>
    </div>
    <div>
      <ButtonGroup>
        <Button onClick={() => onRunesClick(value, spacing, 'elder')} checked>Elder Futhark</Button>
        <Button onClick={() => onRunesClick(value, spacing, 'younger')}>Younger Futhark</Button>
        <Button onClick={() => onRunesClick(value, spacing, 'anglo')}>Anglo-Saxon</Button>
      </ButtonGroup>
    </div>
</div>
)

export default Buttons;
