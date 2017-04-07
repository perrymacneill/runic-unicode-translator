import React from 'react';
import { Well } from 'react-bootstrap';
import '../App.css';

const TranslationWell = (props) => (
  <Well id="translation-well">
    <h2>{props.content}</h2>
  </Well>
)


TranslationWell.propTypes = {
  open: React.PropTypes.bool.isRequired,
  content: React.PropTypes.string.isRequired
};

export default TranslationWell;
