import React from 'react';
import { Well } from 'react-bootstrap';
import '../App.css';

const Output = ({ translation }) => (
  <Well id="translation-well">
    <h2>{translation}</h2>
  </Well>
)

export default Output;
